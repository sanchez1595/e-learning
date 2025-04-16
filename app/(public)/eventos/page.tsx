import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, MapPinIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EventosPage() {
  return (
    <div className="container py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Próximos Eventos</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Participa en nuestros eventos educativos y profesionales para ampliar tus conocimientos y hacer networking con otros profesionales de la salud.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventos.map((evento) => (
          <Link href={`/eventos/${evento.id}`} key={evento.id} className="block group">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all h-full flex flex-col">
              <div className="relative h-60">
                <Badge className="absolute top-4 left-4 z-10">{evento.category}</Badge>
                <Image
                  src={evento.image}
                  alt={evento.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3 flex justify-between">
                  <div className="flex items-center text-slate-600 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {evento.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{evento.title}</h3>
                <p className="text-slate-600 mb-6">{evento.description}</p>
                <div className="mt-auto flex items-center text-slate-600 text-sm">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  {evento.location}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const eventos = [
  {
    id: "global-education",
    title: "Global Education Fall Meeting for Everyone",
    date: "AGOSTO 18, 2024",
    description: "Conferencia internacional sobre las últimas tendencias en educación médica y profesional.",
    location: "United States",
    category: "Conferencia",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2187&auto=format&fit=crop"
  },
  {
    id: "london-conference",
    title: "London International Conference on Education",
    date: "NOVIEMBRE 9, 2024",
    description: "Evento educativo en Londres para profesionales de la salud interesados en las últimas metodologías pedagógicas.",
    location: "Londres",
    category: "Conferencia",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "digital-skills",
    title: "Digital Skills: Using Information to Build Business",
    date: "DICIEMBRE 31, 2024",
    description: "Taller práctico sobre habilidades digitales y gestión de información para profesionales de la salud.",
    location: "United Kingdom",
    category: "Taller",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: "medical-symposium",
    title: "Simposio Internacional de Medicina Preventiva",
    date: "ENERO 15, 2025",
    description: "Expertos internacionales presentan los últimos avances en medicina preventiva y salud pública.",
    location: "Barcelona, España",
    category: "Simposio",
    image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "healthcare-summit",
    title: "Healthcare Leadership Summit 2025",
    date: "FEBRERO 28, 2025",
    description: "Cumbre para líderes y directivos de instituciones sanitarias sobre gestión y futuro de la atención médica.",
    location: "New York, USA",
    category: "Cumbre",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "tech-medicine",
    title: "Technology in Medicine Expo",
    date: "MARZO 12, 2025",
    description: "Exposición de las últimas tecnologías aplicadas a la medicina y la atención sanitaria.",
    location: "Tokio, Japón",
    category: "Exposición",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
  }
]; 