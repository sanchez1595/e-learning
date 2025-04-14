'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { 
  PlayCircleIcon, 
  FileTextIcon, 
  PencilIcon, 
  FolderIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  MenuIcon,
  XIcon,
  CheckCircleIcon,
  BookmarkIcon,
  MessageCircleIcon,
  HelpCircleIcon,
  DownloadIcon,
  ChevronDownIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LearnPage({ params }: { params: { id: string } }) {
  const [currentModule, setCurrentModule] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)

  // Simulamos que estamos en el primer video del módulo 1
  const courseContent = {
    title: "Nombre del Curso",
    totalLessons: 12,
    completedLessons: 4,
    modules: [
      {
        title: "Módulo 1: Introducción",
        duration: "1 semana",
        isUnlocked: true,
        progress: 100,
        lessons: [
          {
            id: "1-1",
            type: "video",
            title: "Bienvenida al curso",
            duration: "5:30",
            completed: true,
            description: "En este video introductorio, conocerás los objetivos del curso y la metodología que seguiremos para alcanzar los resultados esperados.",
            videoUrl: "https://example.com/video1.mp4",
            resources: [
              { name: "Presentación de bienvenida", type: "PDF", size: "2.3 MB" },
              { name: "Guía del estudiante", type: "PDF", size: "1.5 MB" }
            ],
            transcript: "Bienvenidos al curso..."
          },
          {
            id: "1-2",
            type: "article",
            title: "Conceptos fundamentales",
            duration: "10 min lectura",
            completed: true,
            description: "Lectura esencial sobre los conceptos básicos que necesitas conocer.",
            content: "Contenido del artículo..."
          },
          {
            id: "1-3",
            type: "quiz",
            title: "Evaluación inicial",
            duration: "15 min",
            completed: true,
            questions: 10
          }
        ]
      },
      {
        title: "Módulo 2: Fundamentos teóricos",
        duration: "2 semanas",
        isUnlocked: true,
        progress: 60,
        lessons: [
          {
            id: "2-1",
            type: "video",
            title: "Introducción a los fundamentos",
            duration: "15:45",
            completed: true,
            description: "Comprende los conceptos teóricos fundamentales.",
            videoUrl: "https://example.com/video2.mp4"
          },
          {
            id: "2-2",
            type: "article",
            title: "Análisis detallado",
            duration: "20 min lectura",
            completed: false,
            description: "Profundización en los conceptos clave."
          }
        ]
      }
    ]
  }

  const currentModuleContent = courseContent.modules[currentModule]
  const currentLessonContent = currentModuleContent.lessons[currentLesson]
  
  const navigateToLesson = (moduleIndex: number, lessonIndex: number) => {
    setCurrentModule(moduleIndex)
    setCurrentLesson(lessonIndex)
  }

  const navigateNext = () => {
    if (currentLesson < currentModuleContent.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
    } else if (currentModule < courseContent.modules.length - 1) {
      setCurrentModule(currentModule + 1)
      setCurrentLesson(0)
    }
  }

  const navigatePrevious = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1)
    } else if (currentModule > 0) {
      setCurrentModule(currentModule - 1)
      setCurrentLesson(courseContent.modules[currentModule - 1].lessons.length - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-4 w-full">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <CourseSidebar 
                  content={courseContent}
                  currentModule={currentModule}
                  currentLesson={currentLesson}
                  onNavigate={navigateToLesson}
                />
              </SheetContent>
            </Sheet>
            <div className="flex-1">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    onClick={navigatePrevious}
                    disabled={currentModule === 0 && currentLesson === 0}
                    className="text-sm"
                  >
                    <ChevronLeftIcon className="h-4 w-4 mr-2" />
                    Lección anterior
                  </Button>
                  <span className="text-sm font-medium">
                    Lección {currentLesson + 1} de {currentModuleContent.lessons.length}
                  </span>
                  <Button 
                    variant="ghost"
                    onClick={navigateNext}
                    disabled={currentModule === courseContent.modules.length - 1 && 
                             currentLesson === courseContent.modules[currentModule].lessons.length - 1}
                    className="text-sm"
                  >
                    Siguiente lección
                    <ChevronRightIcon className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <Progress 
                  value={(currentLesson + 1) / currentModuleContent.lessons.length * 100} 
                  className="h-1 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar - Hidden on mobile */}
        <aside className="hidden lg:block w-80 border-r bg-white">
          <CourseSidebar 
            content={courseContent}
            currentModule={currentModule}
            currentLesson={currentLesson}
            onNavigate={navigateToLesson}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Content Header */}
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-2">
                {currentModuleContent.title} • Lección {currentLesson + 1}
              </div>
              <h1 className="text-2xl font-bold mb-2">{currentLessonContent.title}</h1>
              <p className="text-gray-600">{currentLessonContent.description}</p>
            </div>

            {/* Content based on type */}
            {currentLessonContent.type === 'video' && (
              <div className="relative aspect-video bg-gray-900 rounded-xl mb-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircleIcon className="h-16 w-16 text-white opacity-80 cursor-pointer hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )}

            {currentLessonContent.type === 'article' && (
              <div className="prose prose-blue max-w-none mb-8">
                {currentLessonContent.content}
              </div>
            )}

            {currentLessonContent.type === 'quiz' && (
              <div className="bg-white rounded-xl border p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Evaluación</h2>
                <p className="text-gray-600 mb-4">
                  Esta evaluación contiene {currentLessonContent.questions} preguntas y tiene una duración estimada de {currentLessonContent.duration}.
                </p>
                <Button>
                  Comenzar evaluación
                </Button>
              </div>
            )}
          </div>
        </main>

        {/* Right Sidebar - Resources, Notes & Help */}
        <aside className="hidden xl:block w-96 border-l bg-white overflow-auto">
          <ScrollArea className="h-full">
            <div className="p-6 space-y-6">
              {/* Resources Section */}
              {currentLessonContent.resources && (
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <DownloadIcon className="h-5 w-5 text-blue-500" />
                    Recursos de la lección
                  </h2>
                  <div className="space-y-3">
                    {currentLessonContent.resources.map((resource, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <FileTextIcon className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium">{resource.name}</p>
                            <p className="text-sm text-gray-500">{resource.type} • {resource.size}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <DownloadIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Transcript Section */}
              {currentLessonContent.transcript && (
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <FileTextIcon className="h-5 w-5 text-purple-500" />
                    Transcripción
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600">{currentLessonContent.transcript}</p>
                  </div>
                </section>
              )}

              {/* Help Section */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <HelpCircleIcon className="h-5 w-5 text-blue-500" />
                  ¿Necesitas ayuda?
                </h2>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircleIcon className="h-4 w-4 mr-2" />
                    Contactar al instructor
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <HelpCircleIcon className="h-4 w-4 mr-2" />
                    Soporte técnico
                  </Button>
                </div>
              </section>
            </div>
          </ScrollArea>
        </aside>
      </div>
    </div>
  )
}

function CourseSidebar({ 
  content, 
  currentModule, 
  currentLesson, 
  onNavigate 
}: { 
  content: any
  currentModule: number
  currentLesson: number
  onNavigate: (moduleIndex: number, lessonIndex: number) => void
}) {
  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Contenido del curso</h2>
        </div>

        <Accordion type="multiple" defaultValue={[`module-${currentModule}`]} className="space-y-4">
          {content.modules.map((module: any, moduleIndex: number) => (
            <AccordionItem 
              key={moduleIndex} 
              value={`module-${moduleIndex}`}
              className="border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 hover:no-underline hover:bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                    ${module.isUnlocked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                    {moduleIndex + 1}
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-sm">{module.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{module.duration}</span>
                      <span>{module.lessons.length} lecciones</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="divide-y">
                  {module.lessons.map((lesson: any, lessonIndex: number) => (
                    <div
                      key={lessonIndex}
                      className={`flex items-center gap-3 p-4 text-sm cursor-pointer transition-colors
                        ${moduleIndex === currentModule && lessonIndex === currentLesson 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'hover:bg-gray-50'}
                        ${!module.isUnlocked ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                      onClick={() => module.isUnlocked && onNavigate(moduleIndex, lessonIndex)}
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                        {lesson.type === 'video' && <PlayCircleIcon className="h-4 w-4 text-blue-500" />}
                        {lesson.type === 'article' && <FileTextIcon className="h-4 w-4 text-purple-500" />}
                        {lesson.type === 'quiz' && <PencilIcon className="h-4 w-4 text-amber-500" />}
                      </div>
                      <span className="flex-1 truncate">{lesson.title}</span>
                      {lesson.completed && (
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollArea>
  )
} 