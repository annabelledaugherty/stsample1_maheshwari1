import React from 'react';
import { Award, Heart, Globe, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "5,000+", label: "Happy Guests", icon: Heart },
    { number: "15", label: "States Served", icon: Globe },
    { number: "4.9/5", label: "Guest Rating", icon: Star }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Authentic Bihar
              <span className="block text-yellow-600">Hospitality</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over two decades, Hotel Maheshwari has been a beacon of warm 
              hospitality in Madhepur, Bihar. Our commitment to traditional values 
              combined with modern amenities has made us a preferred destination for 
              travelers exploring the rich cultural heritage of Bihar.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nestled in the heart of Madhepur, we offer our guests an authentic 
              experience of Bihari culture while ensuring all modern comforts. 
              Our dedicated team takes pride in showcasing the warmth and hospitality 
              that Bihar is renowned for.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hotel Interior"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">Certified</div>
                <div className="text-sm text-gray-600">Bihar Tourism Board</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;