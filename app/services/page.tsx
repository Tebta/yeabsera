import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Heart, Users, Shield, Baby, Zap, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "Addiction Therapy",
      titleAmharic: "የሱስ ሕክምና",
      description:
        "Professional support for alcohol, chat (khat), or masturbation addiction with evidence-based treatment approaches.",
      price: "700-1000",
      duration: "60 minutes",
      features: [
        "Individual counseling sessions",
        "Relapse prevention strategies",
        "Family support guidance",
        "Coping mechanism development",
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "General Anxiety Disorder",
      titleAmharic: "የጭንቀት መታወክ",
      description: "Comprehensive treatment for managing persistent worry, fear, restlessness, and panic symptoms.",
      price: "700-900",
      duration: "60 minutes",
      features: [
        "Cognitive behavioral therapy",
        "Relaxation techniques",
        "Mindfulness training",
        "Lifestyle modification guidance",
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Depression Treatment",
      titleAmharic: "የመንፈስ ጭንቀት ሕክምና",
      description: "Evidence-based therapy for coping with low mood, hopelessness, fatigue, and loss of interest.",
      price: "700-900",
      duration: "60 minutes",
      features: [
        "Individual therapy sessions",
        "Mood tracking and management",
        "Behavioral activation",
        "Support system building",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Prolonged Grief Therapy",
      titleAmharic: "የሐዘን ምክር",
      description: "Specialized support for deep and long-lasting grief, helping process loss and find meaning.",
      price: "700-900",
      duration: "60 minutes",
      features: [
        "Grief processing techniques",
        "Memory work and meaning-making",
        "Emotional regulation support",
        "Gradual re-engagement planning",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-pink-600" />,
      title: "Couple Therapy",
      titleAmharic: "የጥንዶች ምክር",
      description: "Improve communication, rebuild trust, and resolve conflicts in romantic relationships.",
      price: "900-1100",
      duration: "75 minutes",
      features: [
        "Communication skills training",
        "Conflict resolution strategies",
        "Trust rebuilding exercises",
        "Intimacy enhancement",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Marriage Therapy",
      titleAmharic: "የጋብቻ ምክር",
      description: "Comprehensive support for strengthening or repairing marital bonds and family dynamics.",
      price: "900-1100",
      duration: "75 minutes",
      features: [
        "Marital assessment",
        "Family dynamics improvement",
        "Long-term relationship planning",
        "Cultural sensitivity integration",
      ],
    },
    {
      icon: <Baby className="h-8 w-8 text-orange-600" />,
      title: "Specific Learning Disorder Support",
      titleAmharic: "የልዩ ትምህርት ድጋፍ",
      description: "Specialized support for children with unique learning needs and developmental challenges.",
      price: "700-1000",
      duration: "60 minutes",
      features: [
        "Learning assessment",
        "Educational planning",
        "Parent guidance and training",
        "School collaboration support",
      ],
    },
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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-blue-600 font-medium">
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">አገልግሎቶች - Professional Services</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Mental Health
            <span className="text-blue-600"> Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Evidence-based therapeutic approaches tailored to your unique needs, delivered with cultural sensitivity and
            professional expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <div>
                        <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                        <p className="text-sm text-gray-500 mt-1">{service.titleAmharic}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{service.price} ETB/hour</Badge>
                      <p className="text-xs text-gray-500 mt-1">{service.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Button className="w-full" asChild>
                      <Link href={`/booking?service=${encodeURIComponent(service.title)}`}>
                        <Calendar className="mr-2 h-4 w-4" />
                        Book {service.title}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Payment Options</h3>
            <p className="text-lg text-gray-600 mb-6">
              All sessions can be paid through Telebirr or Commercial Bank of Ethiopia (CBE). Prices may vary based on
              session complexity and individual needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Individual Sessions</h4>
                <p className="text-blue-700">700-1000 ETB per hour</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Couple/Marriage Sessions</h4>
                <p className="text-purple-700">900-1100 ETB per session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose the service that best fits your needs and take the first step towards better mental health.
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
              <Link href="/contact">Ask Questions First</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
