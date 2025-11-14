import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { Input } from '@/components/ui/input'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 border-b bg-white/80 backdrop-blur-lg ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-full">
                <span className="text-2xl">🌸</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gradient">Verbena</div>
                <div className="text-xs text-muted-foreground -mt-1">Flores a Domicilio</div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/#productos" 
                className="text-foreground/70 hover:text-primary font-medium transition-colors"
              >
                Productos
              </Link>
              <Link 
                to="/#colecciones" 
                className="text-foreground/70 hover:text-primary font-medium transition-colors"
              >
                Colecciones
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-primary font-medium transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-primary/10"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-full">
                <span className="text-2xl">🌸</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Verbena Flores</div>
                <div className="text-sm text-white/60">Flores a Domicilio</div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Entrega de flores frescas en todo México. Hacemos que cada momento sea especial con nuestros arreglos florales únicos y elegantes.
            </p>
            <div className="flex gap-3">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                🚚 Envío Express
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                ✨ 100% Frescas
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Enlaces</h3>
            <div className="space-y-3">
              <Link 
                to="/#productos" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Productos
              </Link>
              <Link 
                to="/#colecciones" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Colecciones
              </Link>
              <Link 
                to="/blog" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Síguenos</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            &copy; 2024 Verbena Flores. Todos los derechos reservados. 
            <span className="mx-2">|</span>
            Hecho con 💗 en México
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}