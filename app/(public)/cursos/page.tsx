"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, SearchIcon, FilterIcon, StarIcon, BookIcon, CheckIcon } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

export default function CursosPage() {
  // Estado para manejar los filtros y la búsqueda
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string[]>([])
  const [selectedDuration, setSelectedDuration] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [isLoading, setIsLoading] = useState(true)
  const [filteredCourses, setFilteredCourses] = useState<any[]>([])
  
  // Combinando todos los cursos de las diferentes categorías
  const allCourses = [
    ...cursosMedicos.map(course => ({ ...course, category: "Médicos" })),
    ...cursosEnfermeras.map(course => ({ ...course, category: "Enfermeras" })),
    ...cursosPacientes.map(course => ({ ...course, category: "Pacientes" })),
    ...cursosAdministrativos.map(course => ({ ...course, category: "Administrativos" }))
  ]
  
  // Efecto para simular la carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setFilteredCourses(allCourses)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Efecto para aplicar filtros
  useEffect(() => {
    let result = [...allCourses]
    
    // Filtrar por búsqueda
    if (searchQuery) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    // Filtrar por categoría
    if (selectedCategory) {
      result = result.filter(course => course.category === selectedCategory)
    }
    
    // Filtrar por nivel
    if (selectedLevel.length > 0) {
      // Simulando que cada curso tiene un nivel
      result = result.filter(course => {
        // Aquí asignamos niveles ficticios para la demostración
        const courseLevel = course.id.includes("1") ? "Principiante" : 
                           course.id.includes("2") ? "Intermedio" : "Avanzado"
        return selectedLevel.includes(courseLevel)
      })
    }
    
    // Filtrar por duración
    if (selectedDuration.length > 0) {
      result = result.filter(course => {
        if (selectedDuration.includes("short") && course.lessons < 10) return true
        if (selectedDuration.includes("medium") && course.lessons >= 10 && course.lessons <= 15) return true
        if (selectedDuration.includes("long") && course.lessons > 15) return true
        return false
      })
    }
    
    // Filtrar por calificación
    if (selectedRating) {
      // Simulando que cada curso tiene una calificación
      result = result.filter(course => {
        // Simulamos una calificación basada en el ID
        const rating = 3 + (parseInt(course.id.split("-")[1]) % 3)
        return rating >= selectedRating
      })
    }
    
    // Ordenar cursos
    switch(sortBy) {
      case "popular":
        result.sort((a, b) => b.lessons - a.lessons)
        break
      case "newest":
        result.sort((a, b) => b.id.localeCompare(a.id))
        break
      case "price-low":
        // Simulamos que algunos cursos tienen precio
        result.sort((a, b) => (a.id.includes("1") ? 0 : 20) - (b.id.includes("1") ? 0 : 20))
        break
      case "price-high":
        result.sort((a, b) => (b.id.includes("1") ? 0 : 20) - (a.id.includes("1") ? 0 : 20))
        break
      default:
        // featured - mantenemos el orden actual
        break
    }
    
    setFilteredCourses(result)
  }, [searchQuery, selectedCategory, selectedLevel, selectedDuration, selectedRating, sortBy, isLoading])
  
  // Función para manejar la búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // La búsqueda ya está siendo manejada por el efecto
  }
  
  // Función para manejar los filtros
  const toggleLevel = (level: string) => {
    setSelectedLevel(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) 
        : [...prev, level]
    )
  }
  
  const toggleDuration = (duration: string) => {
    setSelectedDuration(prev => 
      prev.includes(duration) 
        ? prev.filter(d => d !== duration) 
        : [...prev, duration]
    )
  }
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(prev => prev === category ? null : category)
  }
  
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory(null)
    setSelectedLevel([])
    setSelectedDuration([])
    setSelectedRating(null)
    setSortBy("featured")
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-950 dark:to-blue-950">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Explora Nuestros Cursos</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Descubre nuestra amplia variedad de cursos especializados para profesionales de la salud y pacientes
            </p>
            <form onSubmit={handleSearch} className="flex gap-2 max-w-lg mx-auto">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar cursos..." 
                  className="h-12 pl-10" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Buscar cursos"
                />
              </div>
              <Button size="lg" type="submit">Buscar</Button>
            </form>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <div className="md:col-span-3">
            <div className="space-y-6 sticky top-24">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">Filtros</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilters}
                  className="text-primary hover:text-primary/80"
                >
                  Limpiar todo
                </Button>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Categorías</h3>
                <Accordion type="multiple" className="space-y-2">
                  {[
                    { id: "medicos", name: "Médicos", count: cursosMedicos.length, subcategories: ["Diagnóstico", "Tratamientos", "Comunicación"] },
                    { id: "enfermeras", name: "Enfermeras", count: cursosEnfermeras.length, subcategories: ["Cuidados Intensivos", "Medicamentos", "Atención Primaria"] },
                    { id: "pacientes", name: "Pacientes", count: cursosPacientes.length, subcategories: ["Autocuidado", "Medicación", "Nutrición"] },
                    { id: "administrativos", name: "Administrativos", count: cursosAdministrativos.length, subcategories: ["Gestión Hospitalaria", "Atención al Paciente", "Sistemas"] }
                  ].map((category) => (
                    <AccordionItem key={category.id} value={category.id} className="border-none">
                      <AccordionTrigger 
                        className={cn(
                          "py-2 hover:bg-muted/50 px-3 rounded-md no-underline",
                          selectedCategory === category.name && "bg-primary/10 text-primary font-medium"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <span>{category.name}</span>
                          <Badge variant="outline" className="ml-auto rounded-full">{category.count}</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-6">
                        <div className="flex flex-col space-y-2 mt-2">
                          {category.subcategories.map(sub => (
                            <Button 
                              key={sub}
                              variant="ghost" 
                              size="sm" 
                              className="justify-start"
                              onClick={() => handleCategorySelect(category.name)}
                            >
                              {sub}
                            </Button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-4">Nivel</h3>
                <div className="space-y-2">
                  {[
                    { id: "level-beginner", value: "Principiante" },
                    { id: "level-intermediate", value: "Intermedio" },
                    { id: "level-advanced", value: "Avanzado" }
                  ].map((level) => (
                    <div key={level.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={level.id}
                        checked={selectedLevel.includes(level.value)}
                        onChange={() => toggleLevel(level.value)}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        aria-label={`Nivel ${level.value}`}
                      />
                      <label htmlFor={level.id} className="ml-2 text-sm">
                        {level.value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-4">Duración</h3>
                <div className="space-y-2">
                  {[
                    { id: "duration-short", value: "short", label: "Menos de 5 horas" },
                    { id: "duration-medium", value: "medium", label: "5-10 horas" },
                    { id: "duration-long", value: "long", label: "Más de 10 horas" }
                  ].map((duration) => (
                    <div key={duration.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={duration.id}
                        checked={selectedDuration.includes(duration.value)}
                        onChange={() => toggleDuration(duration.value)}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        aria-label={`Duración ${duration.label}`}
                      />
                      <label htmlFor={duration.id} className="ml-2 text-sm">
                        {duration.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-4">Calificación</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`rating-${rating}`}
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(prev => prev === rating ? null : rating)}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        aria-label={`${rating} estrellas o más`}
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            )}
                          />
                        ))}
                        <span className="ml-1 text-sm">& más</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <Button 
                className="w-full"
                onClick={() => {
                  // Los filtros ya están aplicados a través de useEffect
                  // Esta es una acción visual para el usuario
                  setIsLoading(true)
                  setTimeout(() => setIsLoading(false), 500)
                }}
              >
                Aplicar Filtros
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            <div className="flex flex-col gap-8">
              {/* Sorting options */}
              <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedCategory ? selectedCategory : "Todos los Cursos"}
                  </h2>
                  <p className="text-muted-foreground">
                    {isLoading 
                      ? "Cargando resultados..." 
                      : `Mostrando ${filteredCourses.length} resultados`
                    }
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Destacados</SelectItem>
                      <SelectItem value="popular">Más populares</SelectItem>
                      <SelectItem value="newest">Más recientes</SelectItem>
                      <SelectItem value="price-low">Precio: Bajo a Alto</SelectItem>
                      <SelectItem value="price-high">Precio: Alto a Bajo</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2">
                    <Button 
                      variant={viewMode === "grid" ? "default" : "outline"} 
                      size="icon" 
                      className="rounded-md"
                      onClick={() => setViewMode("grid")}
                      aria-label="Ver en cuadrícula"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="lucide lucide-layout-grid"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                        <rect width="7" height="7" x="3" y="14" rx="1" />
                      </svg>
                    </Button>
                    <Button 
                      variant={viewMode === "list" ? "default" : "outline"} 
                      size="icon" 
                      className="rounded-md"
                      onClick={() => setViewMode("list")}
                      aria-label="Ver en lista"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="lucide lucide-list"
                      >
                        <line x1="8" x2="21" y1="6" y2="6" />
                        <line x1="8" x2="21" y1="12" y2="12" />
                        <line x1="8" x2="21" y1="18" y2="18" />
                        <line x1="3" x2="3.01" y1="6" y2="6" />
                        <line x1="3" x2="3.01" y1="12" y2="12" />
                        <line x1="3" x2="3.01" y1="18" y2="18" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Skeleton loading */}
              {isLoading ? (
                <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
                  {Array.from({ length: 6 }).map((_, i) => (
                    viewMode === "grid" ? (
                      <Card key={i} className="overflow-hidden">
                        <Skeleton className="h-48 w-full" />
                        <CardContent className="p-4">
                          <Skeleton className="h-4 w-1/4 mb-2" />
                          <Skeleton className="h-6 w-full mb-2" />
                          <Skeleton className="h-4 w-3/4" />
                        </CardContent>
                      </Card>
                    ) : (
                      <div key={i} className="flex gap-4 p-4 border rounded-xl">
                        <Skeleton className="h-32 w-48 rounded-md" />
                        <div className="flex-1">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-2/3" />
                        </div>
                      </div>
                    )
                  ))}
                </div>
              ) : filteredCourses.length === 0 ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <SearchIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No se encontraron resultados</h3>
                  <p className="text-muted-foreground mb-6">
                    No hemos encontrado cursos que coincidan con tu búsqueda o filtros.
                  </p>
                  <Button onClick={resetFilters}>Limpiar filtros</Button>
                </div>
              ) : viewMode === "grid" ? (
                // Grid view
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                // List view
                <div className="space-y-4">
                  {filteredCourses.map((course) => (
                    <CourseListItem key={course.id} course={course} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {!isLoading && filteredCourses.length > 0 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center space-x-2" aria-label="Paginación">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronLeftIcon className="h-4 w-4" />
                      <span className="sr-only">Página anterior</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">1</Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-primary text-primary-foreground hover:bg-primary/90">2</Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">4</Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">5</Button>
                    <Button variant="outline" size="icon">
                      <ChevronRightIcon className="h-4 w-4" />
                      <span className="sr-only">Página siguiente</span>
                    </Button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CourseCard({ course }: { course: any }) {
  return (
    <Link href={`/cursos/${course.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all">
        <div className="relative h-48">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
          <p className="text-sm text-slate-600 mb-3 line-clamp-2">{course.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">{course.category}</span>
            </div>
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium ml-1">
                {2 + (parseInt(course.id.split("-")[1]) % 3) + (Math.random() * 0.9).toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

// Nuevo componente para vista de lista
function CourseListItem({ course }: { course: any }) {
  return (
    <Link href={`/cursos/${course.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all p-4">
        <div className="flex gap-4">
          <div className="relative h-24 w-24 flex-shrink-0 rounded-md overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">{course.title}</h3>
            <p className="text-sm text-slate-600 mb-2 line-clamp-2">{course.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xs px-2 py-1 bg-slate-100 rounded-full">{course.category}</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-medium ml-1">
                  {2 + (parseInt(course.id.split("-")[1]) % 3) + (Math.random() * 0.9).toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

// Datos de muestra - los mismos que tenemos en las otras páginas
const cursosMedicos = [
  {
    id: "med-1",
    title: "Diagnóstico Avanzado",
    description: "Técnicas modernas para el diagnóstico clínico",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1974&auto=format&fit=crop",
    category: "Médicos",
    lessons: 15
  },
  {
    id: "med-2",
    title: "Tratamientos Innovadores",
    description: "Últimos avances en tratamientos médicos",
    image: "https://images.unsplash.com/photo-1631815588090-d1bcbe9d4b38?q=80&w=1972&auto=format&fit=crop",
    category: "Médicos",
    lessons: 12
  },
  {
    id: "med-3",
    title: "Comunicación Médico-Paciente",
    description: "Mejora la relación con tus pacientes",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop",
    category: "Médicos",
    lessons: 10
  }
]

const cursosEnfermeras = [
  {
    id: "enf-1",
    title: "Cuidados Intensivos",
    description: "Protocolos avanzados de cuidado intensivo",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=2070&auto=format&fit=crop",
    category: "Enfermeras",
    lessons: 18
  },
  {
    id: "enf-2",
    title: "Administración de Medicamentos",
    description: "Procedimientos seguros y eficientes",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    category: "Enfermeras",
    lessons: 14
  },
  {
    id: "enf-3",
    title: "Atención Primaria",
    description: "Estrategias efectivas en el primer nivel de atención",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070&auto=format&fit=crop",
    category: "Enfermeras",
    lessons: 12
  }
]

const cursosPacientes = [
  {
    id: "pac-1",
    title: "Autocuidado",
    description: "Aprende a cuidar tu salud en el día a día",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop",
    category: "Pacientes",
    lessons: 8
  },
  {
    id: "pac-2",
    title: "Medicación Responsable",
    description: "Uso adecuado de medicamentos recetados",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop",
    category: "Pacientes",
    lessons: 6
  },
  {
    id: "pac-3",
    title: "Nutrición y Salud",
    description: "Alimentación para una vida saludable",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
    category: "Pacientes",
    lessons: 10
  }
]

const cursosAdministrativos = [
  {
    id: "adm-1",
    title: "Gestión Hospitalaria",
    description: "Administración eficiente de recursos sanitarios",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    category: "Administrativos",
    lessons: 15
  },
  {
    id: "adm-2",
    title: "Atención al Paciente",
    description: "Mejores prácticas de servicio en entornos médicos",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    category: "Administrativos",
    lessons: 8
  },
  {
    id: "adm-3",
    title: "Sistemas de Información Médica",
    description: "Manejo de expedientes y datos clínicos",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1968&auto=format&fit=crop",
    category: "Administrativos",
    lessons: 12
  }
] 