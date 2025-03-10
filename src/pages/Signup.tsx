
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate account creation delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Conta criada",
        description: "Sua conta foi criada com sucesso",
      });
      navigate("/login");
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
      title="Criar uma conta" 
      subtitle="Preencha os campos abaixo para começar"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div 
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="space-y-2"
        >
          <label htmlFor="name" className="text-sm font-medium">
            Nome completo
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="auth-input"
            placeholder="Seu nome completo"
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
          custom={2}
          className="space-y-2"
        >
          <label htmlFor="password" className="text-sm font-medium">
            Senha
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input pr-12"
              placeholder="Crie uma senha forte"
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
          custom={3}
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
                Criar conta
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-apple group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.div>
        
        <motion.div 
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          custom={4}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/login" className="auth-link">
              Faça login
            </Link>
          </p>
        </motion.div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
