
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Search, Heart, Menu } from "lucide-react";

const FeaturedProducts = [
  {
    id: 1,
    name: "Produto Premium",
    price: "R$ 199,90",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    new: true
  },
  {
    id: 2,
    name: "Lançamento Exclusivo",
    price: "R$ 299,90",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    sale: true
  },
  {
    id: 3,
    name: "Coleção Especial",
    price: "R$ 159,90",
    image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    name: "Edição Limitada",
    price: "R$ 259,90",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    new: true
  }
];

const Categories = [
  { name: "Categoria 1", icon: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { name: "Categoria 2", icon: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { name: "Categoria 3", icon: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { name: "Categoria 4", icon: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="py-4 px-6 sm:px-10 flex justify-between items-center bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center">
          <button className="mr-4 lg:hidden">
            <Menu size={24} />
          </button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            ShopModerno
          </motion.div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Início</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Produtos</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Categorias</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Ofertas</a>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-4"
        >
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <Heart size={20} />
          </button>
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <ShoppingCart size={20} />
          </button>
          <Link 
            to="/login" 
            className="hidden sm:block text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Entrar
          </Link>
          <Link 
            to="/criar-conta"
            className="hidden sm:block text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Criar Conta
          </Link>
        </motion.div>
      </header>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary to-primary/10 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="md:w-1/2 space-y-6"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium"
                >
                  Nova Coleção
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight"
                >
                  Descubra Produtos <br /> 
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Exclusivos
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="text-lg text-muted-foreground max-w-lg"
                >
                  Explore nossa coleção exclusiva de produtos de alta qualidade e design moderno para o seu estilo único.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                >
                  <a 
                    href="#produtos"
                    className="auth-button-primary group"
                  >
                    Explorar produtos
                    <ShoppingBag className="ml-2 h-5 w-5" />
                  </a>
                  <a 
                    href="#ofertas"
                    className="auth-button-outline"
                  >
                    Ver ofertas
                  </a>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="md:w-1/2"
              >
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Hero" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 px-6" id="categorias">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-4">Navegue por Categorias</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Encontre facilmente o que você procura através das nossas categorias especiais
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {Categories.map((category, index) => (
                <motion.a
                  key={category.name}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-3 rounded-full overflow-hidden bg-secondary/50">
                    <img src={category.icon} alt={category.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-16 px-6 bg-secondary/30" id="produtos">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-2xl font-bold mb-2">Produtos em Destaque</h2>
                <p className="text-muted-foreground">Nossa seleção de produtos exclusivos para você</p>
              </div>
              <a href="#" className="text-primary font-medium hover:underline hidden md:block">
                Ver todos
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FeaturedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="product-card"
                >
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-image"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <Heart size={18} className="text-muted-foreground hover:text-primary" />
                    </button>
                    {product.new && (
                      <span className="absolute top-3 left-3 product-badge">Novo</span>
                    )}
                    {product.sale && (
                      <span className="absolute top-3 left-3 product-badge bg-accent/20">Oferta</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{product.price}</span>
                      <button className="cart-button">
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8 md:hidden">
              <a href="#" className="text-primary font-medium hover:underline">
                Ver todos os produtos
              </a>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Inscreva-se em nossa newsletter</h2>
                  <p className="text-muted-foreground mb-6">
                    Fique por dentro das últimas novidades, tendências e ofertas exclusivas.
                  </p>
                </div>
                <div className="md:w-1/3 w-full">
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Seu melhor email" 
                      className="auth-input rounded-r-none"
                    />
                    <button className="auth-button-primary rounded-l-none">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ShopModerno</h3>
              <p className="text-muted-foreground mb-4">
                Produtos exclusivos com design moderno para o seu estilo único.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Produtos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Novidades</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Populares</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Ofertas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Entregas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Conta</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
                    Entrar
                  </Link>
                </li>
                <li>
                  <Link to="/criar-conta" className="text-muted-foreground hover:text-primary transition-colors">
                    Criar conta
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2023 ShopModerno. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
