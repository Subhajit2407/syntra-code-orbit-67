
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Star, TrendingUp } from "lucide-react";

const CommunityShowcase = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "50K+", color: "text-blue-600" },
    { icon: MessageCircle, label: "Questions Answered", value: "1M+", color: "text-green-600" },
    { icon: Star, label: "Projects Built", value: "25K+", color: "text-yellow-600" },
    { icon: TrendingUp, label: "Success Rate", value: "94%", color: "text-purple-600" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Growing Community
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Dedicated space for conversations.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of student developers who are already building, learning, and growing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
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

        {/* Community preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Discussions</h3>
            <Badge variant="secondary">Live</Badge>
          </div>
          
          <div className="space-y-4">
            {[
              { title: "How to optimize React performance?", author: "Sarah Chen", replies: 23, time: "2 min ago" },
              { title: "Best practices for API design", author: "Mike Johnson", replies: 18, time: "5 min ago" },
              { title: "JavaScript async/await patterns", author: "Alex Rodriguez", replies: 31, time: "8 min ago" }
            ].map((discussion, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">{discussion.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{discussion.title}</div>
                    <div className="text-sm text-gray-500">by {discussion.author}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{discussion.replies} replies</div>
                  <div className="text-xs text-gray-500">{discussion.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;
