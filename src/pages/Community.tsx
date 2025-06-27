
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Star, Trophy, Heart } from "lucide-react";

const Community = () => {
  const communityStats = [
    { icon: Users, label: "Active Members", value: "50,000+", color: "text-blue-600" },
    { icon: MessageCircle, label: "Daily Messages", value: "10,000+", color: "text-green-600" },
    { icon: Star, label: "Projects Shared", value: "25,000+", color: "text-yellow-600" },
    { icon: Trophy, label: "Competitions Held", value: "500+", color: "text-purple-600" }
  ];

  const topContributors = [
    { name: "Alex Chen", contributions: 245, avatar: "AC", role: "Mentor" },
    { name: "Sarah Johnson", contributions: 198, avatar: "SJ", role: "Community Leader" },
    { name: "Mike Rodriguez", contributions: 156, avatar: "MR", role: "Active Member" },
    { name: "Emily Davis", contributions: 134, avatar: "ED", role: "Mentor" }
  ];

  return (
    <div className="min-h-screen font-inter bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Join Our
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Connect with thousands of passionate student developers from around the world.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
            Join Community
          </Button>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Top Contributors */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Contributors</h2>
            <p className="text-xl text-gray-600">Celebrating our most active community members</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topContributors.map((contributor, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{contributor.avatar}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{contributor.name}</h3>
                  <Badge variant="secondary" className="mb-2">{contributor.role}</Badge>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Heart className="w-4 h-4 text-pink-500 mr-1" />
                    {contributor.contributions} contributions
                  </div>
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

export default Community;
