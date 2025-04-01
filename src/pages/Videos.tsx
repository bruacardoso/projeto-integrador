
import { useState } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, User, Home, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

// Mock video data com thumbnails mais interessantes
const mockVideos = [
  {
    id: 1,
    title: "Como montar um home office eficiente",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    likes: 245,
    duration: "12:34",
    author: "Ana Silva",
    views: "45K"
  },
  {
    id: 2,
    title: "Review: Os melhores produtos para sua coleção",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    likes: 178,
    duration: "08:21",
    author: "Rafael Costa",
    views: "23K"
  },
  {
    id: 3,
    title: "Tutorial: Cuidados essenciais com seus produtos",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    likes: 326,
    duration: "15:47",
    author: "Carla Mendes",
    views: "67K"
  },
  {
    id: 4,
    title: "Tendências para 2024: O que esperar",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    likes: 512,
    duration: "10:15",
    author: "Bruno Alves",
    views: "102K"
  },
  {
    id: 5,
    title: "Guia completo para iniciantes na tecnologia",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    likes: 412,
    duration: "18:30",
    author: "Juliana Martins",
    views: "87K"
  },
  {
    id: 6,
    title: "Os segredos dos especialistas revelados",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    likes: 327,
    duration: "14:50",
    author: "Pedro Gomes",
    views: "56K"
  }
];

const Videos = () => {
  const [videos, setVideos] = useState(mockVideos);
  const [likedVideos, setLikedVideos] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLike = (videoId: number) => {
    // Previne múltiplos likes no mesmo vídeo
    if (likedVideos.includes(videoId)) {
      toast({
        title: "Você já curtiu este vídeo",
        description: "Você pode curtir um vídeo apenas uma vez",
        variant: "destructive",
        duration: 2000,
      });
      return;
    }
    
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, likes: video.likes + 1 } 
        : video
    ));
    
    setLikedVideos([...likedVideos, videoId]);
    
    toast({
      title: "Vídeo curtido!",
      description: "Você deu like neste vídeo",
      duration: 2000,
    });
  };

  // Variantes de animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-background to-secondary/10 pb-12"
    >
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full bg-secondary/50 hover:bg-secondary/80">
                <Home className="h-5 w-5" />
                <span className="sr-only">Página Inicial</span>
              </Button>
            </Link>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Descubra Vídeos</h1>
          </div>
          <Link to="/perfil">
            <Button variant="ghost" size="icon" className="rounded-full bg-secondary/50 hover:bg-secondary/80">
              <User className="h-5 w-5" />
              <span className="sr-only">Perfil do Usuário</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-2xl font-bold mb-3">Vídeos em Destaque</h2>
          <p className="text-muted-foreground">Explore os melhores conteúdos selecionados para você</p>
        </div>
      </div>

      <main className="container mx-auto px-4">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Card key={i} className="overflow-hidden bg-card/30 border-border/50 backdrop-blur-sm">
                <Skeleton className="w-full aspect-video" />
                <CardContent className="p-4">
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex justify-between items-center mt-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-8 w-20 rounded-md" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full flex flex-col bg-card/30 border-border/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative group">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary/80 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Play className="h-6 w-6 text-primary-foreground" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <h3 className="font-medium text-base mb-1 line-clamp-2 hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center text-xs text-muted-foreground mb-4">
                      <span>{video.author}</span>
                      <span className="mx-2">•</span>
                      <span>{video.views} visualizações</span>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm font-medium">{video.likes} curtidas</span>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => handleLike(video.id)}
                        className={`group ${likedVideos.includes(video.id) ? 'bg-secondary-foreground/10 text-secondary-foreground' : ''}`}
                      >
                        <ThumbsUp className={`mr-1 h-4 w-4 transition-colors ${likedVideos.includes(video.id) ? 'fill-primary text-primary' : ''}`} />
                        Curtir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </motion.div>
  );
};

export default Videos;
