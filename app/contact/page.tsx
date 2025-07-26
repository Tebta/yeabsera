"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Brain, Phone, Mail, MapPin, Clock, MessageCircle, Send, Youtube, Music } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the contact form data to your backend
    console.log("Contact form submitted:", formData)
    // Show success message or redirect
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      details: ["+251 911 123 456", "+251 912 345 678"],
      description: "Available Mon-Fri, 9 AM - 6 PM",
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "Email",
      details: ["info@mindpathethiopia.com", "appointments@mindpathethiopia.com"],
      description: "We respond within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: "Location",
      details: ["Addis Ababa, Ethiopia", "Bole Sub-City"],
      description: "In-person sessions available",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-teal-600" />,
      title: "WhatsApp",
      details: ["+251 911 123 456"],
      description: "Quick responses during business hours",
    },
  ]

  const socialMedia = [
    {
      platform: "TikTok",
      icon: <Music className="h-5 w-5" />,
      handle: "@mindpathethiopia",
      url: "https://tiktok.com/@mindpathethiopia",
      description: "Mental health tips and education",
      color: "bg-black text-white",
    },
    {
      platform: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      handle: "School’s of Intelligence",
      url: "https://youtube.com/@mindpathethiopia",
      description: "In-depth mental health discussions",
      color: "bg-red-600 text-white",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency", hours: "24/7 WhatsApp Support" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
              <Link href="/announcements" className="text-gray-700 hover:text-blue-600 transition-colors">
                Announcements
              </Link>
              <Link href="/contact" className="text-blue-600 font-medium">
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
          <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">Contact Us - ያግኙን</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Have questions about our services? Ready to start your mental health journey? We're here to help and support
            you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{info.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+251 911 123 456"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours & Social Media */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle>Follow Us Online</CardTitle>
                  <p className="text-gray-600">Stay connected for mental health tips and updates</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {socialMedia.map((social, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className={`p-2 rounded-lg ${social.color}`}>{social.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{social.platform}</h4>
                          <p className="text-sm text-gray-600">{social.handle}</p>
                          <p className="text-xs text-gray-500">{social.description}</p>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={social.url} target="_blank">
                            Follow
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-xl border-0 bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900">Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-800 mb-4">
                    If you're experiencing a mental health emergency or having thoughts of self-harm, please reach out
                    immediately:
                  </p>
                  <div className="space-y-2 text-red-700">
                    <p>
                      <strong>Crisis WhatsApp:</strong> +251 911 123 456
                    </p>
                    <p>
                      <strong>Emergency Hotline:</strong> 911
                    </p>
                    <p>
                      <strong>Nearest Hospital:</strong> Contact local emergency services
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How do I book an appointment?</h3>
                <p className="text-gray-600">
                  You can book online through our booking system, call us directly, or send a WhatsApp message. Payment
                  is required to confirm your appointment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you offer sessions in Amharic?</h3>
                <p className="text-gray-600">
                  Yes, all sessions can be conducted in either English or Amharic based on your preference and comfort
                  level.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept payments through Telebirr and Commercial Bank of Ethiopia (CBE). Payment verification is
                  required before your session.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Is my information confidential?</h3>
                <p className="text-gray-600">
                  Absolutely. All sessions and personal information are kept strictly confidential in accordance with
                  professional ethics and privacy standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
