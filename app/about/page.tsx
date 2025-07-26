import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, GraduationCap, Users, Heart, Award, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const qualifications = [
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: "Master's in Counseling Psychology",
      description: "Advanced training in evidence-based therapeutic approaches",
    },
    {
      icon: <Heart className="h-6 w-6 text-green-600" />,
      title: "Bachelor's in Public Health",
      description: "Foundation in community health and wellness promotion",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "6+ Years Experience",
      description: "Extensive work across health and mental health sectors in Ethiopia",
    },
    {
      icon: <Award className="h-6 w-6 text-teal-600" />,
      title: "Special Needs Team Leader",
      description: "Leading support for children with emotional and developmental challenges",
    },
  ]

  const specializations = [
    "Trauma Recovery",
    "Anxiety Disorders",
    "Depression Treatment",
    "Grief Counseling",
    "Self-Esteem Building",
    "Relationship Therapy",
    "Addiction Recovery",
    "Child Psychology",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm border-b">
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
              <Link href="/about" className="text-blue-600 font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">ስለእኔ - About Me</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                YE'ABSERA YOHANNIS
                {/* <span className="text-blue-600"> Partner</span> */}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As a mental health professional with a Master's degree in Counseling Psychology and a Bachelor's in
                Public Health, I bring over six years of experience working across the health and mental health sectors
                in Ethiopia.
              </p>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Session
                </Link>
              </Button>
            </div>
            <div className="relative">
              {/* <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8"> */}
                <Image
                  src="/images/psychologist-headshot.jpg"
                  alt="Professional Psychologist"
                  width={800}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Qualifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining academic excellence with practical experience to provide the highest quality mental health care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{qual.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{qual.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{qual.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">ራዕይና ሐሳቤ - Mission & Philosophy</h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-8">"Healing Begins With Understanding"</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              My mission is to make mental health support more accessible, relatable, and empowering — while honoring
              both science and our shared cultural values.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I believe in meeting people where they are and guiding them toward clarity, healing, and growth. Whether
              you're a parent, a struggling student, or a couple seeking support — I'm here to walk with you.
            </p>
            <p className="text-xl font-semibold text-blue-600">
              Healing happens through trust, truth, and togetherness.
            </p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Areas of Specialization</h2>
            <p className="text-xl text-gray-600">Comprehensive support across various mental health challenges</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4 text-center">
                <span className="font-medium text-gray-800">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Making Mental Health Accessible</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Through platforms like TikTok and YouTube, I've spent the past four years educating and supporting
                  thousands — breaking stigma and making mental health support more relatable and accessible.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently, I also lead a Special Needs team, working closely with children who face emotional and
                  developmental challenges, bringing specialized care to those who need it most.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                  <div className="text-gray-700 mb-4">Years of Digital Outreach</div>
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-gray-700">People Supported Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Healing Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to build a healthier, happier you. Your mental wellness matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/booking" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your First Session
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
