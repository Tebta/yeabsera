import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Calendar, User, Clock, ArrowLeft, Share2, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock blog post data - in real app, this would come from your database
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: 1,
      title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
      titleAmharic: "ጭንቀትን መረዳት፡ ምልክቶች፣ ሰምፕቶሞች እና የመቋቋም ዘዴዎች",
      content: `
        <p>Anxiety is one of the most common mental health challenges affecting millions of people worldwide, including here in Ethiopia. As a mental health professional, I've seen firsthand how anxiety can impact every aspect of a person's life - from their relationships and work performance to their physical health and overall well-being.</p>

        <h2>What is Anxiety?</h2>
        <p>Anxiety is a natural human response to stress or perceived threats. It's our body's way of preparing us to face danger - what psychologists call the "fight or flight" response. However, when anxiety becomes persistent, overwhelming, or interferes with daily activities, it may indicate an anxiety disorder.</p>

        <p>In Ethiopian culture, anxiety is sometimes misunderstood or stigmatized. People might say "ይህ ይሻላል" (this will get better) or suggest that prayer alone will solve the problem. While faith and community support are incredibly important, professional help can provide additional tools and strategies for managing anxiety effectively.</p>

        <h2>Common Signs and Symptoms</h2>
        <p>Anxiety manifests differently in each person, but common symptoms include:</p>
        
        <h3>Physical Symptoms:</h3>
        <ul>
          <li>Rapid heartbeat or palpitations</li>
          <li>Sweating or trembling</li>
          <li>Shortness of breath</li>
          <li>Muscle tension</li>
          <li>Headaches or dizziness</li>
          <li>Stomach problems or nausea</li>
        </ul>

        <h3>Emotional Symptoms:</h3>
        <ul>
          <li>Persistent worry or fear</li>
          <li>Feeling restless or on edge</li>
          <li>Irritability</li>
          <li>Difficulty concentrating</li>
          <li>Fear of losing control</li>
        </ul>

        <h3>Behavioral Symptoms:</h3>
        <ul>
          <li>Avoiding certain situations or places</li>
          <li>Difficulty sleeping</li>
          <li>Procrastination</li>
          <li>Seeking constant reassurance</li>
          <li>Compulsive behaviors</li>
        </ul>

        <h2>Coping Strategies That Work</h2>
        <p>The good news is that anxiety is highly treatable. Here are some evidence-based strategies that can help:</p>

        <h3>1. Deep Breathing Exercises</h3>
        <p>When anxiety strikes, our breathing often becomes shallow and rapid. Practice deep, slow breathing:</p>
        <ul>
          <li>Breathe in slowly through your nose for 4 counts</li>
          <li>Hold your breath for 4 counts</li>
          <li>Exhale slowly through your mouth for 6 counts</li>
          <li>Repeat this cycle 5-10 times</li>
        </ul>

        <h3>2. Grounding Techniques</h3>
        <p>The 5-4-3-2-1 technique can help bring you back to the present moment:</p>
        <ul>
          <li>5 things you can see</li>
          <li>4 things you can touch</li>
          <li>3 things you can hear</li>
          <li>2 things you can smell</li>
          <li>1 thing you can taste</li>
        </ul>

        <h3>3. Challenge Negative Thoughts</h3>
        <p>Anxiety often involves catastrophic thinking. Ask yourself:</p>
        <ul>
          <li>Is this thought realistic?</li>
          <li>What evidence do I have for and against this thought?</li>
          <li>What would I tell a friend in this situation?</li>
          <li>What's the worst that could realistically happen?</li>
        </ul>

        <h3>4. Lifestyle Changes</h3>
        <ul>
          <li><strong>Regular Exercise:</strong> Physical activity releases endorphins and reduces stress hormones</li>
          <li><strong>Healthy Sleep:</strong> Aim for 7-9 hours of quality sleep each night</li>
          <li><strong>Limit Caffeine:</strong> Too much coffee or tea can worsen anxiety symptoms</li>
          <li><strong>Balanced Diet:</strong> Eat regular, nutritious meals to maintain stable blood sugar</li>
        </ul>

        <h2>When to Seek Professional Help</h2>
        <p>While self-help strategies are valuable, professional support may be necessary if:</p>
        <ul>
          <li>Anxiety interferes with work, school, or relationships</li>
          <li>You avoid important activities due to anxiety</li>
          <li>Physical symptoms are severe or persistent</li>
          <li>You're using alcohol or substances to cope</li>
          <li>You have thoughts of self-harm</li>
        </ul>

        <h2>Cultural Considerations in Ethiopia</h2>
        <p>In our Ethiopian context, it's important to recognize that seeking help for mental health is a sign of strength, not weakness. Just as we would see a doctor for a physical ailment, caring for our mental health is equally important.</p>

        <p>Many of our traditional practices can complement professional treatment:</p>
        <ul>
          <li><strong>Community Support:</strong> Lean on family and friends</li>
          <li><strong>Spiritual Practices:</strong> Prayer and meditation can provide comfort</li>
          <li><strong>Cultural Rituals:</strong> Coffee ceremonies and community gatherings can reduce isolation</li>
        </ul>

        <h2>Moving Forward</h2>
        <p>Remember, overcoming anxiety is a journey, not a destination. Be patient with yourself and celebrate small victories. With the right combination of self-care strategies, professional support, and community backing, you can learn to manage anxiety effectively and live a fulfilling life.</p>

        <p>If you're struggling with anxiety, know that you're not alone. Help is available, and recovery is possible. Take that first step - your mental health matters.</p>
      `,
      excerpt:
        "Learn to recognize the early signs of anxiety and discover practical techniques to manage symptoms in daily life.",
      category: "Anxiety",
      date: "2024-01-15",
      author: "Dr. MindPath",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=800&text=Understanding+Anxiety",
      tags: ["Anxiety", "Mental Health", "Coping Strategies", "Self-Care"],
    },
    // Add more blog posts here
  }

  return posts[id as keyof typeof posts] || null
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Button asChild>
            <Link href="/blog">Return to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

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
      </nav> */}

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button variant="outline" asChild>
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <header className="mb-8">
          <div className="mb-4">
            <Badge className="bg-blue-100 text-blue-800">{post.category}</Badge>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>

          <p className="text-lg text-gray-600 mb-6 font-medium">{post.titleAmharic}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Share Buttons */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Share this article:</span>
              <Button size="sm" variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-700 leading-relaxed space-y-6" />
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-2xl">
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Professional Support?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you're struggling with anxiety or other mental health challenges, professional help is available. Book
              a confidential session to start your healing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Ask Questions First</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Share Your Thoughts</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Your experiences and insights can help others on their mental health journey. Feel free to share your
                thoughts or questions about this article.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-gray-500 mb-4">
                  Comments are moderated to ensure a safe and supportive environment for all readers.
                </p>
                <Button variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Leave a Comment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mock related articles */}
            {[
              {
                title: "Managing Depression: A Comprehensive Guide",
                excerpt: "Understanding depression and practical steps for recovery...",
                category: "Depression",
                readTime: "6 min read",
              },
              {
                title: "Building Resilience in Difficult Times",
                excerpt: "Develop mental strength and bounce back from challenges...",
                category: "Self-Care",
                readTime: "5 min read",
              },
              {
                title: "The Power of Mindfulness in Mental Health",
                excerpt: "How mindfulness practices can transform your well-being...",
                category: "Mental Health Tips",
                readTime: "7 min read",
              },
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-purple-100 text-purple-800">{article.category}</Badge>
                  <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${index + 2}`}>{article.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/blog/${index + 2}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
