
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, MessageCircle, Book } from "lucide-react";

const Help = () => {
  const faqItems = [
    {
      question: "How do I join a logical room?",
      answer: "Navigate to the Logical Rooms section and browse available rooms by topic or skill level. Click 'Join Room' to participate in discussions."
    },
    {
      question: "Can I create my own hackathon event?",
      answer: "Yes! Use our Event Scheduler to create and manage your own coding events. You can set up registration, add prizes, and manage participants."
    },
    {
      question: "How does the analytics dashboard work?",
      answer: "The dashboard tracks your coding activity, problem-solving progress, and community contributions to provide insights into your learning journey."
    },
    {
      question: "What programming languages are supported?",
      answer: "Our code runners support JavaScript, Python, Java, C++, Go, Rust, and many other popular programming languages."
    }
  ];

  return (
    <div className="min-h-screen font-inter bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Help
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"> Center</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions and get the support you need to succeed.
          </p>
          
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="search"
              placeholder="Search for help..."
              className="pl-12 py-3 text-lg bg-white border-gray-300 focus:border-yellow-500"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still need help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you succeed.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                  Start Chat
                </button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Book className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600 mb-4">Browse our comprehensive guides</p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                  View Docs
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
