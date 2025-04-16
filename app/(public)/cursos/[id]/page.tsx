import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { 
  ArrowLeftIcon, 
  ClockIcon, 
  BookIcon, 
  BriefcaseIcon, 
  CheckCircleIcon, 
  ChevronRightIcon,
  PlayCircleIcon,
  FileTextIcon,
  PencilIcon,
  FolderIcon,
  ChevronDownIcon,
  LockIcon,
  CheckIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Función para obtener todos los cursos
function getAllCourses() {
  const allCourses = [
    ...cursosMedicos.map(course => ({ ...course, category: "Médicos" })),
    ...cursosEnfermeras.map(course => ({ ...course, category: "Enfermeras" })),
    ...cursosPacientes.map(course => ({ ...course, category: "Pacientes" })),
    ...cursosAdministrativos.map(course => ({ ...course, category: "Administrativos" }))
  ]
  return allCourses
}

export default function CursoPage({ params }: { params: { id: string } }) {
  const courses = getAllCourses()
  const course = courses.find(course => course.id === params.id)
  
  if (!course) {
    notFound()
  }

  // Datos de ejemplo para cada curso
  const courseDetails = {
    duration: "8 semanas",
    level: course.category === "Pacientes" ? "Básico" : "Avanzado",
    lessons: 12,
    certificates: true,
    instructor: "Dr. Carlos Mendoza",
    lastUpdate: "October 5, 2023",
    objectives: [
      "Comprender los principios fundamentales del tema",
      "Aplicar conocimientos en situaciones reales",
      "Desarrollar habilidades prácticas específicas",
      "Evaluar casos de estudio y proponer soluciones"
    ],
    syllabus: [
      {
        title: "Módulo 1: Introducción",
        duration: "1 semana",
        isUnlocked: true,
        progress: 100,
        content: [
          {
            type: "video",
            title: "Bienvenida al curso",
            duration: "5:30",
            completed: true
          },
          {
            type: "article",
            title: "Conceptos fundamentales",
            duration: "10 min lectura",
            completed: true
          },
          {
            type: "quiz",
            title: "Evaluación inicial",
            questions: 10,
            completed: true
          },
          {
            type: "material",
            title: "Guía de estudio",
            format: "PDF",
            completed: true
          }
        ]
      },
      {
        title: "Módulo 2: Fundamentos teóricos",
        duration: "2 semanas",
        isUnlocked: true,
        progress: 60,
        content: [
          {
            type: "video",
            title: "Teoría básica",
            duration: "15:45",
            completed: true
          },
          {
            type: "article",
            title: "Análisis detallado",
            duration: "20 min lectura",
            completed: false
          },
          {
            type: "quiz",
            title: "Prueba de conocimientos",
            questions: 15,
            completed: false
          },
          {
            type: "material",
            title: "Casos de estudio",
            format: "DOCX",
            completed: true
          }
        ]
      },
      {
        title: "Módulo 3: Aplicaciones prácticas",
        duration: "3 semanas",
        isUnlocked: false,
        progress: 0,
        content: [
          {
            type: "video",
            title: "Demostración práctica",
            duration: "25:10",
            completed: false
          },
          {
            type: "article",
            title: "Guía paso a paso",
            duration: "30 min lectura",
            completed: false
          },
          {
            type: "quiz",
            title: "Evaluación práctica",
            questions: 20,
            completed: false
          },
          {
            type: "material",
            title: "Plantillas de trabajo",
            format: "ZIP",
            completed: false
          }
        ]
      }
    ],
    requirements: [
      "No se requiere software o materiales especiales",
      "Disposición para aprender y practicar",
      "Tener ejemplos en mente para aplicar lo aprendido"
    ],
    targetAudience: [
      "Profesionales de la salud buscando actualización",
      "Estudiantes del área médica",
      "Personal administrativo del sector salud",
      "Cualquier persona interesada en el tema"
    ]
  }

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link href="/cursos" className="hover:text-foreground">Courses</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <Link href={`/cursos/${course.category.toLowerCase()}`} className="hover:text-foreground">{course.category}</Link>
        <ChevronRightIcon className="h-4 w-4" />
        <span className="text-foreground">{course.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hero Section */}
          <div className="relative rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 mb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">{course.category}</Badge>
              {course.category !== "Pacientes" && (
                <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">Certificado Disponible</Badge>
              )}
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">{course.title}</h1>
            
            <div className="flex items-center gap-6 text-sm mb-6">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt={courseDetails.instructor}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white"
                  />
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">{courseDetails.instructor}</span>
                  <span className="text-sm text-gray-500">Instructor Principal</span>
                </div>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="flex flex-col">
                <span className="text-gray-500">Última actualización</span>
                <span className="font-medium">{courseDetails.lastUpdate}</span>
              </div>
            </div>

            <div className="prose prose-blue max-w-none mb-6">
              <p className="text-lg text-gray-600 leading-relaxed">{course.description}</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <span>{courseDetails.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookIcon className="h-5 w-5 text-blue-500" />
                <span>{courseDetails.lessons} lecciones</span>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-5 text-blue-500" />
                <span>Nivel {courseDetails.level}</span>
              </div>
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="bg-white rounded-xl border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <CheckCircleIcon className="h-5 w-5 text-blue-600" />
              </div>
              Objetivos de Aprendizaje
            </h2>
            <div className="grid gap-4">
              {courseDetails.objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">{objective}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-xl border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <BriefcaseIcon className="h-5 w-5 text-amber-600" />
              </div>
              Requisitos
            </h2>
            <div className="grid gap-4">
              {courseDetails.requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-white rounded-xl border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <BriefcaseIcon className="h-5 w-5 text-purple-600" />
              </div>
              ¿Para quién es este curso?
            </h2>
            <div className="grid gap-4">
              {courseDetails.targetAudience.map((audience, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">{audience}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                <BookIcon className="h-5 w-5 text-green-600" />
              </div>
              Contenido del Curso
            </h2>
            <div className="space-y-6">
              {courseDetails.syllabus.map((module, moduleIndex) => (
                <div key={moduleIndex} className="border rounded-xl overflow-hidden">
                  {/* Module Header */}
                  <div className="flex items-center justify-between p-4 bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg 
                        ${module.isUnlocked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                        {moduleIndex + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{module.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{module.duration}</span>
                          <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                          <span>{module.content.length} actividades</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {module.isUnlocked ? (
                        <>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-blue-500 transition-all duration-300" 
                                style={{ width: `${module.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-500">{module.progress}%</span>
                          </div>
                          <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                        </>
                      ) : (
                        <LockIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Module Content */}
                  {module.isUnlocked && (
                    <div className="divide-y">
                      {module.content.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                            {item.type === 'video' && <PlayCircleIcon className="h-5 w-5 text-blue-500" />}
                            {item.type === 'article' && <FileTextIcon className="h-5 w-5 text-purple-500" />}
                            {item.type === 'quiz' && <PencilIcon className="h-5 w-5 text-amber-500" />}
                            {item.type === 'material' && <FolderIcon className="h-5 w-5 text-green-500" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              {item.type === 'video' && <span>{item.duration}</span>}
                              {item.type === 'article' && <span>{item.duration}</span>}
                              {item.type === 'quiz' && <span>{item.questions} preguntas</span>}
                              {item.type === 'material' && <span>Formato: {item.format}</span>}
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-6 w-6 rounded-full">
                            {item.completed ? (
                              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckIcon className="h-4 w-4 text-green-600" />
                              </div>
                            ) : (
                              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-bold text-primary">$19.00</div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-muted-foreground line-through">$21.99</span>
                      <Badge>14% OFF</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Level</span>
                      <span className="font-medium">Expert</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">2.3 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lectures</span>
                      <span className="font-medium">5 lectures</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subject</span>
                      <div className="text-right">
                        <div className="font-medium">Appetizer</div>
                        <div className="text-sm text-muted-foreground">Course Chef Bestseller</div>
                        <div className="text-sm text-muted-foreground">Fast Food</div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    asChild
                  >
                    <Link href={`/cursos/${params.id}/learn`}>
                      {course.category === "Pacientes" ? "Ver curso" : "Inscribirme"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
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