"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Brain, Users, Calendar, Clock, MapPin, UserPlus, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

interface GroupSession {
  id: number
  title: string
  titleAmharic: string
  description: string
  date: string
  time: string
  duration: string
  location: string
  maxParticipants: number
  currentParticipants: number
  price: string
  facilitator: string
  category: string
  requirements: string[]
  benefits: string[]
  status: "upcoming" | "registration-open" | "full" | "completed"
}

export default function AnnouncementsPage() {
  const [timeLeft, setTimeLeft] = useState<{
    [key: number]: { days: number; hours: number; minutes: number; seconds: number }
  }>({})
  const [registrationForm, setRegistrationForm] = useState({
    sessionId: null as number | null,
    fullName: "",
    phone: "",
    email: "",
    experience: "",
    expectations: "",
  })
  const [showRegistrationForm, setShowRegistrationForm] = useState(false)

  const groupSessions: GroupSession[] = [
    {
      id: 1,
      title: "Anxiety Support Group",
      titleAmharic: "የጭንቀት ድጋፍ ቡድን",
      description:
        "A safe space to share experiences, learn coping strategies, and connect with others who understand your journey with anxiety.",
      date: "2024-02-15",
      time: "10:00 AM",
      duration: "2 hours",
      location: "School’s of Intelligence Office, Bole",
      maxParticipants: 12,
      currentParticipants: 8,
      price: "500 ETB",
      facilitator: "Dr. MindPath",
      category: "Anxiety",
      requirements: [
        "Must be 18 years or older",
        "Commitment to attend all sessions",
        "Respect for group confidentiality",
      ],
      benefits: [
        "Learn practical anxiety management techniques",
        "Connect with others facing similar challenges",
        "Receive professional guidance in a group setting",
        "Access to follow-up resources",
      ],
      status: "registration-open",
    },
    {
      id: 2,
      title: "Grief and Loss Support Circle",
      titleAmharic: "የሀዘንና የኪሳራ ድጋፍ ክበብ",
      description:
        "A compassionate group for those navigating the complex journey of grief and loss, providing mutual support and healing.",
      date: "2024-02-20",
      time: "2:00 PM",
      duration: "2.5 hours",
      location: "School’s of Intelligence Office, Bole",
      maxParticipants: 10,
      currentParticipants: 6,
      price: "600 ETB",
      facilitator: "Dr. MindPath",
      category: "Grief",
      requirements: [
        "Currently experiencing grief or loss",
        "Willingness to share in a supportive environment",
        "Commitment to group guidelines",
      ],
      benefits: [
        "Process grief in a supportive community",
        "Learn healthy coping mechanisms",
        "Honor your loved one's memory",
        "Find hope and meaning after loss",
      ],
      status: "registration-open",
    },
    {
      id: 3,
      title: "Mindfulness and Stress Reduction Workshop",
      titleAmharic: "የአእምሮ ጤንነትና የጭንቀት መቀነስ ወርክሾፕ",
      description:
        "Learn evidence-based mindfulness techniques to reduce stress, improve focus, and enhance overall well-being.",
      date: "2024-03-05",
      time: "9:00 AM",
      duration: "4 hours",
      location: "School’s of Intelligence Office, Bole",
      maxParticipants: 15,
      currentParticipants: 12,
      price: "800 ETB",
      facilitator: "Dr. MindPath",
      category: "Mindfulness",
      requirements: [
        "No prior meditation experience needed",
        "Comfortable clothing recommended",
        "Bring a notebook for exercises",
      ],
      benefits: [
        "Learn practical mindfulness techniques",
        "Reduce stress and anxiety levels",
        "Improve focus and concentration",
        "Take-home practice materials",
      ],
      status: "registration-open",
    },
  ]

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const newTimeLeft: { [key: number]: { days: number; hours: number; minutes: number; seconds: number } } = {}

      groupSessions.forEach((session) => {
        const sessionDate = new Date(`${session.date} ${session.time}`).getTime()
        const distance = sessionDate - now

        if (distance > 0) {
          newTimeLeft[session.id] = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          }
        }
      })

      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRegistration = (sessionId: number) => {
    setRegistrationForm({ ...registrationForm, sessionId })
    setShowRegistrationForm(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setRegistrationForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the registration data to your backend
    console.log("Group session registration:", registrationForm)
    alert("Registration submitted successfully! We'll contact you with payment details.")
    setShowRegistrationForm(false)
    setRegistrationForm({
      sessionId: null,
      fullName: "",
      phone: "",
      email: "",
      experience: "",
      expectations: "",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "registration-open":
        return "bg-green-100 text-green-800"
      case "full":
        return "bg-red-100 text-red-800"
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "registration-open":
        return "Registration Open"
      case "full":
        return "Fully Booked"
      case "upcoming":
        return "Coming Soon"
      case "completed":
        return "Completed"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
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
              <Link href="/announcements" className="text-purple-600 font-medium">
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
      </nav>

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
            Group Sessions - የቡድን ክፍለ ጊዜዎች
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our
            <span className="text-purple-600"> Group Sessions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with others on similar journeys, learn together, and grow in a supportive community environment. Our
            group sessions offer professional guidance at an affordable cost.
          </p>
        </div>
      </section>

      {/* Group Sessions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-8">
            {groupSessions.map((session) => (
              <Card key={session.id} className="shadow-xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Users className="h-6 w-6 text-purple-600" />
                        <Badge className={getStatusColor(session.status)}>{getStatusText(session.status)}</Badge>
                        <Badge variant="secondary">{session.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">{session.title}</CardTitle>
                      <p className="text-purple-700 font-medium">{session.titleAmharic}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 text-right">
                      <div className="text-2xl font-bold text-purple-600">{session.price}</div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Session Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">{session.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Calendar className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium text-gray-900">Date & Time</p>
                              <p className="text-gray-600">
                                {new Date(session.date).toLocaleDateString()} at {session.time}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <Clock className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="font-medium text-gray-900">Duration</p>
                              <p className="text-gray-600">{session.duration}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <MapPin className="h-5 w-5 text-red-600" />
                            <div>
                              <p className="font-medium text-gray-900">Location</p>
                              <p className="text-gray-600">{session.location}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="font-medium text-gray-900 mb-2">Participants</p>
                            <div className="flex items-center space-x-2">
                              <div className="bg-gray-200 rounded-full h-2 flex-1">
                                <div
                                  className="bg-purple-600 h-2 rounded-full"
                                  style={{
                                    width: `${(session.currentParticipants / session.maxParticipants) * 100}%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600">
                                {session.currentParticipants}/{session.maxParticipants}
                              </span>
                            </div>
                          </div>

                          <div>
                            <p className="font-medium text-gray-900 mb-2">Facilitator</p>
                            <p className="text-gray-600">{session.facilitator}</p>
                          </div>
                        </div>
                      </div>

                      {/* Requirements and Benefits */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-2 text-orange-600" />
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {session.requirements.map((req, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start">
                                <span className="text-orange-600 mr-2">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {session.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-start">
                                <span className="text-green-600 mr-2">•</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Countdown and Registration */}
                    <div className="space-y-6">
                      {/* Countdown Timer */}
                      {timeLeft[session.id] && (
                        <Card className="bg-gradient-to-br from-purple-100 to-blue-100 border-purple-200">
                          <CardContent className="p-6 text-center">
                            <h4 className="font-bold text-purple-900 mb-4">Session Starts In:</h4>
                            <div className="grid grid-cols-2 gap-2 text-center">
                              <div className="bg-white rounded-lg p-3">
                                <div className="text-2xl font-bold text-purple-600">{timeLeft[session.id].days}</div>
                                <div className="text-xs text-gray-600">Days</div>
                              </div>
                              <div className="bg-white rounded-lg p-3">
                                <div className="text-2xl font-bold text-purple-600">{timeLeft[session.id].hours}</div>
                                <div className="text-xs text-gray-600">Hours</div>
                              </div>
                              <div className="bg-white rounded-lg p-3">
                                <div className="text-2xl font-bold text-purple-600">{timeLeft[session.id].minutes}</div>
                                <div className="text-xs text-gray-600">Minutes</div>
                              </div>
                              <div className="bg-white rounded-lg p-3">
                                <div className="text-2xl font-bold text-purple-600">{timeLeft[session.id].seconds}</div>
                                <div className="text-xs text-gray-600">Seconds</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Registration Button */}
                      <div className="text-center">
                        {session.status === "registration-open" &&
                        session.currentParticipants < session.maxParticipants ? (
                          <Button
                            size="lg"
                            className="w-full bg-purple-600 hover:bg-purple-700"
                            onClick={() => handleRegistration(session.id)}
                          >
                            <UserPlus className="mr-2 h-5 w-5" />
                            Register Now
                          </Button>
                        ) : session.currentParticipants >= session.maxParticipants ? (
                          <Button size="lg" className="w-full" disabled>
                            Session Full
                          </Button>
                        ) : (
                          <Button size="lg" className="w-full" disabled>
                            Registration Closed
                          </Button>
                        )}

                        <p className="text-xs text-gray-500 mt-2">Limited spots available • First come, first served</p>
                      </div>

                      {/* Contact for Questions */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Questions?</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Contact us for more information about this session.
                        </p>
                        <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                          <Link href="/contact">Ask Questions</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Register for Group Session</span>
                <Button variant="outline" size="sm" onClick={() => setShowRegistrationForm(false)}>
                  ✕
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitRegistration} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={registrationForm.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={registrationForm.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+251 911 123 456"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={registrationForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Previous Group Therapy Experience</Label>
                  <Textarea
                    id="experience"
                    value={registrationForm.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder="Briefly describe any previous group therapy experience (optional)"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="expectations">What do you hope to gain from this session?</Label>
                  <Textarea
                    id="expectations"
                    value={registrationForm.expectations}
                    onChange={(e) => handleInputChange("expectations", e.target.value)}
                    placeholder="Share your goals and expectations for this group session"
                    rows={3}
                    required
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Registration is not complete until payment is received. We'll contact you
                    within 24 hours with payment instructions and session details.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowRegistrationForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    disabled={!registrationForm.fullName || !registrationForm.phone || !registrationForm.expectations}
                  >
                    Submit Registration
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Information Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Join Our Group Sessions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600 text-sm">
                Connect with others who understand your journey and build lasting supportive relationships.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Professional Guidance</h3>
              <p className="text-gray-600 text-sm">
                Benefit from expert facilitation and evidence-based therapeutic approaches in a group setting.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Affordable Care</h3>
              <p className="text-gray-600 text-sm">
                Access quality mental health support at a fraction of the cost of individual therapy sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
