'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Heart, Users, Shield, Star, Calendar, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ImagesSliderDemo } from "@/components/hero"
import Navbar from "@/components/nav"

export default function HomePage() {

    const titleRef = useRef<HTMLHeadingElement>(null);
  
    useEffect(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    }, []);
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Addiction Therapy",
      description: "Professional support for alcohol, chat, or masturbation addiction",
      price: "700-1000 ETB/hour",
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Anxiety & Depression",
      description: "Evidence-based treatment for anxiety disorders and depression",
      price: "700-900 ETB/hour",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Couple & Marriage Therapy",
      description: "Strengthen relationships through communication and trust building",
      price: "900-1100 ETB/hour",
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "Grief Counseling",
      description: "Support for prolonged grief and loss recovery",
      price: "700-900 ETB/hour",
    },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The counseling sessions helped me overcome my anxiety. I feel more confident and at peace.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      text: "Professional, caring, and culturally sensitive approach. Highly recommended.",
      rating: 5,
    },
    {
      name: "Meron T.",
      text: "The couple therapy sessions saved our marriage. We learned to communicate better.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      {/* <nav className="bg-transparent sticky top-0 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">School’s of Intelligence</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/announcements" className="text-gray-700 hover:text-blue-600 transition-colors">
                Announcements
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button asChild>
                <Link href="/booking">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav> */}
      <Navbar />

      {/* Hero Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Professional Mental Health Support
              </Badge>
              <h1 ref={titleRef} className="text-4xl font-bold lg:text-6xl font-bold text-gray-900 mb-6">
                Your Mental Health Matters.
                <span className="text-blue-600"> Healing Begins Here.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional psychological support tailored to your needs, rooted in science and cultural sensitivity.
                Experience compassionate care that honors both evidence-based practices and Ethiopian values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Professional Psychologist"
                  width={400}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <ImagesSliderDemo />

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Services Offered</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health support designed to meet your unique needs with culturally sensitive care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from people who found healing and hope.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards better mental health. Book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/booking" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">School’s of Intelligence</span>
              </div>
              <p className="text-gray-400">
                Professional mental health support rooted in science and cultural sensitivity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="/booking" className="block text-gray-400 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <p>Addiction Therapy</p>
                <p>Anxiety & Depression</p>
                <p>Couple Therapy</p>
                <p>Grief Counseling</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+251 911 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@mindpathethiopia.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 School’s of Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
