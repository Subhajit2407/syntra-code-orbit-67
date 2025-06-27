
import { Github, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-syntra-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">Syntra</div>
            <p className="text-gray-300 mb-4">
              The home for student coders to learn, build, and grow together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-syntra-cyan transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-syntra-cyan transition-colors">
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-syntra-cyan transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-syntra-cyan transition-colors">Hackathons</a></li>
              <li><a href="#" className="hover:text-syntra-cyan transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-syntra-cyan transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-syntra-cyan transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-syntra-cyan transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-syntra-cyan transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-syntra-cyan transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest updates on new features and community events.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-syntra-cyan"
              />
              <Button className="bg-syntra-cyan hover:bg-blue-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Syntra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
