"use client"

import Link from "next/link"
import { useState } from "react"
import { PhoneIcon, MailIcon, SearchIcon, HeartPulseIcon, ShoppingCartIcon, ChevronDownIcon, MenuIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Interfaces para los componentes
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface NavDropdownProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <div className="hidden md:block bg-blue-600 text-white py-2.5">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 fill-current" />
              <span className="text-sm">(+34) 900 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 fill-current" />
              <span className="text-sm">info@iqvia.com</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Twitter" className="text-white hover:text-blue-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.621-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.395 8.395 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.497 8.497 0 0 0 2.087-2.165z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="text-white hover:text-blue-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="text-white hover:text-blue-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-white hover:text-blue-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
            <div className="h-4 w-px bg-blue-500/50"></div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium hover:text-blue-300 transition-colors">
                Iniciar sesión
              </Link>
              <Link href="/registro" className="text-sm font-medium hover:text-blue-300 transition-colors">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container h-20 relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/home" className="flex items-center">
              <div className="bg-blue-600 rounded-lg w-10 h-10 flex items-center justify-center mr-2">
                <HeartPulseIcon className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl">IQVIA</span>
            </Link>
          </div>
          
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
            <NavLink href="/home">Inicio</NavLink>
            <NavDropdown 
              title="Cursos" 
              items={[
                { label: "Cursos para Médicos", href: "/cursos?category=medicos" },
                { label: "Cursos para Enfermeras", href: "/cursos?category=enfermeras" },
                { label: "Cursos para Pacientes", href: "/cursos?category=pacientes" },
                { label: "Cursos para Administrativos", href: "/cursos?category=administrativos" },
                { label: "Todos los cursos", href: "/cursos" }
              ]} 
            />
            <NavLink href="/eventos">Eventos</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block relative">
              <Input placeholder="Buscar cursos..." className="w-64 pr-10 rounded-full bg-slate-100 border-0 focus-visible:ring-blue-600" />
              <Button className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full rounded-full px-3 text-slate-400 hover:text-blue-600" variant="ghost">
                <SearchIcon className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white py-4 px-4 space-y-2 shadow-lg">
            <Link href="/home" className="block py-2 text-base hover:text-blue-600">Inicio</Link>
            <div className="py-2">
              <div className="flex justify-between items-center cursor-pointer text-base hover:text-blue-600">
                <span>Cursos</span>
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </div>
            <Link href="/eventos" className="block py-2 text-base hover:text-blue-600">Eventos</Link>
            <Link href="/blog" className="block py-2 text-base hover:text-blue-600">Blog</Link>
            <div className="pt-4 mt-4 border-t border-slate-200">
              <div className="flex flex-col gap-3">
                <Button size="sm" variant="outline" className="w-full justify-start">
                  Iniciar sesión
                </Button>
                <Button size="sm" className="w-full justify-start bg-blue-600">
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 rounded-lg w-8 h-8 flex items-center justify-center mr-1">
                  <HeartPulseIcon className="h-5 w-5 text-white" />
                </div>
                <Link href="/home">
                  <span className="font-bold text-xl">IQVIA</span>
                </Link>
              </div>
              <p className="text-slate-600 mb-4">
                Llámanos
              </p>
              <p className="text-xl font-bold mb-4">800 388 80 90</p>
              <p className="text-slate-600 mb-2">58 Howard Street #2 San Francisco</p>
              <p className="text-slate-600">contact@iqvia.com</p>
              <div className="flex mt-4 space-x-4">
                <Link href="#" aria-label="Twitter" className="text-slate-400 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.621-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.395 8.395 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.497 8.497 0 0 0 2.087-2.165z"/>
                  </svg>
                </Link>
                <Link href="#" aria-label="Facebook" className="text-slate-400 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="#" aria-label="Skype" className="text-slate-400 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.631-2.801-.93-4.328-.93-.72 0-1.444.07-2.143.204l.119.06-.239-.033.119-.025C8.91.274 7.829 0 6.731 0c-3.723 0-6.731 3.028-6.731 6.731 0 1.099.274 2.18.781 3.132l-.033-.16.06.239-.026-.119C.274 11.3.03 12.899.03 14.502c0 1.529.301 3.012.898 4.42.569 1.346 1.394 2.562 2.427 3.596 1.05 1.033 2.247 1.856 3.595 2.426 1.319.631 2.801.93 4.328.93.775 0 1.557-.09 2.31-.27-.038-.012-.074-.03-.12-.044l.238.043c-.046-.008-.089-.013-.135-.025 1.08.538 2.288.824 3.508.824 3.723 0 6.763-3.028 6.763-6.731 0-1.099-.286-2.18-.793-3.132z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="YouTube" className="text-slate-400 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Acerca de</h3>
              <ul className="space-y-4">
                <li><Link href="/sobre-nosotros" className="text-slate-600 hover:text-blue-600 transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/cursos" className="text-slate-600 hover:text-blue-600 transition-colors">Cursos</Link></li>
                <li><Link href="/instructores" className="text-slate-600 hover:text-blue-600 transition-colors">Instructor</Link></li>
                <li><Link href="/eventos" className="text-slate-600 hover:text-blue-600 transition-colors">Eventos</Link></li>
                <li><Link href="/convertirse-instructor" className="text-slate-600 hover:text-blue-600 transition-colors">Conviértete en Instructor</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Enlaces</h3>
              <ul className="space-y-4">
                <li><Link href="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">Noticias y Blog</Link></li>
                <li><Link href="/biblioteca" className="text-slate-600 hover:text-blue-600 transition-colors">Biblioteca</Link></li>
                <li><Link href="/galeria" className="text-slate-600 hover:text-blue-600 transition-colors">Galería</Link></li>
                <li><Link href="/socios" className="text-slate-600 hover:text-blue-600 transition-colors">Socios</Link></li>
                <li><Link href="/carrera" className="text-slate-600 hover:text-blue-600 transition-colors">Carrera Profesional</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Soporte</h3>
              <ul className="space-y-4">
                <li><Link href="/documentacion" className="text-slate-600 hover:text-blue-600 transition-colors">Documentación</Link></li>
                <li><Link href="/faq" className="text-slate-600 hover:text-blue-600 transition-colors">Preguntas Frecuentes</Link></li>
                <li><Link href="/foro" className="text-slate-600 hover:text-blue-600 transition-colors">Foro</Link></li>
                <li><Link href="/sitemap" className="text-slate-600 hover:text-blue-600 transition-colors">Mapa del Sitio</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t">
          <div className="container py-6 flex flex-wrap justify-between">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link href="/terminos" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                Términos de Uso
              </Link>
              <Link href="/privacidad" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                Política de Privacidad
              </Link>
            </div>
            <p className="text-sm text-slate-600">
              © 2024 IQVIA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botón "Volver Arriba" */}
      <Link 
        href="#" 
        className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </Link>
    </div>
  )
}

// Componente de enlace de navegación
function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="font-medium hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
    >
      {children}
    </Link>
  )
}

// Componente de menú desplegable
function NavDropdown({ title, items }: NavDropdownProps) {
  return (
    <div className="relative group">
      <button className="font-medium flex items-center gap-1 group-hover:text-blue-600 transition-colors">
        {title}
        <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-0 mt-2 w-60 rounded-md shadow-lg bg-white border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {items.map((item, index) => (
          <Link 
            key={index} 
            href={item.href} 
            className="block px-4 py-2 text-sm rounded-md hover:bg-slate-50 hover:text-blue-600 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}