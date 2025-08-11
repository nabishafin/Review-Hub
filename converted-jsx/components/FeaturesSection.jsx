import React from "react";
import { Star, Search, Edit, Shield, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Star,
      title: "Smart Rating System",
      description:
        "Comprehensive 5-star rating with detailed breakdown for different aspects of your shopping experience.",
      color: "from-yellow-500 to-orange-600", // deepened
    },
    {
      icon: Search,
      title: "Advanced Search & Filter",
      description:
        "Find exactly what you're looking for with powerful search capabilities and intelligent filtering options.",
      color: "from-blue-600 to-teal-600", // deepened
    },
    {
      icon: Edit,
      title: "Easy Review Management",
      description:
        "Edit, update, or delete your reviews anytime. Complete control over your shared experiences.",
      color: "from-green-600 to-emerald-600", // deepened
    },
    {
      icon: Shield,
      title: "Verified & Secure",
      description:
        "All reviews go through our verification process to ensure authenticity and prevent fake reviews.",
      color: "from-red-600 to-pink-600", // deepened
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description:
        "Get instant notifications about new reviews, responses from merchants, and community interactions.",
      color: "from-purple-700 to-indigo-700", // deepened
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Everything You Need For
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-semibold">
              {" "}
              Perfect Reviews
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the comprehensive features that make ReviewHub the most
            trusted platform for authentic shopping experiences and
            community-driven insights.
          </p>
        </div>

        {/* Image + Features */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left Side Image */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Shopping experience"
              className="rounded-lg shadow-2xl w-full object-cover max-h-[500px]"
            />
          </div>

          {/* Right Side Features List */}
          <div className="flex-1 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
