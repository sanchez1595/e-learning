import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, CalendarIcon, UserIcon, EyeIcon, BookmarkIcon, ShareIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Datos de muestra para artículos del blog
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
    content: `
      <p>La revolución tecnológica está transformando rápidamente el panorama de la atención sanitaria, desde los diagnósticos hasta los tratamientos y la gestión de la salud. En este artículo, exploramos las diez tecnologías más prometedoras que están redefiniendo la forma en que se presta la atención médica y mejorando los resultados para los pacientes.</p>
      
      <h2>1. Inteligencia Artificial en Diagnóstico Médico</h2>
      <p>Los algoritmos de IA están demostrando una precisión impresionante en la interpretación de imágenes médicas, incluso superando a los radiólogos humanos en la detección de ciertas condiciones. Esta tecnología está acelerando los diagnósticos, reduciendo los errores y permitiendo que los médicos se concentren en casos más complejos.</p>
      
      <h2>2. Telemedicina Avanzada</h2>
      <p>La pandemia aceleró la adopción de la telemedicina, pero ahora estamos viendo plataformas mucho más sofisticadas que permiten consultas remotas completas, monitorización de signos vitales a distancia y evaluaciones diagnósticas preliminares mediante IA.</p>
      
      <h2>3. Impresión 3D para Medicina Personalizada</h2>
      <p>Desde prótesis personalizadas hasta modelos anatómicos para planificación quirúrgica, la impresión 3D está permitiendo soluciones médicas altamente personalizadas. Los investigadores incluso están trabajando en la bioimpresión de tejidos y órganos funcionales.</p>
      
      <h2>4. Dispositivos Wearables de Monitorización Continua</h2>
      <p>Los dispositivos portátiles están evolucionando más allá del simple recuento de pasos. Los nuevos wearables pueden monitorizar continuamente la glucosa en sangre, detectar fibrilación auricular, medir la saturación de oxígeno y alertar sobre posibles problemas cardíacos antes de que se conviertan en emergencias.</p>
      
      <h2>5. Medicina de Precisión y Genómica</h2>
      <p>El rápido avance en la secuenciación genómica y el análisis de datos está haciendo posible tratamientos personalizados basados en el perfil genético único de cada paciente, mejorando la eficacia y reduciendo los efectos secundarios.</p>
      
      <h2>6. Realidad Virtual y Aumentada</h2>
      <p>La RV y RA están encontrando aplicaciones tanto en la formación médica como en los tratamientos. Los cirujanos pueden practicar procedimientos complejos, mientras que los pacientes pueden utilizar estas tecnologías para la rehabilitación física o el tratamiento de fobias y trastornos de ansiedad.</p>
      
      <h2>7. Robótica Quirúrgica</h2>
      <p>Los sistemas quirúrgicos robóticos están evolucionando para permitir cirugías más precisas y menos invasivas. Los cirujanos pueden operar con mayor precisión, reduciendo el trauma quirúrgico y acelerando la recuperación del paciente.</p>
      
      <h2>8. Blockchain para Registros Médicos</h2>
      <p>La tecnología blockchain tiene el potencial de revolucionar la gestión de registros médicos, proporcionando un sistema seguro e inmutable que puede mejorar la interoperabilidad entre sistemas sanitarios mientras mantiene la privacidad del paciente.</p>
      
      <h2>9. Nanomedicina</h2>
      <p>Los avances en nanotecnología están permitiendo tratamientos dirigidos a nivel molecular. Las nanopartículas pueden entregar medicamentos directamente a células específicas, reduciendo los efectos secundarios y aumentando la eficacia terapéutica.</p>
      
      <h2>10. Gemelos Digitales en Salud</h2>
      <p>La creación de modelos virtuales personalizados de pacientes individuales está permitiendo simulaciones médicas altamente precisas. Estos "gemelos digitales" pueden utilizarse para predecir respuestas a tratamientos, probar intervenciones médicas virtualmente antes de aplicarlas al paciente real, y desarrollar planes de tratamiento optimizados.</p>
      
      <h2>Conclusión</h2>
      <p>La integración de estas tecnologías está allanando el camino hacia una atención sanitaria más preventiva, personalizada, precisa y accesible. Si bien quedan desafíos por resolver, incluyendo cuestiones éticas, regulatorias y de equidad en el acceso, el potencial de estas innovaciones para transformar positivamente la salud global es innegable.</p>
    `,
    relatedPosts: ["ai-diagnostics", "medical-education", "patient-care"]
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
    content: `
      <p>La inteligencia artificial está revolucionando el campo del diagnóstico médico, especialmente en áreas como la radiología y la patología. Los sistemas basados en aprendizaje profundo están demostrando capacidades impresionantes para detectar anomalías que podrían pasar desapercibidas incluso para especialistas experimentados.</p>
      
      <h2>Radiología Transformada</h2>
      <p>En radiología, los algoritmos de IA ahora pueden detectar pequeños nódulos pulmonares, identificar fracturas sutiles y clasificar lesiones mamográficas con una precisión que iguala o supera a los radiólogos humanos. Esto es especialmente importante en entornos con escasez de especialistas o alta carga de trabajo.</p>
      
      <h2>Patología Digital</h2>
      <p>La patología digital combinada con IA está permitiendo análisis automatizados de muestras tisulares, mejorando la precisión en la detección de células cancerosas y proporcionando evaluaciones cuantitativas objetivas que reducen la variabilidad entre observadores.</p>
      
      <h2>Desafíos y Consideraciones</h2>
      <p>A pesar de estos avances, la implementación generalizada de la IA diagnóstica enfrenta varios desafíos, incluidos los sesgos en los datos de entrenamiento, la necesidad de grandes conjuntos de datos etiquetados y las preocupaciones sobre la interpretabilidad de las decisiones algorítmicas.</p>
      
      <h2>El Futuro del Diagnóstico</h2>
      <p>El futuro probablemente no sea la sustitución de los médicos por IA, sino una colaboración sinérgica donde los algoritmos actúen como un "segundo par de ojos", ayudando a priorizar casos urgentes, reduciendo errores y liberando tiempo para que los médicos se centren en la atención al paciente y los casos más complejos.</p>
    `,
    relatedPosts: ["technology-healthcare", "medical-education", "digital-health"]
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
    views: 2980,
    content: `
      <p>La educación médica está experimentando una transformación sin precedentes impulsada por nuevas metodologías pedagógicas, tecnologías emergentes y un enfoque renovado en las competencias del siglo XXI. Este artículo explora las tendencias que están redefiniendo cómo formamos a los profesionales de la salud.</p>
      
      <h2>Aprendizaje Basado en Competencias</h2>
      <p>El modelo tradicional basado en tiempo está dando paso a enfoques centrados en competencias, donde los estudiantes avanzan al demostrar dominio de habilidades específicas, independientemente del tiempo que les tome. Este cambio asegura que todos los graduados alcancen un nivel mínimo de competencia en todas las áreas críticas.</p>
      
      <h2>Simulación y Realidad Virtual</h2>
      <p>Las tecnologías de simulación, desde maniquíes de alta fidelidad hasta entornos de realidad virtual inmersivos, están permitiendo a los estudiantes practicar procedimientos y habilidades clínicas en entornos seguros antes de interactuar con pacientes reales.</p>
      
      <h2>Integración Temprana de Experiencias Clínicas</h2>
      <p>Los programas modernos están introduciendo a los estudiantes al entorno clínico mucho antes, integrando la práctica con la teoría desde las primeras etapas para contextualizar el aprendizaje y desarrollar habilidades interpersonales cruciales.</p>
      
      <h2>Enseñanza Interprofesional</h2>
      <p>Reconociendo que la atención sanitaria moderna es un esfuerzo de equipo, las instituciones están implementando experiencias de aprendizaje que reúnen a estudiantes de medicina, enfermería, farmacia y otras disciplinas para fomentar la colaboración y comprensión mutua.</p>
      
      <h2>Ciencia del Aprendizaje Aplicada</h2>
      <p>La incorporación de principios de neurociencia del aprendizaje, como la práctica espaciada, el testing de recuperación y el aprendizaje contextualizado, está mejorando la retención de conocimientos y la transferencia de habilidades.</p>
    `,
    relatedPosts: ["technology-healthcare", "ai-diagnostics", "future-healthcare"]
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
    views: 4125,
    content: `
      <p>A medida que la atención sanitaria se vuelve más tecnológica, existe el riesgo de que la conexión humana tan esencial para la curación pueda perderse. Este artículo examina cómo los profesionales de la salud están encontrando formas de equilibrar la eficiencia tecnológica con la empatía y la atención personalizada.</p>
      
      <h2>Más allá de los Datos: El Poder de la Escucha</h2>
      <p>A pesar de disponer de datos exhaustivos de los pacientes, los médicos más efectivos siguen priorizando la escucha activa. Comprender la narrativa del paciente, sus preocupaciones y preferencias sigue siendo fundamental para un diagnóstico y tratamiento efectivos.</p>
      
      <h2>Comunicación Mejorada por Tecnología</h2>
      <p>Paradójicamente, la tecnología bien implementada puede facilitar una mejor comunicación. Las herramientas digitales que liberan a los médicos de tareas administrativas les permiten dedicar más atención a la interacción con el paciente.</p>
      
      <h2>Democratización de la Información Médica</h2>
      <p>El acceso de los pacientes a sus propios datos médicos y a información sanitaria está cambiando la dinámica de poder tradicional, fomentando un modelo más colaborativo de toma de decisiones entre médico y paciente.</p>
      
      <h2>Diseño Centrado en el Humano</h2>
      <p>Los hospitales y clínicas están siendo rediseñados con principios centrados en el humano, creando entornos que reducen el estrés, facilitan la navegación y promueven la sensación de control y dignidad del paciente.</p>
      
      <h2>Formación en Habilidades de Comunicación</h2>
      <p>Las escuelas de medicina están fortaleciendo la formación en comunicación, empatía y técnicas narrativas, reconociendo que estas "habilidades blandas" son en realidad fundamentales para resultados clínicos óptimos.</p>
    `,
    relatedPosts: ["technology-healthcare", "medical-education", "digital-health"]
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
    content: `
      <p>El ecosistema de salud digital continúa evolucionando a un ritmo acelerado, con nuevas tecnologías y modelos de servicio emergiendo constantemente. Este artículo examina las tendencias más significativas que darán forma al panorama de la salud digital en los próximos años.</p>
      
      <h2>Interoperabilidad como Prioridad</h2>
      <p>La capacidad de los diferentes sistemas para comunicarse entre sí se está convirtiendo finalmente en realidad, impulsada por estándares como FHIR y políticas gubernamentales que penalizan el "acaparamiento de datos".</p>
      
      <h2>Modelos Predictivos de Salud Poblacional</h2>
      <p>El análisis avanzado de datos está permitiendo identificar tendencias de salud a nivel poblacional y predecir brotes de enfermedades, permitiendo intervenciones preventivas más efectivas.</p>
      
      <h2>Hospital en Casa</h2>
      <p>La combinación de dispositivos de monitorización remota, visitas virtuales y equipos médicos móviles está permitiendo trasladar cada vez más cuidados hospitalarios al hogar del paciente, mejorando su experiencia y reduciendo costes.</p>
      
      <h2>IA Conversacional en Atención Sanitaria</h2>
      <p>Los asistentes virtuales impulsados por IA están evolucionando más allá del triaje básico para ofrecer educación personalizada sobre enfermedades, recordatorios de medicación adaptados y monitorización continua de la salud mental.</p>
      
      <h2>Bienestar Digital</h2>
      <p>Las aplicaciones de salud están adoptando un enfoque más holístico, integrando monitorización física con salud mental, factores sociales y ambientales para proporcionar una visión verdaderamente completa del bienestar.</p>
    `,
    relatedPosts: ["technology-healthcare", "ai-diagnostics", "future-healthcare"]
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
    content: `
      <p>La próxima década promete transformaciones radicales en cómo se proporciona, financia y experimenta la atención sanitaria. Basándonos en tendencias emergentes y avances tecnológicos, estas son las predicciones sobre cómo podría evolucionar el sector sanitario.</p>
      
      <h2>Medicina Verdaderamente Preventiva</h2>
      <p>La combinación de sensores portátiles, análisis genómicos asequibles y algoritmos predictivos está creando un nuevo paradigma donde las intervenciones ocurren antes de que aparezcan los síntomas, cambiando fundamentalmente el enfoque de tratar enfermedades a mantener la salud.</p>
      
      <h2>Redes de Atención Descentralizadas</h2>
      <p>El modelo centralizado en hospitales está dando paso a redes distribuidas que incluyen clínicas locales, servicios móviles, atención virtual y monitorización domiciliaria, mejorando el acceso y reduciendo los costes de infraestructura.</p>
      
      <h2>Medicina Regenerativa Mainstream</h2>
      <p>Las terapias basadas en células madre y la medicina regenerativa pasarán de ser experimentales a convertirse en tratamientos estándar para condiciones como lesiones de médula espinal, insuficiencia orgánica y enfermedades neurodegenerativas.</p>
      
      <h2>Nuevos Modelos de Reembolso</h2>
      <p>Los sistemas de pago por servicio serán reemplazados por modelos basados en resultados de salud, incentivando la prevención, la adherencia al tratamiento y la satisfacción del paciente sobre el volumen de procedimientos.</p>
      
      <h2>El Auge del "Autocuidado Tecnológico"</h2>
      <p>Los pacientes tomarán mayor control de su salud mediante plataformas digitales que integran asesoramiento médico, monitorización, comunidades de pacientes y acceso a tratamientos, difuminando las líneas entre salud profesional y autocuidado.</p>
    `,
    relatedPosts: ["technology-healthcare", "digital-health", "patient-care"]
  }
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(item => item.id === params.id);
  
  if (!post) {
    notFound();
  }

  // Obtener posts relacionados
  const relatedArticles = post.relatedPosts
    ? blogPosts.filter(item => post.relatedPosts?.includes(item.id))
    : [];

  return (
    <div className="container py-16">
      <Button variant="outline" size="sm" asChild className="mb-6">
        <Link href="/blog">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Volver al blog
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-slate-500">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-slate-500 space-x-4">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <EyeIcon className="h-4 w-4 mr-1" />
                {post.views} lecturas
              </div>
            </div>
          </div>
          
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-blue max-w-none mb-8"
               dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="flex items-center justify-between border-t border-b py-6 my-8">
            <Button variant="outline" size="sm">
              <BookmarkIcon className="h-4 w-4 mr-2" />
              Guardar artículo
            </Button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-500">Compartir:</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ShareIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {relatedArticles.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map(article => (
                  <Link href={`/blog/${article.id}`} key={article.id} 
                        className="group block rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2">{article.category}</Badge>
                      <h3 className="font-bold mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-3">{article.excerpt}</p>
                      <div className="flex justify-between items-center text-xs text-slate-500">
                        <span>{article.date}</span>
                        <span className="flex items-center">
                          <EyeIcon className="h-3 w-3 mr-1" />
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div>
          <div className="bg-white border rounded-xl p-6 sticky top-24">
            <h3 className="font-bold text-xl mb-6">Acerca del autor</h3>
            <div className="flex items-center mb-4">
              <Avatar className="h-16 w-16 mr-4">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-lg">{post.author.name}</p>
                <p className="text-sm text-slate-600">{post.author.role}</p>
              </div>
            </div>
            <p className="text-slate-600 mb-4">
              Experto en su campo con numerosas publicaciones sobre temas relacionados con la salud, tecnología médica y educación sanitaria.
            </p>
            <Button variant="outline" className="w-full">Ver perfil</Button>
            
            <Separator className="my-6" />
            
            <h3 className="font-bold text-xl mb-4">Categorías populares</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-slate-50">Tecnología</Badge>
              <Badge variant="outline" className="bg-slate-50">Educación</Badge>
              <Badge variant="outline" className="bg-slate-50">Salud Digital</Badge>
              <Badge variant="outline" className="bg-slate-50">Inteligencia Artificial</Badge>
              <Badge variant="outline" className="bg-slate-50">Atención al Paciente</Badge>
            </div>
            
            <h3 className="font-bold text-xl mb-4">Suscríbete</h3>
            <p className="text-slate-600 mb-4">
              Recibe los últimos artículos y novedades directamente en tu correo electrónico.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Tu dirección de correo"
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
              <Button className="w-full">Suscribirse</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 