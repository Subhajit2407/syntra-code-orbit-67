
import { Button } from "@/components/ui/button";
import { Github, Bell, Star, Lightbulb, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-syntra-gray to-white overflow-hidden">
      {/* Orbital elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large orbit */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit">
            <div className="w-12 h-12 bg-syntra-cyan rounded-full flex items-center justify-center text-white shadow-lg">
              <Github className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Medium orbit reverse */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit-reverse">
            <div className="w-10 h-10 bg-syntra-yellow rounded-full flex items-center justify-center shadow-lg">
              <Lightbulb className="w-5 h-5 text-syntra-navy" />
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-8 h-8 bg-syntra-purple rounded-full flex items-center justify-center text-white shadow-lg">
            <Bell className="w-4 h-4" />
          </div>
        </div>

        <div className="absolute top-32 right-32 animate-float delay-1000">
          <div className="w-10 h-10 bg-syntra-cyan rounded-full flex items-center justify-center text-white shadow-lg">
            <Star className="w-5 h-5" />
          </div>
        </div>

        <div className="absolute bottom-40 left-40 animate-float delay-2000">
          <div className="w-12 h-12 bg-syntra-yellow rounded-full flex items-center justify-center shadow-lg">
            <Trophy className="w-6 h-6 text-syntra-navy" />
          </div>
        </div>

        {/* User avatars */}
        <div className="absolute top-24 right-20">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-syntra-purple to-syntra-purple-light shadow-lg"></div>
        </div>
        <div className="absolute bottom-32 right-20">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-syntra-cyan to-blue-400 shadow-lg"></div>
        </div>
        <div className="absolute top-40 left-16">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-syntra-yellow to-yellow-300 shadow-lg"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-syntra-navy mb-6 leading-tight">
          Syntra
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-4 font-medium">
          The home for student coders
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Ask questions, form teams, and build real projects together—powered by logical, 
          analytical, computational, and procedural thinking.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            className="bg-syntra-navy hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-syntra-cyan text-syntra-cyan hover:bg-syntra-cyan hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
