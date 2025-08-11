import React from 'react';
import { Star, ArrowRight, Shield, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = ({ reviewsCount }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
    >
      <div className="w-full md:w-10/12 mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <Badge className="inline-flex items-center space-x-2 bg-red-100 text-red-600 border border-red-300 px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 text-red-700 fill-current" />
                <span>
                  Trusted by {reviewsCount > 0 ? `${reviewsCount}+` : '10,000+'} verified shoppers worldwide
                </span>
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
                Share Your
                <span className="block mt-2 text-red-600">Shopping Stories</span>
              </h1>

              <p className="text-xl text-slate-700 leading-relaxed max-w-2xl">
                Join millions of shoppers sharing authentic reviews to build a
                transparent marketplace. Your voice matters in creating safer,
                smarter shopping experiences for everyone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-xl border border-slate-300">
                  <div className="p-2 bg-green-200 rounded-lg">
                    <Shield className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">100% Verified</div>
                    <div className="text-sm text-slate-700">Authentic Reviews</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-xl border border-slate-300">
                  <div className="p-2 bg-blue-200 rounded-lg">
                    <Users className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">10M+ Users</div>
                    <div className="text-sm text-slate-700">Active Community</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-xl border border-slate-300">
                  <div className="p-2 bg-purple-200 rounded-lg">
                    <Award className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Award Winning</div>
                    <div className="text-sm text-slate-700">Platform 2024</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-black hover:bg-slate-900 text-white px-8 py-4 text-lg font-medium group"
              >
                Start Reviewing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black hover:bg-slate-200 text-black px-8 py-4 text-lg font-medium bg-white"
              >
                Explore Reviews
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <img
                className="w-full h-auto rounded-xl"
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2340&q=80"
                alt="Online Shopping Experience"
              />
              {/* Floating stats cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-slate-300">
                <div className="text-2xl font-bold text-black">4.8★</div>
                <div className="text-sm text-slate-700">Average Rating</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-slate-300">
                <div className="text-2xl font-bold text-black">{reviewsCount || '50K'}+</div>
                <div className="text-sm text-slate-700">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
