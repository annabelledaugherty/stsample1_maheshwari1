import React from 'react';
import { Waves, Dumbbell, Utensils, Car, Wifi, Coffee, Shield, Gift } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Utensils,
      title: "Authentic Cuisine",
      description: "Traditional Bihari cuisine and North Indian specialties prepared by expert chefs."
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "Well-equipped fitness center with modern equipment and yoga facilities."
    },
    {
      icon: Waves,
      title: "Garden Restaurant",
      description: "Open-air dining experience in our beautiful landscaped gardens."
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Secure parking facilities with 24/7 security for all guests."
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet access in all rooms and common areas."
    },
    {
      icon: Coffee,
      title: "Tea Lounge",
      description: "Traditional tea service featuring local varieties and light snacks."
    },
    {
      icon: Shield,
      title: "24/7 Concierge",
      description: "Round-the-clock assistance for local sightseeing and travel arrangements."
    },
    {
      icon: Gift,
      title: "Cultural Tours",
      description: "Guided tours to nearby temples, historical sites, and local attractions."
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exceptional facilities and services designed to elevate your stay 
            and create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                <amenity.icon className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.title}</h3>
              <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Hotel Amenities"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Amenities;