
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart3, Bot, Calendar } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Logical Rooms",
    description: "Dedicated spaces for structured problem-solving and peer collaboration on coding challenges.",
    color: "text-syntra-purple bg-purple-100"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your coding progress, skill development, and contribution to the community over time.",
    color: "text-syntra-cyan bg-blue-100"
  },
  {
    icon: Bot,
    title: "Bots & Code Runners",
    description: "AI-powered assistants and integrated code execution environments for instant feedback.",
    color: "text-syntra-yellow bg-yellow-100"
  },
  {
    icon: Calendar,
    title: "Event Scheduler",
    description: "Organize hackathons, study sessions, and coding meetups with seamless calendar integration.",
    color: "text-syntra-navy bg-gray-100"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-syntra-navy mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four core pillars designed to elevate your coding journey and connect you with like-minded students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white rounded-xl overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-syntra-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
