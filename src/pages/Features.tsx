
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart3, Bot, Calendar, Users, Code, MessageCircle, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Logical Rooms",
      description: "Dedicated spaces for structured problem-solving and peer collaboration on coding challenges.",
      details: "Join topic-specific rooms where you can discuss algorithms, data structures, and complex programming concepts with peers."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your coding progress, skill development, and contribution to the community over time.",
      details: "Visualize your learning journey with detailed metrics on problem-solving, collaboration, and skill growth."
    },
    {
      icon: Bot,
      title: "Bots & Code Runners",
      description: "AI-powered assistants and integrated code execution environments for instant feedback.",
      details: "Test your code in real-time with our integrated runners and get help from AI assistants when you're stuck."
    },
    {
      icon: Calendar,
      title: "Event Scheduler",
      description: "Organize hackathons, study sessions, and coding meetups with seamless calendar integration.",
      details: "Never miss important coding events and easily schedule study sessions with your peers."
    },
    {
      icon: Users,
      title: "Team Formation",
      description: "Find teammates for projects and hackathons based on skills and interests.",
      details: "Connect with like-minded developers and form teams for collaborative projects and competitions."
    },
    {
      icon: Code,
      title: "Code Review",
      description: "Get feedback on your code from experienced developers and mentors.",
      details: "Improve your coding skills with constructive feedback and learn best practices from the community."
    },
    {
      icon: MessageCircle,
      title: "Discussion Forums",
      description: "Engage in meaningful conversations about programming topics and career advice.",
      details: "Share knowledge, ask questions, and participate in discussions that help advance your coding career."
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Stay updated with real-time notifications about discussions and events.",
      details: "Never miss important updates, replies to your questions, or upcoming events in your learning journey."
    }
  ];

  return (
    <div className="min-h-screen font-inter bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Student Coders</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to learn, collaborate, and grow as a developer in one comprehensive platform.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {feature.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {feature.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
