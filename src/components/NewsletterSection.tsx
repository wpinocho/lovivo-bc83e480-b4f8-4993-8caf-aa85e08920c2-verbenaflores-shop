import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Gift } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-accent/30 to-secondary/10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-full shadow-2xl">
                    <Mail className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-foreground">
                  ¡Gracias por suscribirte! 🌸
                </h3>
                <p className="text-xl text-muted-foreground">
                  Recibirás nuestras mejores ofertas y promociones exclusivas pronto.
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-lg">
                  <div className="flex items-center gap-3">
                    <Gift className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <div className="font-bold text-foreground">Código de Bienvenida</div>
                      <div className="text-2xl font-mono font-bold text-primary">BIENVENIDO10</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
                    <Sparkles className="h-4 w-4" />
                    Newsletter Exclusivo
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                    ¿Quieres <span className="text-gradient">Ofertas Especiales?</span>
                  </h3>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Suscríbete a nuestro newsletter y recibe un 10% de descuento en tu primera compra 🎁
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                >
                  <div className="flex-1">
                    <Input 
                      type="email"
                      placeholder="tu@email.com"
                      value={logic.email}
                      onChange={(e) => logic.setEmail(e.target.value)}
                      disabled={logic.isSubmitting}
                      className="h-14 rounded-full border-2 px-6 text-base shadow-lg bg-white/90 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      type="submit"
                      disabled={logic.isSubmitting}
                      size="lg"
                      className="btn-primary h-14 px-8 rounded-full text-base font-semibold w-full sm:w-auto"
                    >
                      {logic.isSubmitting ? 'Suscribiendo...' : 'Suscribirme 🌺'}
                    </Button>
                  </motion.div>
                </form>
                
                {logic.error && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-destructive bg-destructive/10 px-4 py-2 rounded-full inline-block"
                  >
                    {logic.error}
                  </motion.p>
                )}

                <div className="flex items-center justify-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">5,000+</div>
                    <div className="text-sm text-muted-foreground">Clientes Felices</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">10%</div>
                    <div className="text-sm text-muted-foreground">Descuento</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Atención</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};