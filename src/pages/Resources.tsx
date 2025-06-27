
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Video, FileText, Users, Code, Lightbulb } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: Book,
      title: "Learning Guides",
      description: "Comprehensive tutorials and step-by-step guides for all skill levels.",
      items: ["JavaScript Fundamentals", "React Development", "Python Programming", "Data Structures"]
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch expert-led coding sessions and project walkthroughs.",
      items: ["Live Coding Sessions", "Project Builds", "Code Reviews", "Career Advice"]
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Detailed documentation for popular frameworks and libraries.",
      items: ["API References", "Framework Guides", "Best Practices", "Code Standards"]
    },
    {
      icon: Users,
      title: "Community Resources",
      description: "Connect with mentors and join study groups.",
      items: ["Mentor Network", "Study Groups", "Peer Reviews", "Career Guidance"]
    },
    {
      icon: Code,
      title: "Code Examples",
      description: "Real-world project examples and code snippets.",
      items: ["Sample Projects", "Code Templates", "Algorithm Solutions", "Design Patterns"]
    },
    {
      icon: Lightbulb,
      title: "Tips & Tricks",
      description: "Productivity tips and development shortcuts.",
      items: ["IDE Setup", "Git Workflows", "Debugging Tips", "Performance Optimization"]
    }
  ];

  return (
    <div className="min-h-screen font-inter bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Learning
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Access a comprehensive library of tutorials, guides, and tools to accelerate your coding journey.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            Explore Resources
          </Button>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                    <category.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-1 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full">
                    Browse {category.title}
                  </Button>
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

export default Resources;
