
import { useState } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, User, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Mock video data
const mockVideos = [
  {
    id: 1,
    title: "Como montar um home office eficiente",
    thumbnail: "https://i.pravatar.cc/600?img=1",
    likes: 245,
    duration: "12:34"
  },
  {
    id: 2,
    title: "Review: Os melhores produtos para sua coleção",
    thumbnail: "https://i.pravatar.cc/600?img=2",
    likes: 178,
    duration: "08:21"
  },
  {
    id: 3,
    title: "Tutorial: Cuidados essenciais com seus produtos",
    thumbnail: "https://i.pravatar.cc/600?img=3",
    likes: 326,
    duration: "15:47"
  },
  {
    id: 4,
    title: "Tendências para 2024: O que esperar",
    thumbnail: "https://i.pravatar.cc/600?img=4",
    likes: 512,
    duration: "10:15"
  }
];

const Videos = () => {
  const [videos, setVideos] = useState(mockVideos);
  const [likedVideos, setLikedVideos] = useState<number[]>([]);
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background pb-12"
    >
      <header className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm border-b border-border py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Home className="h-5 w-5" />
                <span className="sr-only">Página Inicial</span>
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Vídeos em Destaque</h1>
          </div>
          <Link to="/perfil">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Perfil do Usuário</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: video.id * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="font-medium text-base mb-4 line-clamp-2">{video.title}</h3>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-muted-foreground">{video.likes} curtidas</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleLike(video.id)}
                      className={`group ${likedVideos.includes(video.id) ? 'text-primary' : ''}`}
                    >
                      <ThumbsUp className={`mr-1 h-4 w-4 group-hover:text-primary transition-colors ${likedVideos.includes(video.id) ? 'fill-primary' : ''}`} />
                      Curtir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default Videos;
