
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Watson",
      role: "CS Student at MIT",
      avatar: "EW",
      content: "Syntra transformed how I approach coding problems. The community support is incredible, and I've learned more in 3 months than I did in my entire first year.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Bootcamp Graduate",
      avatar: "DK",
      content: "The project collaboration features are game-changing. I've built 5 projects with teams I met on Syntra, and landed my first dev job thanks to the connections I made.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Self-taught Developer",
      avatar: "MS",
      content: "As someone learning to code on my own, Syntra's logical rooms helped me understand complex concepts. The mentors here are patient and genuinely want to help.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Loved by students worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what students are saying about their Syntra experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
