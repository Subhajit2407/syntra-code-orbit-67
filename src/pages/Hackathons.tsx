
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, Clock } from "lucide-react";

const Hackathons = () => {
  const upcomingEvents = [
    {
      title: "Web3 Innovation Challenge",
      date: "Feb 15-17, 2024",
      participants: 500,
      prize: "$10,000",
      status: "Registration Open",
      description: "Build the next generation of decentralized applications using cutting-edge blockchain technology."
    },
    {
      title: "AI for Good Hackathon",
      date: "Mar 8-10, 2024",
      participants: 750,
      prize: "$15,000",
      status: "Coming Soon",
      description: "Create AI solutions that address real-world social and environmental challenges."
    },
    {
      title: "Mobile App Marathon",
      date: "Mar 22-24, 2024",
      participants: 400,
      prize: "$8,000",
      status: "Coming Soon",
      description: "Design and develop innovative mobile applications for iOS and Android platforms."
    }
  ];

  return (
    <div className="min-h-screen font-inter bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Compete in
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Epic Hackathons</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of student developers in exciting coding competitions, win prizes, and showcase your skills.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            View All Events
          </Button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Upcoming Hackathons
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={event.status === "Registration Open" ? "default" : "secondary"}>
                      {event.status}
                    </Badge>
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {event.participants} participants expected
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Trophy className="w-4 h-4 mr-2" />
                      {event.prize} in prizes
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant={event.status === "Registration Open" ? "default" : "outline"}
                  >
                    {event.status === "Registration Open" ? "Register Now" : "Learn More"}
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

export default Hackathons;
