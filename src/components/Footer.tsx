
import { Github, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4 text-syntra-navy">Syntra</div>
            <p className="text-gray-600 mb-4">
              The home for student coders to learn, build, and grow together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-syntra-cyan transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-syntra-cyan transition-colors">
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Platform</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/features" className="hover:text-syntra-cyan transition-colors">Features</Link></li>
              <li><Link to="/hackathons" className="hover:text-syntra-cyan transition-colors">Hackathons</Link></li>
              <li><Link to="/resources" className="hover:text-syntra-cyan transition-colors">Resources</Link></li>
              <li><Link to="/pricing" className="hover:text-syntra-cyan transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/help" className="hover:text-syntra-cyan transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="hover:text-syntra-cyan transition-colors">Community</Link></li>
              <li><Link to="/contact" className="hover:text-syntra-cyan transition-colors">Contact</Link></li>
              <li><Link to="/status" className="hover:text-syntra-cyan transition-colors">Status</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Stay Updated</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Get the latest updates on new features and community events.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-syntra-cyan"
              />
              <Button className="bg-syntra-cyan hover:bg-blue-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Syntra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
