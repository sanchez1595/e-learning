import Link from "next/link"
import { BookOpenIcon, PanelLeftIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MainSelectionPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-800 sm:text-5xl md:text-6xl">
          IQVIA <span className="text-blue-600">Learning</span>
        </h1>
        <p className="mb-12 text-xl text-slate-600">
          Plataforma educativa para profesionales de la salud
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2">
          <Card className="flex flex-col border-2 hover:border-blue-300 hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <BookOpenIcon className="mx-auto mb-2 h-12 w-12 text-blue-600" />
              <CardTitle className="text-2xl">Sitio Público</CardTitle>
              <CardDescription>
                Accede a cursos y recursos educativos para médicos, enfermeras, pacientes y administrativos.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="mb-4 space-y-2 text-left text-slate-600">
                <li className="flex items-center">• Cursos especializados por roles</li>
                <li className="flex items-center">• Materiales educativos</li>
                <li className="flex items-center">• Certificaciones disponibles</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                <Link href="/home">
                  Explorar sitio público
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col border-2 hover:border-indigo-300 hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <PanelLeftIcon className="mx-auto mb-2 h-12 w-12 text-indigo-600" />
              <CardTitle className="text-2xl">Área Administrativa</CardTitle>
              <CardDescription>
                Gestión de cursos, usuarios y recursos de la plataforma educativa.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="mb-4 space-y-2 text-left text-slate-600">
                <li className="flex items-center">• Panel de administración</li>
                <li className="flex items-center">• Gestión de cursos</li>
                <li className="flex items-center">• Reportes y estadísticas</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg" variant="outline">
                <Link href="/admin">
                  Acceder a administración
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <p className="mt-12 text-slate-500 text-sm">
          © 2024 IQVIA. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}
