
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login realizado",
        description: "Você foi autenticado com sucesso",
      });
      navigate("/videos");
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
      title="Bem-vindo de volta" 
      subtitle="Entre com sua conta para continuar"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
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
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="text-sm font-medium">
              Senha
            </label>
            <Link to="/recuperar-senha" className="auth-link text-xs">
              Esqueceu a senha?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input pr-12"
              placeholder="Sua senha"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              disabled={isLoading}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="pt-2"
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
                Entrar
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-apple group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.div>
        
        <motion.div 
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link to="/criar-conta" className="auth-link">
              Crie uma agora
            </Link>
          </p>
        </motion.div>
      </form>
    </AuthLayout>
  );
};

export default Login;
