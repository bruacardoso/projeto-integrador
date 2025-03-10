
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-6 sm:px-10 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-medium"
        >
          MinimalApp
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-4"
        >
          <Link 
            to="/login" 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Entrar
          </Link>
          <Link 
            to="/criar-conta"
            className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Começar
          </Link>
        </motion.div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              Minimalismo em cada detalhe
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Design intuitivo. <br />Experiência perfeita.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Uma interface limpa e funcional que coloca suas necessidades em primeiro lugar, inspirada nos princípios de design mais refinados.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link 
                to="/criar-conta"
                className="auth-button-primary min-w-[180px]"
              >
                Começar agora
              </Link>
              <Link 
                to="/login"
                className="auth-button-outline min-w-[180px]"
              >
                Fazer login
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
