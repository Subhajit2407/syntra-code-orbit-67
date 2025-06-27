
import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Code, Users, Zap, Star, Trophy, Lightbulb, FileText, Coffee } from "lucide-react";

const Hero = () => {
  // Avatar and icon data for orbiting elements
  const innerOrbitItems = [
    { type: 'avatar', initials: 'JS', color: 'from-blue-400 to-blue-600', tooltip: '45 messages today' },
    { type: 'icon', icon: MessageCircle, color: 'text-green-600', tooltip: 'Active discussions' },
    { type: 'avatar', initials: 'AL', color: 'from-purple-400 to-purple-600', tooltip: 'Top contributor' },
    { type: 'icon', icon: Code, color: 'text-blue-600', tooltip: 'Code review ready' },
    { type: 'avatar', initials: 'MK', color: 'from-green-400 to-green-600', tooltip: 'New member' },
    { type: 'icon', icon: Lightbulb, color: 'text-yellow-600', tooltip: 'New idea shared' },
    { type: 'avatar', initials: 'RY', color: 'from-yellow-400 to-orange-500', tooltip: 'Project leader' },
    { type: 'icon', icon: Trophy, color: 'text-purple-600', tooltip: 'Hackathon winner' },
  ];

  const outerOrbitItems = [
    { type: 'avatar', initials: 'SM', color: 'from-pink-400 to-pink-600', tooltip: 'Design expert' },
    { type: 'icon', icon: Users, color: 'text-blue-500', tooltip: 'Team forming' },
    { type: 'avatar', initials: 'DL', color: 'from-indigo-400 to-indigo-600', tooltip: 'Mentor available' },
    { type: 'icon', icon: FileText, color: 'text-gray-600', tooltip: 'New resource' },
    { type: 'avatar', initials: 'KW', color: 'from-cyan-400 to-cyan-600', tooltip: 'Study group' },
    { type: 'icon', icon: Zap, color: 'text-yellow-500', tooltip: 'Quick help' },
    { type: 'avatar', initials: 'TH', color: 'from-red-400 to-red-600', tooltip: 'Code reviewer' },
    { type: 'icon', icon: Star, color: 'text-orange-500', tooltip: 'Featured project' },
    { type: 'avatar', initials: 'LM', color: 'from-teal-400 to-teal-600', tooltip: 'Algorithm expert' },
    { type: 'icon', icon: Coffee, color: 'text-brown-600', tooltip: 'Study session' },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Concentric background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full border border-gray-200 opacity-20"></div>
        <div className="absolute w-[28rem] h-[28rem] rounded-full border border-gray-200 opacity-15"></div>
        <div className="absolute w-[36rem] h-[36rem] rounded-full border border-gray-200 opacity-10"></div>
      </div>

      {/* Orbiting elements - Inner orbit */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[360px] h-[360px]">
          {innerOrbitItems.map((item, index) => (
            <div
              key={`inner-${index}`}
              className="absolute w-10 h-10 animate-orbit group cursor-pointer pointer-events-auto"
              style={{
                animationDelay: `${(index * 360) / innerOrbitItems.length}deg`,
                transformOrigin: '180px',
                transform: `rotate(${(index * 360) / innerOrbitItems.length}deg) translateX(180px) rotate(-${(index * 360) / innerOrbitItems.length}deg)`,
              }}
            >
              {item.type === 'avatar' ? (
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center transform transition-transform hover:scale-110`}>
                  <span className="text-white font-semibold text-sm">{item.initials}</span>
                </div>
              ) : (
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform hover:scale-110">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
              )}
              
              {/* Tooltip */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                {item.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Orbiting elements - Outer orbit */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[520px] h-[520px]">
          {outerOrbitItems.map((item, index) => (
            <div
              key={`outer-${index}`}
              className="absolute w-10 h-10 animate-orbit-reverse group cursor-pointer pointer-events-auto"
              style={{
                animationDelay: `${(index * 360) / outerOrbitItems.length}deg`,
                transformOrigin: '260px',
                transform: `rotate(${(index * 360) / outerOrbitItems.length}deg) translateX(260px) rotate(-${(index * 360) / outerOrbitItems.length}deg)`,
              }}
            >
              {item.type === 'avatar' ? (
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center transform transition-transform hover:scale-110`}>
                  <span className="text-white font-semibold text-sm">{item.initials}</span>
                </div>
              ) : (
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform hover:scale-110">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
              )}
              
              {/* Tooltip */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                {item.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center text-center">
        <div className="space-y-6">
          {/* Pre-title */}
          <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">
            SYNTRA COMMUNITIES
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            The home
            <br />
            for student coders
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-90">
            Ask questions, form teams, and build real projects together—powered by logical, analytical, computational, and procedural thinking.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Started
            </Button>
            <button className="text-blue-600 hover:text-blue-700 text-base font-medium transition-colors duration-200 flex items-center gap-1">
              Watch Demo <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .animate-orbit {
            width: 8px !important;
            height: 8px !important;
          }
          .animate-orbit-reverse {
            width: 8px !important;
            height: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
