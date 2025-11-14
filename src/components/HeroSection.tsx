import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Truck, Clock, Heart } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-flowers.jpg')] bg-cover bg-center" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                ⚡ Entrega Express el Mismo Día
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Flores Frescas a
              <span className="text-gradient"> Domicilio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Regalos únicos que expresan amor y alegría. 
              Entregamos emociones en todo México 🌸
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-6 rounded-full"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Catálogo 🌹
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full border-2 hover:bg-accent"
                onClick={() => document.getElementById('colecciones')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ocasiones Especiales
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
              <div className="bg-primary/10 p-3 rounded-full">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Envío Express</div>
                <div className="text-sm text-muted-foreground">Mismo día</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">100% Frescas</div>
                <div className="text-sm text-muted-foreground">Garantizado</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Siempre abierto</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
};