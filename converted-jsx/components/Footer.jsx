import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = ({ reviews, averageRating }) => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-red-600 rounded-lg">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-red-600 bg-clip-text text-transparent">
                ReviewHub
              </span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              The world's most trusted platform for authentic online shopping reviews.
              Join millions of verified shoppers sharing their experiences to create
              a transparent and reliable marketplace for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 hover:bg-red-600 rounded-lg transition-colors">
                <Facebook className="w-5 h-5 text-red-500" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-red-600 rounded-lg transition-colors">
                <Twitter className="w-5 h-5 text-red-500" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-red-600 rounded-lg transition-colors">
                <Instagram className="w-5 h-5 text-red-500" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-red-600 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5 text-red-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-red-600 mb-6 text-lg">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-300 hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="#features" className="text-slate-300 hover:text-red-600 transition-colors">Features</a></li>
              <li><a href="#reviews" className="text-slate-300 hover:text-red-600 transition-colors">Reviews</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#pricing" className="text-slate-300 hover:text-red-600 transition-colors">Pricing</a></li>
              <li><a href="#api" className="text-slate-300 hover:text-red-600 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-red-600 mb-6 text-lg">Support</h4>
            <ul className="space-y-4">
              <li><a href="#help" className="text-slate-300 hover:text-red-600 transition-colors">Help Center</a></li>
              <li><a href="#guidelines" className="text-slate-300 hover:text-red-600 transition-colors">Review Guidelines</a></li>
              <li><a href="#safety" className="text-slate-300 hover:text-red-600 transition-colors">Safety & Trust</a></li>
              <li><a href="#privacy" className="text-slate-300 hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-slate-300 hover:text-red-600 transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-red-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Stats */}
          <div>
            <h4 className="font-bold text-red-600 mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-red-500" />
                <span>support@reviewhub.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-red-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              <h5 className="font-semibold text-red-500 mb-3">Live Stats</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Reviews:</span>
                  <span className="text-white font-medium">{reviews.length.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Avg Rating:</span>
                  <span className="text-yellow-400 font-medium">{averageRating}★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Active Users:</span>
                  <span className="text-green-400 font-medium">10.2M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; 2025 ReviewHub. All rights reserved. Built with React & shadcn/ui
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#security" className="text-slate-400 hover:text-red-600 text-sm transition-colors">Security</a>
              <a href="#accessibility" className="text-slate-400 hover:text-red-600 text-sm transition-colors">Accessibility</a>
              <a href="#cookies" className="text-slate-400 hover:text-red-600 text-sm transition-colors">Cookies</a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
