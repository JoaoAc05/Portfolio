/**
 * ContactForm Component
 * 
 * Features:
 * - Form validation (name, email, message)
 * - Success/error feedback with toast
 * - Accessible form inputs
 * - Responsive design
 * 
 * Design: Minimalismo Corporativo Elegante
 * - Clean form layout
 * - Clear labels and error messages
 * - Smooth interactions
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Por favor, corrija os erros no formulário");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (in production, this would send to a backend) <<<<>>>>>
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-l-4 border-l-blue-600">
      <CardHeader>
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-6 h-6 text-blue-600" />
          <div>
            <CardTitle className="text-2xl">Entre em Contato</CardTitle>
            <CardDescription>
              Envie uma mensagem e entrarei em contato em breve
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-medium">
              Nome
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className={errors.name ? "border-red-500 focus:ring-red-500" : ""}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu.email@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-base font-medium">
              Mensagem
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Sua mensagem aqui... (mínimo 10 caracteres)"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={5}
              className={errors.message ? "border-red-500 focus:ring-red-500" : ""}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </>
            )}
          </Button>

          {/* Privacy Notice */}
          <p className="text-xs text-muted-foreground text-center">
            Seus dados serão usados apenas para responder sua mensagem. Não
            compartilhamos informações com terceiros.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
