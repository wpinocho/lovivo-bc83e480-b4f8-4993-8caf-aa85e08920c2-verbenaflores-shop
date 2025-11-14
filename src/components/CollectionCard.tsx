import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="card-hover border-0 shadow-lg overflow-hidden rounded-2xl bg-white group">
      <CardContent className="p-0 relative">
        <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-muted overflow-hidden relative">
          {collection.image ? (
            <motion.img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.05 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Sin imagen
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured badge */}
          {collection.featured && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 bg-secondary text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg"
            >
              ⭐ Destacada
            </motion.div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="ghost" 
              className="w-full justify-between group/btn rounded-full hover:bg-primary hover:text-white transition-all px-6"
              onClick={() => onViewProducts(collection.id)}
            >
              <span className="font-semibold">Ver Productos</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}