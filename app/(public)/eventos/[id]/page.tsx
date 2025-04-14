import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, CalendarIcon, MapPinIcon, ClockIcon, UsersIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Datos de muestra para eventos
const eventos = [
  {
    id: "global-education",
    title: "Global Education Fall Meeting for Everyone",
    date: "AGOSTO 18, 2024",
    description: "Conferencia internacional sobre las últimas tendencias en educación médica y profesional.",
    location: "United States",
    category: "Conferencia",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2187&auto=format&fit=crop",
    fullDescription: "Únete a nosotros en la conferencia internacional más importante sobre educación médica de este año. Durante este evento, reconocidos expertos internacionales compartirán las últimas tendencias y avances en metodologías educativas para profesionales de la salud. Este evento está diseñado para educadores médicos, administradores de programas educativos y cualquier profesional interesado en mejorar sus habilidades pedagógicas en el ámbito sanitario.",
    agenda: [
      { time: "09:00 - 10:00", title: "Registro y café de bienvenida" },
      { time: "10:00 - 11:30", title: "Conferencia inaugural: 'El futuro de la educación médica en la era digital'" },
      { time: "11:30 - 12:00", title: "Descanso" },
      { time: "12:00 - 13:30", title: "Panel de discusión: 'Integrando tecnología en la enseñanza clínica'" },
      { time: "13:30 - 15:00", title: "Almuerzo networking" },
      { time: "15:00 - 16:30", title: "Talleres paralelos" },
      { time: "16:30 - 17:00", title: "Clausura y conclusiones" }
    ],
    speakers: [
      { name: "Dra. Maria Johnson", role: "Directora de Educación Médica, Universidad de Harvard", image: "https://randomuser.me/api/portraits/women/43.jpg" },
      { name: "Dr. James Smith", role: "Profesor de Pedagogía Médica, Universidad de Oxford", image: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "Dra. Sophia Chen", role: "Especialista en Tecnología Educativa, Stanford Medicine", image: "https://randomuser.me/api/portraits/women/44.jpg" }
    ]
  },
  {
    id: "london-conference",
    title: "London International Conference on Education",
    date: "NOVIEMBRE 9, 2024",
    description: "Evento educativo en Londres para profesionales de la salud interesados en las últimas metodologías pedagógicas.",
    location: "Londres",
    category: "Conferencia",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop",
    fullDescription: "La Conferencia Internacional de Londres sobre Educación en Salud reunirá a líderes mundiales en pedagogía médica para compartir investigaciones de vanguardia y prácticas innovadoras. Este evento de tres días ofrece una oportunidad única para establecer contactos con pares de todo el mundo, descubrir nuevas herramientas educativas y participar en talleres prácticos diseñados para transformar la forma en que enseñamos y aprendemos medicina.",
    agenda: [
      { time: "09:00 - 09:30", title: "Inauguración" },
      { time: "09:30 - 11:00", title: "Conferencia principal: 'Reimaginando la educación en ciencias de la salud'" },
      { time: "11:00 - 12:30", title: "Sesiones paralelas de investigación" },
      { time: "12:30 - 14:00", title: "Almuerzo" },
      { time: "14:00 - 15:30", title: "Talleres interactivos" },
      { time: "15:30 - 16:00", title: "Pausa café" },
      { time: "16:00 - 17:30", title: "Mesa redonda: 'Desafíos globales en educación médica'" }
    ],
    speakers: [
      { name: "Prof. Elizabeth Taylor", role: "Decana de Educación Médica, Imperial College London", image: "https://randomuser.me/api/portraits/women/53.jpg" },
      { name: "Dr. Richard Brown", role: "Director de Innovación Educativa, King's College", image: "https://randomuser.me/api/portraits/men/55.jpg" },
      { name: "Dra. Amelia Patel", role: "Investigadora en Métodos Pedagógicos, UCL", image: "https://randomuser.me/api/portraits/women/63.jpg" }
    ]
  },
  {
    id: "digital-skills",
    title: "Digital Skills: Using Information to Build Business",
    date: "DICIEMBRE 31, 2024",
    description: "Taller práctico sobre habilidades digitales y gestión de información para profesionales de la salud.",
    location: "United Kingdom",
    category: "Taller",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop",
    fullDescription: "Este taller intensivo está diseñado específicamente para profesionales de la salud que desean mejorar sus competencias digitales y aprovechar al máximo la información en el entorno sanitario moderno. Durante esta jornada completa, aprenderás herramientas prácticas para gestionar datos clínicos, optimizar flujos de trabajo digitales y desarrollar estrategias basadas en datos para mejorar la atención al paciente y la eficiencia organizacional.",
    agenda: [
      { time: "08:30 - 09:00", title: "Registro y desayuno" },
      { time: "09:00 - 10:30", title: "Fundamentos de alfabetización digital en entornos sanitarios" },
      { time: "10:30 - 12:00", title: "Taller práctico: Herramientas de análisis de datos para la toma de decisiones clínicas" },
      { time: "12:00 - 13:00", title: "Almuerzo" },
      { time: "13:00 - 14:30", title: "Optimización de sistemas de información sanitaria" },
      { time: "14:30 - 16:00", title: "Ejercicio práctico: Desarrollo de un proyecto de mejora basado en datos" },
      { time: "16:00 - 16:30", title: "Conclusiones y recursos adicionales" }
    ],
    speakers: [
      { name: "Dr. Thomas Wilson", role: "Especialista en Informática Médica, NHS Digital", image: "https://randomuser.me/api/portraits/men/22.jpg" },
      { name: "Dra. Rachel Green", role: "Consultora en Transformación Digital Sanitaria", image: "https://randomuser.me/api/portraits/women/29.jpg" }
    ]
  },
  {
    id: "medical-symposium",
    title: "Simposio Internacional de Medicina Preventiva",
    date: "ENERO 15, 2025",
    description: "Expertos internacionales presentan los últimos avances en medicina preventiva y salud pública.",
    location: "Barcelona, España",
    category: "Simposio",
    image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "El Simposio Internacional de Medicina Preventiva reunirá a investigadores y profesionales de todo el mundo para discutir estrategias innovadoras en prevención de enfermedades, promoción de la salud y políticas de salud pública. Con un enfoque especial en la integración de nuevas tecnologías y enfoques basados en la comunidad, este simposio ofrece una plataforma única para compartir conocimientos y establecer colaboraciones internacionales.",
    agenda: [
      { time: "09:00 - 09:30", title: "Bienvenida e introducción" },
      { time: "09:30 - 11:00", title: "Conferencia magistral: 'Tendencias globales en medicina preventiva'" },
      { time: "11:00 - 12:30", title: "Presentaciones científicas seleccionadas" },
      { time: "12:30 - 14:00", title: "Almuerzo y pósters" },
      { time: "14:00 - 15:30", title: "Mesa redonda: 'Desafíos en la implementación de programas preventivos'" },
      { time: "15:30 - 17:00", title: "Talleres temáticos paralelos" },
      { time: "17:00 - 17:30", title: "Clausura y próximos pasos" }
    ],
    speakers: [
      { name: "Dr. Antonio Martínez", role: "Director de Salud Pública, Hospital Clínic Barcelona", image: "https://randomuser.me/api/portraits/men/45.jpg" },
      { name: "Dra. Isabel García", role: "Investigadora Principal, Instituto de Salud Global Barcelona", image: "https://randomuser.me/api/portraits/women/28.jpg" },
      { name: "Dr. Michael Zhang", role: "Profesor de Epidemiología, Universidad de Washington", image: "https://randomuser.me/api/portraits/men/18.jpg" },
      { name: "Dra. Laura Fernández", role: "Especialista en Programas Preventivos, OMS", image: "https://randomuser.me/api/portraits/women/24.jpg" }
    ]
  },
  {
    id: "healthcare-summit",
    title: "Healthcare Leadership Summit 2025",
    date: "FEBRERO 28, 2025",
    description: "Cumbre para líderes y directivos de instituciones sanitarias sobre gestión y futuro de la atención médica.",
    location: "New York, USA",
    category: "Cumbre",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "La Cumbre de Liderazgo en Salud 2025 reúne a directivos y tomadores de decisiones del sector sanitario para explorar las últimas tendencias en gestión hospitalaria, políticas de salud y transformación de sistemas sanitarios. Este evento exclusivo ofrece una plataforma para el intercambio de ideas entre líderes de opinión, innovadores y ejecutivos de salud, con un enfoque en el desarrollo de estrategias que definirán el futuro de la atención médica.",
    agenda: [
      { time: "08:00 - 09:00", title: "Desayuno ejecutivo" },
      { time: "09:00 - 10:30", title: "Discurso inaugural: 'Liderazgo transformador en tiempos de cambio'" },
      { time: "10:30 - 12:00", title: "Panel ejecutivo: 'Navegando los desafíos regulatorios y financieros'" },
      { time: "12:00 - 13:30", title: "Almuerzo y networking dirigido" },
      { time: "13:30 - 15:00", title: "Sesiones paralelas sobre gestión de la innovación" },
      { time: "15:00 - 16:30", title: "Foro abierto: 'El hospital del futuro'" },
      { time: "16:30 - 18:00", title: "Cóctel de clausura y networking" }
    ],
    speakers: [
      { name: "Dr. Robert Johnson", role: "CEO, Memorial Healthcare System", image: "https://randomuser.me/api/portraits/men/33.jpg" },
      { name: "Dra. Amanda Williams", role: "Directora de Transformación, Cleveland Clinic", image: "https://randomuser.me/api/portraits/women/83.jpg" },
      { name: "Mark Thompson", role: "Director de Operaciones, NYU Langone Health", image: "https://randomuser.me/api/portraits/men/42.jpg" }
    ]
  },
  {
    id: "tech-medicine",
    title: "Technology in Medicine Expo",
    date: "MARZO 12, 2025",
    description: "Exposición de las últimas tecnologías aplicadas a la medicina y la atención sanitaria.",
    location: "Tokio, Japón",
    category: "Exposición",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "La Expo Tecnología en Medicina 2025 es el evento más importante del año para descubrir innovaciones tecnológicas en el sector sanitario. Con más de 200 expositores internacionales, demostraciones en vivo de las últimas soluciones médicas y un programa completo de conferencias, esta exposición ofrece una visión incomparable del futuro de la medicina. Desde robótica quirúrgica hasta inteligencia artificial para diagnóstico, la expo abarca todas las áreas donde la tecnología está revolucionando la atención médica.",
    agenda: [
      { time: "09:00 - 18:00", title: "Área de exposición abierta" },
      { time: "10:00 - 11:00", title: "Conferencia: 'IA en diagnóstico por imagen'" },
      { time: "11:30 - 12:30", title: "Demostración: Cirugía robótica avanzada" },
      { time: "13:00 - 14:00", title: "Panel: 'El futuro de la telemedicina'" },
      { time: "14:30 - 15:30", title: "Presentación: 'Wearables y monitorización de pacientes'" },
      { time: "16:00 - 17:00", title: "Mesa redonda: 'Ética e innovación tecnológica en medicina'" }
    ],
    speakers: [
      { name: "Dr. Hiroshi Tanaka", role: "Director de Innovación, Tokyo Medical University", image: "https://randomuser.me/api/portraits/men/65.jpg" },
      { name: "Dra. Sarah Kim", role: "Investigadora Principal, MIT Media Lab", image: "https://randomuser.me/api/portraits/women/68.jpg" },
      { name: "Dr. Alex Chen", role: "Fundador, MedTech Innovations", image: "https://randomuser.me/api/portraits/men/72.jpg" },
      { name: "Dra. Naomi Sato", role: "Jefa de Cirugía Robótica, Keio University Hospital", image: "https://randomuser.me/api/portraits/women/58.jpg" }
    ]
  }
];

export default function EventoPage({ params }: { params: { id: string } }) {
  const evento = eventos.find(item => item.id === params.id);
  
  if (!evento) {
    notFound();
  }

  return (
    <div className="container py-16">
      <Button variant="outline" size="sm" asChild className="mb-6">
        <Link href="/eventos">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Volver a eventos
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="mb-8">
            <Badge className="mb-4">{evento.category}</Badge>
            <h1 className="text-4xl font-bold mb-6">{evento.title}</h1>
            <div className="flex flex-wrap gap-6 text-slate-600 mb-6">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
                {evento.date}
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2 text-blue-600" />
                {evento.location}
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2 text-blue-600" />
                9:00 AM - 5:00 PM
              </div>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={evento.image}
                alt={evento.title}
                fill
                className="object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Descripción</h2>
            <p className="text-slate-600 mb-8">{evento.fullDescription || evento.description}</p>
            
            <h2 className="text-2xl font-bold mb-4">Agenda</h2>
            <div className="space-y-4 mb-8">
              {evento.agenda?.map((item, i) => (
                <div key={i} className="flex items-start border-b border-slate-100 pb-4">
                  <div className="w-32 shrink-0 font-medium">{item.time}</div>
                  <div className="flex-1">{item.title}</div>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Ponentes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {evento.speakers?.map((speaker, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-16 w-16 relative rounded-full overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{speaker.name}</h3>
                    <p className="text-sm text-slate-600">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white border rounded-xl p-6 sticky top-24">
            <h3 className="font-bold text-xl mb-6">Registro</h3>
            <p className="text-slate-600 mb-6">Reserva tu lugar en este evento y conecta con profesionales de tu sector.</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Fecha:</span>
                <span className="font-medium">{evento.date}</span>
              </div>
              <div className="flex justify-between">
                <span>Hora:</span>
                <span className="font-medium">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Ubicación:</span>
                <span className="font-medium">{evento.location}</span>
              </div>
              <div className="flex justify-between">
                <span>Participantes:</span>
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-medium text-blue-600">+50</div>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <Button className="w-full mb-3">Inscribirse ahora</Button>
            <Button variant="outline" className="w-full">Añadir al calendario</Button>
          </div>
        </div>
      </div>
    </div>
  )
} 