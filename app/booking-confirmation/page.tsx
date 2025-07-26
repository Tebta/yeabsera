import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, CheckCircle, Calendar, Clock, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function BookingConfirmationPage() {
  // In a real app, this data would come from the booking process
  const bookingDetails = {
    confirmationNumber: "MP-2024-001",
    clientName: "John Doe",
    service: "Anxiety Therapy",
    date: "January 25, 2024",
    time: "10:00 AM",
    duration: "60 minutes",
    amount: "800 ETB",
    paymentMethod: "Telebirr",
    status: "Payment Verification Pending",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Success Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Booking Submitted Successfully
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Thank You for Your Booking!</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your appointment request has been submitted successfully. We'll verify your payment and confirm your
            appointment within 1-2 hours during business hours.
          </p>
        </div>
      </section>

      {/* Booking Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl text-center text-blue-900">Booking Confirmation Details</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Confirmation Number</h3>
                    <p className="text-lg font-mono bg-gray-100 p-2 rounded">{bookingDetails.confirmationNumber}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Client Name</h3>
                    <p className="text-gray-700">{bookingDetails.clientName}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Service</h3>
                    <p className="text-gray-700">{bookingDetails.service}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
                    <Badge className="bg-yellow-100 text-yellow-800">{bookingDetails.status}</Badge>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Date</h3>
                      <p className="text-gray-700">{bookingDetails.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Time</h3>
                      <p className="text-gray-700">
                        {bookingDetails.time} ({bookingDetails.duration})
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Payment</h3>
                    <p className="text-gray-700">
                      {bookingDetails.amount} via {bookingDetails.paymentMethod}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-blue-900">What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Payment Verification</h3>
                    <p className="text-gray-600">
                      We'll verify your payment within 1-2 hours during business hours (Mon-Fri, 9 AM - 6 PM).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Confirmation Notification</h3>
                    <p className="text-gray-600">
                      You'll receive an SMS and/or email confirmation once your payment is verified and appointment is
                      confirmed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Session Preparation</h3>
                    <p className="text-gray-600">
                      We'll send you preparation guidelines and any necessary forms before your session.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Your Session</h3>
                    <p className="text-gray-600">
                      Arrive 10 minutes early for your appointment. We look forward to supporting your mental health
                      journey!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Need Help or Have Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-600">+251 911 123 456</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-gray-600">+251 911 123 456</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <Mail className="h-8 w-8 text-purple-600" />
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@mindpathethiopia.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Reminders */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-900">Important Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-yellow-800">
                <p>
                  • Please save your confirmation number: <strong>{bookingDetails.confirmationNumber}</strong>
                </p>
                <p>• Cancellations must be made at least 24 hours in advance</p>
                <p>• Sessions can be conducted in English or Amharic based on your preference</p>
                <p>• All information shared during sessions is strictly confidential</p>
                <p>• If you don't receive confirmation within 2 hours, please contact us</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">Read Mental Health Tips</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
