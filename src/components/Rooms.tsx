import React from 'react';
import { Bed, Users, Coffee, Wifi, Car, Utensils } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe King Suite",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$299",
      features: ["King Bed", "2 Guests", "City View", "Mini Bar"],
      amenities: [Bed, Users, Coffee, Wifi],
      description: "Elegant suite featuring contemporary design with premium amenities and stunning city views."
    },
    {
      id: 2,
      name: "Executive Ocean View",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$449",
      features: ["Queen Bed", "3 Guests", "Ocean View", "Balcony"],
      amenities: [Bed, Users, Coffee, Car],
      description: "Luxurious oceanfront suite with private balcony and exclusive access to executive lounge."
    },
    {
      id: 3,
      name: "Presidential Penthouse",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$899",
      features: ["King Bed", "4 Guests", "Panoramic View", "Private Dining"],
      amenities: [Bed, Users, Utensils, Wifi],
      description: "Ultimate luxury with panoramic views, private dining area, and personalized concierge service."
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rooms & Suites
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide the perfect blend of comfort, 
            style, and modern luxury for an unforgettable stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full font-semibold">
                  From {room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      {React.createElement(room.amenities[index], { size: 16, className: "mr-2 text-yellow-600" })}
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gray-900 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;