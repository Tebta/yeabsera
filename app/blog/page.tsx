import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Brain, Search, Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const categories = [
    "All Posts",
    "Anxiety",
    "Depression",
    "Relationships",
    "Parenting",
    "Self-Care",
    "Addiction",
    "Grief",
    "Children",
    "Mental Health Tips",
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
      titleAmharic: "ጭንቀትን መረዳት፡ ምልክቶች፣ ሰምፕቶሞች እና የመቋቋም ዘዴዎች",
      excerpt:
        "Learn to recognize the early signs of anxiety and discover practical techniques to manage symptoms in daily life.",
      category: "Anxiety",
      date: "2024-01-15",
      author: "Dr. MindPath",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Building Healthy Relationships: Communication Tips for Couples",
      titleAmharic: "ጤናማ ግንኙነት መገንባት፡ ለጥንዶች የግንኙነት ምክሮች",
      excerpt:
        "Discover effective communication strategies that can strengthen your relationship and resolve conflicts constructively.",
      category: "Relationships",
      date: "2024-01-12",
      author: "Dr. MindPath",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Parenting Children with Special Needs: A Guide for Ethiopian Families",
      titleAmharic: "ልዩ ፍላጎት ያላቸውን ልጆች ማሳደግ፡ ለኢትዮጵያ ቤተሰቦች መመሪያ",
      excerpt:
        "Practical advice and resources for parents navigating the challenges of raising children with developmental differences.",
      category: "Parenting",
      date: "2024-01-10",
      author: "Dr. MindPath",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Breaking the Stigma: Mental Health in Ethiopian Culture",
      titleAmharic: "ወሬን መስበር፡ በኢትዮጵያ ባህል ውስጥ የአእምሮ ጤንነት",
      excerpt: "Addressing cultural barriers to mental health care and promoting understanding within our communities.",
      category: "Mental Health Tips",
      date: "2024-01-08",
      author: "Dr. MindPath",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Self-Care Practices for Mental Wellness",
      titleAmharic: "ለአእምሮ ጤንነት የራስ እንክብካቤ ልምዶች",
      excerpt: "Simple daily practices that can significantly improve your mental health and overall well-being.",
      category: "Self-Care",
      date: "2024-01-05",
      author: "Dr. MindPath",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Understanding Depression: When Sadness Becomes Something More",
      titleAmharic: "ድብርትን መረዳት፡ ሀዘን ወደ ሌላ ነገር ሲቀየር",
      excerpt:
        "Learn to distinguish between normal sadness and clinical depression, and when to seek professional help.",
      category: "Depression",
      date: "2024-01-03",
      author: "Dr. MindPath",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

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
              <Link href="/blog" className="text-blue-600 font-medium">
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
      </nav>

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">መግለጫዎች - Blog & Resources</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mental Health
            <span className="text-blue-600"> Education & Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore articles, tips, and resources to support your mental wellness journey. Evidence-based information
            presented in a culturally sensitive way.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Search articles..." className="pl-10 pr-4 py-3 text-lg" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{post.category}</Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <p className="text-sm text-gray-500 font-medium">{post.titleAmharic}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Stay Updated on Mental Health</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles, tips, and resources delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input placeholder="Enter your email" className="bg-white" />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
