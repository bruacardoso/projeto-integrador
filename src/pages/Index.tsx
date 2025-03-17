
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="py-4 px-6 sm:px-10 flex justify-between items-center bg-white shadow-sm sticky top-0 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          VideoApp
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/videos" className="text-sm font-medium hover:text-primary transition-colors">Vídeos</Link>
          <Link to="/perfil" className="text-sm font-medium hover:text-primary transition-colors">Perfil</Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-4"
        >
          <Link to="/login" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Entrar
          </Link>
          <Link 
            to="/criar-conta"
            className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Criar Conta
          </Link>
        </motion.div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Bem-vindo ao <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">VideoApp</span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Assista, curta e compartilhe vídeos em uma plataforma simples e moderna.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link to="/login" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-sm hover:bg-primary/90 transition-colors">
              <User className="w-5 h-5" />
              Entrar na sua conta
            </Link>
            <Link to="/videos" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg shadow-sm hover:bg-secondary/80 transition-colors">
              <Video className="w-5 h-5" />
              Explorar vídeos
            </Link>
          </div>
        </motion.div>
      </main>
      
      <footer className="py-6 px-6 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2023 VideoApp. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
