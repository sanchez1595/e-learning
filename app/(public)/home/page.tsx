"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, SearchIcon, PlayIcon, StarIcon, CheckIcon, LightbulbIcon, GraduationCapIcon, ClockIcon, BadgeCheckIcon, ArrowLeftIcon, ArrowRightCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Definiendo la interfaz para los cursos
interface Course {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  instructor: string;
  level: string;
  discount?: number;
  featured?: boolean;
  free?: boolean;
}

interface Event {
  id: number
  title: string
  date: string
  image: string
  location: string
}

interface Testimonial {
  id: number
  title: string
  text: string
  name: string
  role: string
  avatar: string
  rating: number
}

interface BlogPost {
  id: number
  title: string
  date: string
  views: string
  excerpt: string
  image: string
  slug: string
}

interface BlogLink {
  title: string
  slug: string
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10">
          <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="277" cy="63" r="225" fill="#DBEAFE" fillOpacity="0.25"/>
          </svg>
        </div>
        
        <div className="container relative py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center max-w-xl">
              <div className="text-blue-600 font-medium mb-4">Keep Learning</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Connect With Our Expert
                <div className="inline-block ml-2 relative">
                  <span className="relative z-10">Instructors</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 rounded-full -z-0 opacity-60"></span>
                </div>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Acquire global knowledge and build your professional skills
              </p>
              <Button size="lg" className="w-fit px-8 py-6 text-base mb-10">
                Find Courses
              </Button>
            </div>

            <div className="relative">
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Expert Instructor"
                  width={580}
                  height={680}
                  className="object-cover rounded-xl shadow-xl"
                />
                <div className="absolute -right-4 -bottom-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm">(1,492)</span>
                  </div>
                  <div className="mt-1">
                    <span className="font-medium">Oliver</span> / Writer and Proofreader
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-blue-600 font-medium mb-2">New Certificates</div>
                  <h3 className="text-2xl font-bold mb-4">Online Courses from IQVIA University</h3>
                  <Button className="w-fit mt-2">Find out more</Button>
                </div>
                <div className="md:w-1/2 relative h-60 md:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
                    alt="Certificate courses"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-blue-600 font-medium mb-2">New Collection</div>
                  <h3 className="text-2xl font-bold mb-4">Master Your Coding Skills In Lockdown</h3>
                  <Button className="w-fit mt-2">View courses</Button>
                </div>
                <div className="md:w-1/2 relative h-60 md:h-auto flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-lg overflow-hidden shadow-lg relative">
                        <Image
                          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                          alt="Coding laptop"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-10">
                      <PlayIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Featured Courses */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-1 flex items-center">
              Explore Featured Courses
              <span className="ml-3 inline-block relative">
                <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 rounded-full -z-0"></span>
              </span>
            </h2>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Tabs defaultValue="all">
                <TabsList className="bg-transparent p-0 space-x-6">
                  <TabsTrigger 
                    value="all" 
                    className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-0 pb-2 text-gray-600 hover:text-blue-600 text-sm font-medium"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger 
                    value="trending" 
                    className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-0 pb-2 text-gray-600 hover:text-blue-600 text-sm font-medium"
                  >
                    Trending
                  </TabsTrigger>
                  <TabsTrigger 
                    value="popular" 
                    className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-0 pb-2 text-gray-600 hover:text-blue-600 text-sm font-medium"
                  >
                    Popularity
                  </TabsTrigger>
                  <TabsTrigger 
                    value="featured" 
                    className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-0 pb-2 text-gray-600 hover:text-blue-600 text-sm font-medium"
                  >
                    Featured
                  </TabsTrigger>
                  <TabsTrigger 
                    value="art" 
                    className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-0 pb-2 text-gray-600 hover:text-blue-600 text-sm font-medium"
                  >
                    Art & Design
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="relative">
            {/* Course Slider Controls */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <button className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ArrowRightIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
              <button className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCourses.map((course) => (
                <Link href={`/cursos/${course.id}`} key={course.id}>
                  <CourseCard course={course} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-3xl font-bold mb-1 flex items-center">
              Who Will You Learn With?
              <span className="ml-3 inline-block relative">
                <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 rounded-full -z-0"></span>
              </span>
            </h2>
            <Link 
              href="/partners" 
              className="text-blue-600 font-medium hover:underline hidden md:inline-flex items-center"
            >
              View all partners
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-32">
              <div className="relative h-16 w-full">
                <Image 
                  src="/university1.png" 
                  alt="University Partner"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-32">
              <div className="relative h-16 w-full">
                <Image 
                  src="/bright.png" 
                  alt="Bright Minds High School"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-32">
              <div className="relative h-16 w-full">
                <Image 
                  src="/educationfirst.png" 
                  alt="Education First"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-32">
              <div className="relative h-16 w-full">
                <Image 
                  src="/spacewriting.png" 
                  alt="Space Writing"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-32">
              <div className="relative h-16 w-full">
                <Image 
                  src="/university2.png" 
                  alt="Another University"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center h-32">
              <div className="relative h-16 w-full">
                <Image 
                  src="/creativebook.png" 
                  alt="Creative Book"
                  width={120}
                  height={60}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IQVIA Guides */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between mb-10">
            <h2 className="text-3xl font-bold mb-1 flex items-center">
              IQVIA Guides
              <span className="ml-3 inline-block relative">
                <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300 rounded-full -z-0"></span>
              </span>
            </h2>
            <Link 
              href="/guides" 
              className="text-blue-600 font-medium hover:underline hidden md:inline-flex items-center"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Image 
                  src="/essential-skills.svg" 
                  alt="Learn Essential Skills"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Learn The Essential Skills</h3>
              <p className="text-gray-600 text-sm">
                Like graphic design, business analytics, coding and much more
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <Image 
                  src="/certificates.svg" 
                  alt="Earn Certificates"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Certificates And Degrees</h3>
              <p className="text-gray-600 text-sm">
                From top institutions and universities with high reputation over the world
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <Image 
                  src="/career.svg" 
                  alt="Get Ready for Career"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Get Ready for The Next Career</h3>
              <p className="text-gray-600 text-sm">
                With high demands in mastering new skills in IT, analytics and more
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <Image 
                  src="/master.svg" 
                  alt="Master Different Areas"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Master at Different Areas</h3>
              <p className="text-gray-600 text-sm">
                With IQVIA's thousands of courses instructed by top experts
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achieve Your Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-5">
                  Achieve Your Goals With IQVIA
                </h2>
                <p className="text-gray-600 mb-8">
                  Create an account to receive our newsletter, course recommendations and promotions.
                </p>
                <div className="flex">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path d="M36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C30.627 12 36 17.373 36 24Z" fill="#E8F3FF"/>
                      <path d="M16 36L32 36" stroke="#0D6EFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M35.8353 32.47C38.1137 30.1916 38.9987 30.5635 41.2771 32.8419C43.5555 35.1203 44.2994 38.0062 41.2771 41.0286C38.9578 43.3479 35.9469 42.7117 33.0376 42.7117C27.7866 42.7117 22.5073 37.8211 18.2212 33.535C13.9351 29.2489 9.04449 23.9695 9.04449 18.7185C9.04449 15.8093 8.35825 12.8526 10.6776 10.5332C13.7 7.51086 16.5858 8.25475 18.8642 10.5332C21.1426 12.8115 21.5145 13.6966 19.2361 15.9749" stroke="#0D6EFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M29.4195 16.4142L19.5563 26.2773L21.677 28.398L31.5402 18.5349L33.661 20.6556L23.7978 30.5188L25.9185 32.6395L35.7817 22.7763L37.9024 24.8971L28.0392 34.7603L30.1599 36.881L40.0231 27.0178" stroke="#0D6EFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                    Register for free
                  </Button>
                </div>
              </div>
              <div className="relative lg:h-auto h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                  alt="IQVIA Learning Platform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-3">
                People Say About IQVIA
              </h2>
              <p className="text-gray-600 mb-6">
                One-stop solution for any eLearning center, online courses. People love IQVIA because they can create their sites with ease here.
              </p>
              <Link 
                href="/testimonials" 
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg relative">
              <div className="text-3xl text-gray-200 absolute top-4 right-4">"</div>
              <h3 className="text-xl font-bold mb-4">Great quality!</h3>
              <p className="text-gray-600 mb-6">
                I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 relative rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Oliver Beddows"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Oliver Beddows</div>
                  <div className="text-sm text-gray-500">/ Designer, Manchester</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg relative">
              <div className="text-3xl text-gray-200 absolute top-4 right-4">"</div>
              <h3 className="text-xl font-bold mb-4">Code Quality</h3>
              <p className="text-gray-600 mb-6">
                ThemeMove deserves 5 star for theme's features, design quality, flexibility, and support service!
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 relative rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://randomuser.me/api/portraits/men/43.jpg" 
                    alt="Madley Pondor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Madley Pondor</div>
                  <div className="text-sm text-gray-500">/ Reporter, San Diego</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-8">
            <div className="text-blue-600 font-medium mb-2">EVENTS</div>
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">
                Upcoming Events
                <span className="ml-3 inline-block relative">
                  <span className="absolute bottom-1 left-0 w-20 h-2 bg-yellow-300 rounded-full -z-0"></span>
                </span>
              </h2>
              <Link 
                href="/eventos" 
                className="text-blue-600 font-medium hover:underline hidden md:inline-flex items-center"
              >
                View all
              </Link>
            </div>
            <p className="text-gray-600 max-w-xl">
              You can show all events here to let people take the chances to get involve.
            </p>
          </div>

          <div className="relative">
            {/* Event Slider Controls */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <button className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ArrowRightIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
              <button className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-56">
                  <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2187&auto=format&fit=crop"
                    alt="Global Education Event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-gray-500 mb-2">AUGUST 18, 2020</div>
                  <h3 className="text-xl font-bold mb-4">Global Education Fall Meeting for Everyone</h3>
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    United States
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-56">
                  <Image
                    src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop"
                    alt="London Conference"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-gray-500 mb-2">NOVEMBER 9, 2020</div>
                  <h3 className="text-xl font-bold mb-4">London International Conference on Education</h3>
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    London
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-56">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop"
                    alt="Digital Skills"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-gray-500 mb-2">DECEMBER 31, 2020</div>
                  <h3 className="text-xl font-bold mb-4">Digital Skills: Using Information to Build Business</h3>
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    United Kingdom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-10">
            <div className="text-blue-600 font-medium mb-2">BLOG UPDATE</div>
            <h2 className="text-3xl font-bold mb-1">
              IQVIA's News And Blogs
              <span className="ml-3 inline-block relative">
                <span className="absolute bottom-1 left-0 w-20 h-2 bg-yellow-300 rounded-full -z-0"></span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="space-y-6">
                <Link href="/blog/learning-management" className="flex items-center gap-4 group">
                  <ArrowRightCircleIcon className="h-6 w-6 text-blue-600 group-hover:text-blue-500 transition-colors" />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    4 Learning Management System Design Tips For Better eLearning
                  </span>
                </Link>
                <Link href="/blog/motivation" className="flex items-center gap-4 group">
                  <ArrowRightCircleIcon className="h-6 w-6 text-blue-600 group-hover:text-blue-500 transition-colors" />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    The Importance Of Intrinsic Motivation for Students
                  </span>
                </Link>
                <Link href="/blog/grading" className="flex items-center gap-4 group">
                  <ArrowRightCircleIcon className="h-6 w-6 text-blue-600 group-hover:text-blue-500 transition-colors" />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    A Better Alternative To Grading Student Writing
                  </span>
                </Link>
                <Link href="/blog/writing" className="flex items-center gap-4 group">
                  <ArrowRightCircleIcon className="h-6 w-6 text-blue-600 group-hover:text-blue-500 transition-colors" />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    It's Time To Think Differently About Writing In The Classroom
                  </span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                      alt="Social-Emotional Basics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-gray-500 text-sm">August 10, 2020</div>
                      <div className="text-gray-500 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        73,743 views
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">Back To School Social-Emotional Basics: Relationship, Rhythm, Release</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      As our elementary students head back to school in person, ...
                    </p>
                    <Link href="/eventos/global-education" className="text-blue-600 font-medium hover:underline">
                      View details
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
                      alt="Global Learning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-gray-500 text-sm">August 10, 2020</div>
                      <div className="text-gray-500 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        1,223 views
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">The Challenge Of Global Learning In Public Education</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      In high-stakes testing environments prevalent in many formal learning institutions, ...
                    </p>
                    <Link href="/eventos/london-conference" className="text-blue-600 font-medium hover:underline">
                      View details
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                      alt="Technology and Reading"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-gray-500 text-sm">August 10, 2020</div>
                      <div className="text-gray-500 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        1,046 views
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">Exactly How Technology Can Make Reading Better</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Through apps with social components, readers can be connected through ...
                    </p>
                    <Link href="/blog/back-to-school" className="text-blue-600 font-medium hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dummy data for course cards */}
      {false && (
        <div className="hidden">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  )
}

// Sample course data
const popularCourses: Course[] = [
  {
    id: "1",
    title: "Mastering Medical Terminology",
    image: "/courses/medical-terms.jpg",
    price: 49.99,
    originalPrice: 89.99,
    instructor: "Dr. Maria Lopez",
    level: "Beginner",
    discount: 44,
    featured: true
  },
  {
    id: "2",
    title: "Clinical Research Fundamentals",
    image: "/courses/clinical-research.jpg",
    price: 59.99,
    instructor: "Prof. John Smith",
    level: "Intermediate"
  },
  {
    id: "3",
    title: "Healthcare Data Management",
    image: "/courses/healthcare-data.jpg",
    price: 0,
    instructor: "Sarah Johnson",
    level: "Beginner",
    free: true
  },
  {
    id: "4",
    title: "Advanced Pharmacology",
    image: "/courses/pharmacology.jpg",
    price: 79.99,
    originalPrice: 99.99,
    instructor: "Dr. Michael Chen",
    level: "Advanced",
    discount: 20,
    featured: true
  },
  {
    id: "enf-2",
    title: "Patient Care Essentials",
    image: "/courses/patient-care.jpg",
    price: 39.99,
    instructor: "Nurse Rebecca Taylor",
    level: "Beginner"
  },
  {
    id: "med-4",
    title: "Healthcare Ethics",
    image: "/courses/healthcare-ethics.jpg",
    price: 49.99,
    originalPrice: 69.99,
    instructor: "Prof. David Williams",
    level: "Intermediate",
    discount: 28
  },
  {
    id: "enf-3",
    title: "Introduction to Telemedicine",
    image: "/courses/telemedicine.jpg",
    price: 29.99,
    instructor: "Dr. Emily Rodriguez",
    level: "Beginner"
  },
  {
    id: "med-5",
    title: "Medical Coding Certification",
    image: "/courses/medical-coding.jpg",
    price: 89.99,
    originalPrice: 119.99,
    instructor: "Sophia Anderson",
    level: "Advanced",
    discount: 25,
    featured: true
  }
];

// Course Card Component
function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        {course.featured && (
          <Badge className="absolute top-3 left-3 bg-red-500 z-10">FEATURED</Badge>
        )}
        {course.discount && (
          <Badge className="absolute top-3 right-3 bg-blue-600 z-10">-{course.discount}%</Badge>
        )}
        {course.free && (
          <Badge className="absolute top-3 left-3 bg-green-500 z-10">FREE</Badge>
        )}
        <Image 
          src={course.image || "https://placehold.co/600x400?text=Course"} 
          alt={course.title} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className={`text-xs font-medium mb-2 ${
          course.level === "Beginner" ? "text-blue-500" : 
          course.level === "Intermediate" ? "text-green-500" : "text-red-500"
        }`}>
          {course.level}
        </div>
        <h3 className="font-medium mb-2 line-clamp-2 h-12">{course.title}</h3>
        <div className="text-sm text-gray-500 mb-3">{course.instructor}</div>
        <div className="flex justify-between items-center">
          {course.free ? (
            <div className="font-bold text-lg text-gray-800">Free</div>
          ) : (
            <>
              <div className={`font-bold text-lg ${course.originalPrice ? "text-red-500" : "text-gray-800"}`}>
                ${course.price.toFixed(2)}
              </div>
              {course.originalPrice && (
                <div className="line-through text-sm text-gray-400">${course.originalPrice.toFixed(2)}</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
} 