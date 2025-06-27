
import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Code, Users, Zap, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Floating Elements - More realistic positioning */}
      <div className="absolute inset-0 pointer-events-none">
        {/* User avatars with more realistic positioning */}
        <div className="absolute top-32 left-16 animate-float">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg flex items-center justify-center">
            <span className="text-white font-semibold text-lg">JS</span>
          </div>
        </div>
        
        <div className="absolute top-20 right-20 animate-float delay-1000">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg flex items-center justify-center">
            <span className="text-white font-semibold">AL</span>
          </div>
        </div>

        <div className="absolute top-60 left-32 animate-float delay-500">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg flex items-center justify-center">
            <span className="text-white font-semibold text-sm">MK</span>
          </div>
        </div>

        <div className="absolute bottom-40 right-32 animate-float delay-2000">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg flex items-center justify-center">
            <span className="text-white font-semibold text-lg">RY</span>
          </div>
        </div>

        <div className="absolute top-96 right-16 animate-float delay-1500">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg flex items-center justify-center">
            <span className="text-white font-semibold">SM</span>
          </div>
        </div>

        {/* Floating icons and elements */}
        <div className="absolute top-40 left-1/4 animate-float delay-700">
          <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
            <Code className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <div className="absolute bottom-60 left-20 animate-float delay-1200">
          <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
            <MessageCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>

        <div className="absolute top-72 right-1/4 animate-float delay-800">
          <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
        </div>

        <div className="absolute bottom-32 right-1/3 animate-float delay-300">
          <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
            <Zap className="w-6 h-6 text-yellow-600" />
          </div>
        </div>

        <div className="absolute top-28 right-1/3 animate-float delay-600">
          <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
            <Star className="w-6 h-6 text-pink-600" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-44 left-2/3 animate-float delay-400">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-3 h-3"></div>
        </div>

        <div className="absolute bottom-80 left-1/3 animate-float delay-900">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-2 h-2"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Github className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-medium">Syntra Discussions</span>
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          The home
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            for student
          </span>
          <br />
          communities
        </h1>

        <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed font-medium">
          Ask questions, share ideas, and build connections with each other
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          — all right next to your code. Syntra enables healthy and productive software collaboration.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
          >
            Enable discussions
            <span className="text-gray-400">→</span>
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-gray-700 hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-200 underline decoration-2 underline-offset-4"
          >
            Watch video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
