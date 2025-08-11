import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-600 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">
              ReviewHub
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-red-600 transition-colors font-medium">Home</a>
            <a href="#features" className="text-slate-700 hover:text-red-600 transition-colors font-medium">Features</a>
            <a href="#reviews" className="text-slate-700 hover:text-red-600 transition-colors font-medium">Reviews</a>
            <a href="#about" className="text-slate-700 hover:text-red-600 transition-colors font-medium">About</a>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-medium">
              Write Review
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-700 hover:text-red-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-700 hover:text-red-600 transition-colors">Home</a>
              <a href="#features" className="text-slate-700 hover:text-red-600 transition-colors">Features</a>
              <a href="#reviews" className="text-slate-700 hover:text-red-600 transition-colors">Reviews</a>
              <a href="#about" className="text-slate-700 hover:text-red-600 transition-colors">About</a>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                Write Review
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
