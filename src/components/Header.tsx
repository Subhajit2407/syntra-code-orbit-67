
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              Syntra
            </Link>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Why Syntra?
            </Link>
            <Link to="/features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link to="/hackathons" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Hackathons
            </Link>
            <Link to="/resources" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Resources
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on small screens */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search Syntra"
                className="pl-10 w-48 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm"
              />
            </div>

            {/* Auth buttons */}
            <Button variant="ghost" className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
              Sign In
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
