"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Brain,
  Calendar,
  FileText,
  Settings,
  CheckCircle,
  Clock,
  Edit,
  Trash2,
  Plus,
  Eye,
  DollarSign,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("appointments")

  // Mock data - in real app, this would come from your backend
  const appointments = [
    {
      id: 1,
      clientName: "Sarah Mengistu",
      service: "Anxiety Therapy",
      date: "2024-01-20",
      time: "10:00 AM",
      status: "confirmed",
      paymentStatus: "verified",
      phone: "+251 911 123 456",
      amount: "800 ETB",
    },
    {
      id: 2,
      clientName: "Daniel Kebede",
      service: "Couple Therapy",
      date: "2024-01-20",
      time: "2:00 PM",
      status: "pending",
      paymentStatus: "pending",
      phone: "+251 912 345 678",
      amount: "1000 ETB",
    },
    {
      id: 3,
      clientName: "Meron Tadesse",
      service: "Depression Treatment",
      date: "2024-01-21",
      time: "11:00 AM",
      status: "confirmed",
      paymentStatus: "verified",
      phone: "+251 913 456 789",
      amount: "750 ETB",
    },
  ]

  const services = [
    { id: 1, name: "Addiction Therapy", price: "700-1000", duration: "60 min" },
    { id: 2, name: "Anxiety Disorder", price: "700-900", duration: "60 min" },
    { id: 3, name: "Depression Treatment", price: "700-900", duration: "60 min" },
    { id: 4, name: "Couple Therapy", price: "900-1100", duration: "75 min" },
    { id: 5, name: "Marriage Therapy", price: "900-1100", duration: "75 min" },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Anxiety: Signs and Symptoms",
      status: "published",
      date: "2024-01-15",
      views: 245,
    },
    {
      id: 2,
      title: "Building Healthy Relationships",
      status: "draft",
      date: "2024-01-18",
      views: 0,
    },
  ]

  const stats = {
    totalAppointments: 156,
    thisWeekAppointments: 12,
    verifiedPayments: 142,
    pendingPayments: 14,
    totalRevenue: "125,400 ETB",
    thisMonthRevenue: "28,750 ETB",
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Admin Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                View Website
              </Button>
              <Button size="sm">Logout</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Appointments</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalAppointments}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Week</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.thisWeekAppointments}</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Verified Payments</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.verifiedPayments}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue}</p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Appointment Management
                  </span>
                  <div className="flex space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Client</th>
                        <th className="text-left py-3 px-4">Service</th>
                        <th className="text-left py-3 px-4">Date & Time</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Payment</th>
                        <th className="text-left py-3 px-4">Amount</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{appointment.clientName}</p>
                              <p className="text-sm text-gray-500">{appointment.phone}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">{appointment.service}</td>
                          <td className="py-3 px-4">
                            <div>
                              <p>{appointment.date}</p>
                              <p className="text-sm text-gray-500">{appointment.time}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getPaymentStatusColor(appointment.paymentStatus)}>
                              {appointment.paymentStatus}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 font-medium">{appointment.amount}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              {appointment.paymentStatus === "pending" && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Service Management
                  </span>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Service
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-gray-500">Duration: {service.duration}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary">{service.price} ETB</Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Blog Management
                  </span>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Post
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{post.title}</h3>
                        <p className="text-sm text-gray-500">
                          {post.date} • {post.views} views
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge
                          className={
                            post.status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {post.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="telebirr">Telebirr Number</Label>
                    <Input id="telebirr" defaultValue="0911123456" />
                  </div>
                  <div>
                    <Label htmlFor="cbe">CBE Account Number</Label>
                    <Input id="cbe" defaultValue="1000123456789" />
                  </div>
                  <Button>Update Payment Info</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+251 911 123 456" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" defaultValue="info@mindpathethiopia.com" />
                  </div>
                  <div>
                    <Label htmlFor="address">Office Address</Label>
                    <Textarea id="address" defaultValue="Addis Ababa, Ethiopia" />
                  </div>
                  <Button>Update Contact Info</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
