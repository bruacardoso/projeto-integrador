
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { useToast } from "@/hooks/use-toast";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, informe seu email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate password reset request delay
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      toast({
        title: "Email enviado",
        description: "Verifique sua caixa de entrada para redefinir sua senha",
      });
    }, 1500);
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <AuthLayout 
      title={submitted ? "Email enviado" : "Recuperar senha"} 
      subtitle={submitted 
        ? "Verifique sua caixa de entrada para o link de recuperação" 
        : "Informe seu email para recuperar sua senha"
      }
    >
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div 
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="space-y-2"
          >
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              placeholder="seu@email.com"
              disabled={isLoading}
            />
          </motion.div>
          
          <motion.div 
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <button
              type="submit"
              className="auth-button-primary w-full group"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
              ) : (
                <>
                  Enviar instruções
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-apple group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.div>
          
          <motion.div 
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-center"
          >
            <Link to="/login" className="auth-link inline-flex items-center">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar para o login
            </Link>
          </motion.div>
        </form>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex justify-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </motion.div>
          </div>
          
          <p className="text-center text-muted-foreground">
            Enviamos instruções para <strong>{email}</strong>. Por favor, verifique sua caixa de entrada e spam.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => setSubmitted(false)}
              className="auth-button-outline w-full"
            >
              Tentar outro email
            </button>
            
            <Link to="/login" className="auth-button-primary w-full justify-center inline-flex">
              Voltar para o login
            </Link>
          </div>
        </motion.div>
      )}
    </AuthLayout>
  );
};

export default PasswordReset;
