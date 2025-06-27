
import { Search, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-syntra-navy">
              Syntra
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-syntra-cyan transition-colors">
              Why Syntra?
            </a>
            <a href="#" className="text-gray-700 hover:text-syntra-cyan transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-syntra-cyan transition-colors">
              Hackathons
            </a>
            <a href="#" className="text-gray-700 hover:text-syntra-cyan transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-syntra-cyan transition-colors">
              Pricing
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-64 bg-gray-50 border-gray-200 focus:border-syntra-cyan"
              />
            </div>

            {/* Auth buttons */}
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-syntra-cyan hover:bg-blue-600 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
