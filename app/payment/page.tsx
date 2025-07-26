"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Upload, CheckCircle, Smartphone, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("telebirr")
  const [transactionCode, setTransactionCode] = useState("")
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentScreenshot(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the payment verification data to your backend
    console.log("Payment verification submitted:", {
      method: paymentMethod,
      transactionCode,
      screenshot: paymentScreenshot,
    })
    // Redirect to confirmation page
    window.location.href = "/booking-confirmation"
  }

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
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Payment - ክፍያ</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete Your Payment</h1>
          <p className="text-lg text-gray-600">Secure your appointment by completing the payment process below.</p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="telebirr" className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4" />
                <span>Telebirr</span>
              </TabsTrigger>
              <TabsTrigger value="cbe" className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>CBE Bank</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="telebirr">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="mr-2 h-5 w-5 text-orange-600" />
                    Pay with Telebirr
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="font-semibold text-orange-900 mb-4">Payment Instructions:</h3>
                    <div className="space-y-2 text-orange-800">
                      <p>1. Open your Telebirr app</p>
                      <p>2. Select "Send Money" or "Transfer"</p>
                      <p>
                        3. Enter the merchant number: <strong>0911123456</strong>
                      </p>
                      <p>4. Enter the amount based on your selected service</p>
                      <p>5. Complete the transaction</p>
                      <p>6. Take a screenshot of the confirmation</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 inline-block">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Telebirr QR Code"
                        width={200}
                        height={200}
                        className="mx-auto"
                      />
                      <p className="text-sm text-gray-600 mt-2">Scan QR Code with Telebirr</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-center">
                      <strong>Merchant Number:</strong> 0911123456
                      <br />
                      <strong>Merchant Name:</strong> School’s of Intelligence
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cbe">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-2 h-5 w-5 text-blue-600" />
                    Pay with CBE Bank
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-900 mb-4">Payment Instructions:</h3>
                    <div className="space-y-2 text-blue-800">
                      <p>1. Log into your CBE mobile banking app</p>
                      <p>2. Select "Transfer" or "Send Money"</p>
                      <p>
                        3. Enter the account number: <strong>1000123456789</strong>
                      </p>
                      <p>4. Enter the amount based on your selected service</p>
                      <p>5. Add reference: "Mental Health Session"</p>
                      <p>6. Complete the transaction</p>
                      <p>7. Take a screenshot of the confirmation</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-center">
                      <strong>Account Number:</strong> 1000123456789
                      <br />
                      <strong>Account Name:</strong> School’s of Intelligence
                      <br />
                      <strong>Bank:</strong> Commercial Bank of Ethiopia
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Payment Verification Form */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                Verify Your Payment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="transactionCode">Transaction Code/Reference Number *</Label>
                  <Input
                    id="transactionCode"
                    value={transactionCode}
                    onChange={(e) => setTransactionCode(e.target.value)}
                    placeholder="Enter the transaction reference number"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="screenshot">Upload Payment Screenshot *</Label>
                  <div className="mt-2">
                    <Input id="screenshot" type="file" accept="image/*" onChange={handleFileUpload} required />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Please upload a clear screenshot of your payment confirmation
                  </p>
                </div>

                {paymentScreenshot && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-800">Screenshot uploaded: {paymentScreenshot.name}</span>
                    </div>
                  </div>
                )}

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Your appointment will be confirmed once payment is verified. This usually
                    takes 1-2 hours during business hours.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!transactionCode || !paymentScreenshot}
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Submit Payment Verification
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Support Information */}
          <Card className="mt-8 bg-gray-50">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• If you encounter any payment issues, please contact us immediately</p>
                <p>• WhatsApp: +251 911 123 456</p>
                <p>• Email: payment@mindpathethiopia.com</p>
                <p>• Payment verification is usually completed within 1-2 hours</p>
                <p>• You will receive a confirmation SMS/email once verified</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
