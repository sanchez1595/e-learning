import Image from "next/image"
import Link from "next/link"
import { SearchIcon, FilterIcon, ChevronDownIcon, EyeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Usar los mismos datos del detalle del blog
const blogPosts = [
  {
    id: "technology-healthcare",
    title: "10 Tecnologías Emergentes que Están Revolucionando la Atención Sanitaria",
    excerpt: "Un análisis de las tecnologías más prometedoras que están transformando la forma en que se presta atención médica.",
    date: "10 AGO 2024",
    category: "Tecnología",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Dr. Carlos Martínez",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Director de Innovación Médica"
    },
    views: 4250,
    featured: true
  },
  {
    id: "ai-diagnostics",
    title: "Inteligencia Artificial en Diagnóstico: Superando al Ojo Humano",
    excerpt: "Cómo los algoritmos de IA están mejorando la precisión diagnóstica en radiología, patología y más.",
    date: "05 JUL 2024",
    category: "Inteligencia Artificial",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Dra. Ana López",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "Radióloga e Investigadora en IA"
    },
    views: 3875,
    featured: true
  },
  {
    id: "medical-education",
    title: "Transformando la Educación Médica: Nuevos Paradigmas para Nuevos Tiempos",
    excerpt: "Explorando cómo las metodologías educativas innovadoras están preparando a la próxima generación de profesionales de la salud.",
    date: "28 JUN 2024",
    category: "Educación",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Prof. Miguel Hernández",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      role: "Director de Innovación Educativa"
    },
    views: 2980
  },
  {
    id: "patient-care",
    title: "El Paciente en el Centro: Humanizando la Atención Sanitaria en la Era Digital",
    excerpt: "Estrategias para mantener la conexión humana como elemento central en la atención médica tecnológicamente avanzada.",
    date: "15 MAY 2024",
    category: "Atención al Paciente",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    author: {
      name: "Dra. Laura Sánchez",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      role: "Especialista en Medicina Centrada en el Paciente"
    },
    views: 4125
  },
  {
    id: "digital-health",
    title: "Salud Digital: Tendencias y Desafíos para 2025",
    excerpt: "Un análisis de las principales tendencias en salud digital y los retos que enfrentarán los sistemas sanitarios en los próximos años.",
    date: "03 ABR 2024",
    category: "Salud Digital",
    image: "https://images.unsplash.com/photo-1576091758621-991ad9ad3747?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Dr. Fernando Torres",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      role: "Consultor en Transformación Digital Sanitaria"
    },
    views: 3560,
    trending: true
  },
  {
    id: "future-healthcare",
    title: "El Futuro de la Atención Sanitaria: Predicciones para la Próxima Década",
    excerpt: "Explorando las transformaciones que revolucionarán la forma en que experimentamos la atención médica en los próximos diez años.",
    date: "20 MAR 2024",
    category: "Tendencias",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Dra. Elena Ramírez",
      avatar: "https://randomuser.me/api/portraits/women/39.jpg",
      role: "Investigadora en Políticas Sanitarias"
    },
    views: 5280,
    trending: true
  }
];

// Obtener todas las categorías únicas
const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function BlogPage() {
  return (
    <div className="container py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog IQVIA</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Descubre las últimas tendencias, investigaciones e innovaciones en el sector de la salud y la tecnología médica.
        </p>
      </div>

      {/* Hero Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
          <Link 
            key={post.id}
            href={`/blog/${post.id}`}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <Badge className="bg-primary hover:bg-primary/90 mb-3">{post.category}</Badge>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary-300 transition-colors">{post.title}</h2>
              <p className="mb-4 text-slate-200 line-clamp-2">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2 border border-white/20">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="text-sm">{post.author.name}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-grow">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <Input 
            placeholder="Buscar artículos..." 
            className="pl-10"
          />
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <FilterIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <span>Más recientes</span>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Categorías tabs */}
      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="all">Todos</TabsTrigger>
          {uniqueCategories.map(category => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <Link 
                key={post.id}
                href={`/blog/${post.id}`}
                className="group flex flex-col rounded-lg overflow-hidden border hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  {post.trending && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                      TRENDING
                    </div>
                  )}
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 p-5 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center">
                      <div className="w-7 h-7 rounded-full overflow-hidden mr-2">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={28}
                          height={28}
                        />
                      </div>
                      <span className="text-xs">{post.author.name}</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-500">
                      <EyeIcon className="h-3 w-3 mr-1" />
                      {post.views}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline">Cargar más artículos</Button>
          </div>
        </TabsContent>
        
        {uniqueCategories.map(category => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(post => post.category === category)
                .map(post => (
                  <Link 
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group flex flex-col rounded-lg overflow-hidden border hover:shadow-md transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {post.trending && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                          TRENDING
                        </div>
                      )}
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 p-5 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-xs text-slate-500">{post.date}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t">
                        <div className="flex items-center">
                          <div className="w-7 h-7 rounded-full overflow-hidden mr-2">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={28}
                              height={28}
                            />
                          </div>
                          <span className="text-xs">{post.author.name}</span>
                        </div>
                        <div className="flex items-center text-xs text-slate-500">
                          <EyeIcon className="h-3 w-3 mr-1" />
                          {post.views}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Newsletter */}
      <div className="bg-slate-100 rounded-xl p-8 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Suscríbete a nuestro newsletter</h2>
          <p className="text-slate-600 mb-6">
            Mantente al día con las últimas novedades, artículos y recursos exclusivos para profesionales de la salud.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              placeholder="Tu dirección de correo" 
              className="flex-grow"
            />
            <Button size="lg">Suscribirse</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 