import { motion } from 'framer-motion';
import { Sparkles, Gift, Calendar } from 'lucide-react';

export const PromoSection = () => {
  const promos = [
    {
      icon: Sparkles,
      title: "Primera Compra",
      discount: "10% OFF",
      code: "BIENVENIDO10",
      bgColor: "from-pink-500 to-rose-500"
    },
    {
      icon: Gift,
      title: "Envío Gratis",
      discount: "En compras +$999",
      code: "ENVIOGRATIS",
      bgColor: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Eventos Especiales",
      discount: "15% OFF",
      code: "ESPECIAL15",
      bgColor: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-accent/30 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${promo.bgColor} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="relative p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm font-medium opacity-90 mb-1">{promo.title}</div>
                      <div className="text-3xl font-bold">{promo.discount}</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg inline-block">
                    <span className="text-xs font-mono font-semibold">Código: {promo.code}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};