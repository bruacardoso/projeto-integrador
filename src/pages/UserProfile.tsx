
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Package, CreditCard, Settings, LogOut } from "lucide-react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Mock user data
  const userData = {
    name: "João Silva",
    email: "joao.silva@example.com",
    joinedDate: "Março 2023",
    avatarUrl: "https://i.pravatar.cc/150?img=68"
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Minha Conta</h1>
          <p className="text-muted-foreground">Gerencie suas informações, pedidos e preferências</p>
        </header>

        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <Card className="h-fit">
            <CardContent className="py-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-20 w-20 mb-3">
                  <img src={userData.avatarUrl} alt={userData.name} />
                </Avatar>
                <h2 className="font-semibold text-lg">{userData.name}</h2>
                <p className="text-sm text-muted-foreground">Cliente desde {userData.joinedDate}</p>
              </div>
              
              <Separator className="my-4" />
              
              <nav className="space-y-1">
                <Button 
                  variant={activeTab === "profile" ? "secondary" : "ghost"} 
                  onClick={() => setActiveTab("profile")}
                  className="w-full justify-start"
                >
                  <User className="mr-2 h-4 w-4" />
                  Perfil
                </Button>
                <Button 
                  variant={activeTab === "orders" ? "secondary" : "ghost"} 
                  onClick={() => setActiveTab("orders")}
                  className="w-full justify-start"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Pedidos
                </Button>
                <Button 
                  variant={activeTab === "payment" ? "secondary" : "ghost"} 
                  onClick={() => setActiveTab("payment")}
                  className="w-full justify-start"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pagamento
                </Button>
                <Button 
                  variant={activeTab === "settings" ? "secondary" : "ghost"} 
                  onClick={() => setActiveTab("settings")}
                  className="w-full justify-start"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </Button>
                
                <Separator className="my-4" />
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Button>
              </nav>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div>
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>Atualize suas informações pessoais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome</Label>
                      <Input id="firstName" defaultValue="João" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input id="lastName" defaultValue="Silva" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={userData.email} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" type="tel" defaultValue="(11) 98765-4321" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Salvar Alterações</Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === "orders" && (
              <Card>
                <CardHeader>
                  <CardTitle>Meus Pedidos</CardTitle>
                  <CardDescription>Veja e acompanhe seus pedidos recentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <Package className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                    <h3 className="mt-4 text-lg font-medium">Nenhum pedido ainda</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Quando você fizer um pedido, ele aparecerá aqui para que você possa acompanhá-lo.
                    </p>
                    <Button className="mt-4" variant="outline">
                      Comece a comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "payment" && (
              <Card>
                <CardHeader>
                  <CardTitle>Métodos de Pagamento</CardTitle>
                  <CardDescription>Gerencie seus cartões e outras formas de pagamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <CreditCard className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                    <h3 className="mt-4 text-lg font-medium">Nenhum método de pagamento</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Adicione um método de pagamento para facilitar suas compras futuras.
                    </p>
                    <Button className="mt-4">
                      Adicionar método de pagamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da Conta</CardTitle>
                  <CardDescription>Gerencie suas preferências e segurança</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <select 
                      id="language" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue="pt-br"
                    >
                      <option value="pt-br">Português (Brasil)</option>
                      <option value="en-us">English (US)</option>
                      <option value="es">Español</option>
                    </select>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Senha atual</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nova senha</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Atualizar Configurações</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
