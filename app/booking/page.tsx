"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Brain, CalendarIcon, Clock, User, FileText, CreditCard } from "lucide-react"
import Link from "next/link"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedService, setSelectedService] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    issue: "",
  })

  const services = [
    { value: "addiction-therapy", label: "Addiction Therapy", price: "700-1000 ETB" },
    { value: "anxiety-disorder", label: "General Anxiety Disorder", price: "700-900 ETB" },
    { value: "depression", label: "Depression Treatment", price: "700-900 ETB" },
    { value: "grief-therapy", label: "Prolonged Grief Therapy", price: "700-900 ETB" },
    { value: "couple-therapy", label: "Couple Therapy", price: "900-1100 ETB" },
    { value: "marriage-therapy", label: "Marriage Therapy", price: "900-1100 ETB" },
    { value: "learning-disorder", label: "Specific Learning Disorder Support", price: "700-1000 ETB" },
  ]

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    })
    // Redirect to payment page
    window.location.href = "/payment"
  }

  const selectedServiceData = services.find((s) => s.value === selectedService)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MindPath Ethiopia</span>
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
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">ቀጠሮ መያዝ - Book Appointment</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Schedule Your Session</h1>
          <p className="text-lg text-gray-600">
            Take the first step towards better mental health. Choose your preferred service, date, and time.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-600" />
                  Select Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose the service you need" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        <div className="flex justify-between items-center w-full">
                          <span>{service.label}</span>
                          <Badge variant="secondary" className="ml-2">
                            {service.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedServiceData && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>{selectedServiceData.label}</strong> - {selectedServiceData.price}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Date and Time Selection */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5 text-blue-600" />
                    Select Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-600" />
                    Select Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className="justify-center"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-blue-600" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+251 911 123 456"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="issue">Brief Description of Your Concern</Label>
                  <Textarea
                    id="issue"
                    value={formData.issue}
                    onChange={(e) => handleInputChange("issue", e.target.value)}
                    placeholder="Please briefly describe what you'd like to discuss (optional but helpful for preparation)"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Booking Summary */}
            {selectedService && selectedDate && selectedTime && (
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-blue-800">
                    <p>
                      <strong>Service:</strong> {selectedServiceData?.label}
                    </p>
                    <p>
                      <strong>Date:</strong> {selectedDate?.toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Time:</strong> {selectedTime}
                    </p>
                    <p>
                      <strong>Price:</strong> {selectedServiceData?.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                disabled={!selectedService || !selectedDate || !selectedTime || !formData.fullName || !formData.phone}
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Proceed to Payment
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Sessions are conducted in a confidential and professional environment</p>
                <p>• Please arrive 10 minutes early for your first appointment</p>
                <p>• Cancellations must be made at least 24 hours in advance</p>
                <p>• Payment is required before the session begins</p>
                <p>• All sessions are conducted in English or Amharic based on your preference</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
