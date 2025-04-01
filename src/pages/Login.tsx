
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight, ChevronLeft } from "lucide-react";
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
    
    // Simulando autenticação
    try {
      // Aqui seria a chamada para uma API real
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulando armazenamento de token e dados do usuário
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify({
        name: "Usuário Teste",
        email: email
      }));
      
      setIsLoading(false);
      toast({
        title: "Login realizado",
        description: "Você foi autenticado com sucesso",
      });
      navigate("/videos");
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente",
        variant: "destructive",
      });
    }
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-secondary/50 to-primary/10 relative">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-8 left-8"
      >
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/90 text-primary font-medium shadow-sm hover:bg-white hover:shadow-md transition-all"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Voltar para o início
        </Link>
      </motion.div>
      
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
              autoComplete="email"
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
                autoComplete="current-password"
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
    </div>
  );
};

export default Login;
