import Link from "next/link"
import Image from "next/image"
import { 
  PlusCircleIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  CheckIcon,
  XIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AdminCursosPage() {
  // Combinando todos los cursos para la administración
  const allCourses = [
    ...cursosMedicos.map(course => ({ ...course, category: "Médicos", published: true })),
    ...cursosEnfermeras.map(course => ({ ...course, category: "Enfermeras", published: true })),
    ...cursosPacientes.map(course => ({ ...course, category: "Pacientes", published: false })),
    ...cursosAdministrativos.map(course => ({ ...course, category: "Administrativos", published: true }))
  ]

  return (
    <div className="px-4 lg:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Administración de Cursos</h1>
        <Button>
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Nuevo Curso
        </Button>
      </div>
      
      <Separator className="my-6" />
      
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <Input
            placeholder="Buscar cursos..."
            className="max-w-xs"
          />
          <Button variant="outline">Buscar</Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Exportar
          </Button>
          <Button variant="outline" size="sm">
            Filtrar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="tabla" className="mt-6">
        <TabsList>
          <TabsTrigger value="tabla">Vista de Tabla</TabsTrigger>
          <TabsTrigger value="tarjetas">Vista de Tarjetas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tabla" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.title}</TableCell>
                      <TableCell>{course.category}</TableCell>
                      <TableCell>
                        {course.published ? (
                          <Badge variant="default" className="bg-green-500">Publicado</Badge>
                        ) : (
                          <Badge variant="outline">Borrador</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon" asChild>
                            <Link href={`/cursos/${course.id}`} target="_blank">
                              <EyeIcon className="h-4 w-4" />
                              <span className="sr-only">Ver</span>
                            </Link>
                          </Button>
                          <Button variant="outline" size="icon">
                            <PencilIcon className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Button>
                          <Button variant="outline" size="icon" className="text-destructive">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Eliminar</span>
                          </Button>
                          {course.published ? (
                            <Button variant="outline" size="icon" className="text-muted-foreground">
                              <XIcon className="h-4 w-4" />
                              <span className="sr-only">Despublicar</span>
                            </Button>
                          ) : (
                            <Button variant="outline" size="icon" className="text-green-500">
                              <CheckIcon className="h-4 w-4" />
                              <span className="sr-only">Publicar</span>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tarjetas" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="p-4">
                  <div className="aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                  <div className="mt-2 flex items-center justify-between">
                    <Badge>{course.category}</Badge>
                    {course.published ? (
                      <Badge variant="default" className="bg-green-500">Publicado</Badge>
                    ) : (
                      <Badge variant="outline">Borrador</Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link href={`/cursos/${course.id}`} target="_blank">
                        <EyeIcon className="h-4 w-4" />
                        <span className="sr-only">Ver</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <PencilIcon className="h-4 w-4" />
                      <span className="sr-only">Editar</span>
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="text-destructive">
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Eliminar</span>
                    </Button>
                    {course.published ? (
                      <Button variant="outline" size="icon" className="text-muted-foreground">
                        <XIcon className="h-4 w-4" />
                        <span className="sr-only">Despublicar</span>
                      </Button>
                    ) : (
                      <Button variant="outline" size="icon" className="text-green-500">
                        <CheckIcon className="h-4 w-4" />
                        <span className="sr-only">Publicar</span>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Datos de muestra - los mismos que tenemos en las otras páginas
const cursosMedicos = [
  {
    id: "med-1",
    title: "Diagnóstico Avanzado",
    description: "Técnicas modernas para el diagnóstico clínico",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "med-2",
    title: "Tratamientos Innovadores",
    description: "Últimos avances en tratamientos médicos",
    image: "https://images.unsplash.com/photo-1631815588090-d1bcbe9d4b38?q=80&w=1972&auto=format&fit=crop"
  },
  {
    id: "med-3",
    title: "Comunicación Médico-Paciente",
    description: "Mejora la relación con tus pacientes",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
  }
]

const cursosEnfermeras = [
  {
    id: "enf-1",
    title: "Cuidados Intensivos",
    description: "Protocolos avanzados de cuidado intensivo",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "enf-2",
    title: "Administración de Medicamentos",
    description: "Procedimientos seguros y eficientes",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "enf-3",
    title: "Atención Primaria",
    description: "Estrategias efectivas en el primer nivel de atención",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070&auto=format&fit=crop"
  }
]

const cursosPacientes = [
  {
    id: "pac-1",
    title: "Autocuidado",
    description: "Aprende a cuidar tu salud en el día a día",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: "pac-2",
    title: "Medicación Responsable",
    description: "Uso adecuado de medicamentos recetados",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop"
  },
  {
    id: "pac-3",
    title: "Nutrición y Salud",
    description: "Alimentación para una vida saludable",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop"
  }
]

const cursosAdministrativos = [
  {
    id: "adm-1",
    title: "Gestión Hospitalaria",
    description: "Administración eficiente de recursos sanitarios",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "adm-2",
    title: "Atención al Paciente",
    description: "Mejores prácticas de servicio en entornos médicos",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    id: "adm-3",
    title: "Sistemas de Información Médica",
    description: "Manejo de expedientes y datos clínicos",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1968&auto=format&fit=crop"
  }
] 