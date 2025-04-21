import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'rooms', 'suites', 'villas'];
  
  const accommodations = [
    {
      name: 'Deluxe Ocean View Room',
      type: 'rooms',
      description: 'Spacious room with stunning ocean views and premium amenities.',
      price: 'From $299 per night',
      size: '45 sq m',
      beds: '1 King or 2 Queen',
      occupancy: 'Up to 2 adults',
      features: ['Ocean view', 'Private balcony', 'Luxury bathroom', 'Mini bar'],
      image: '/api/placeholder/800/600'
    },
    {
      name: 'Garden Suite',
      type: 'suites',
      description: 'Immerse yourself in nature with our peaceful garden suite retreat.',
      price: 'From $399 per night',
      size: '65 sq m',
      beds: '1 King',
      occupancy: 'Up to 2 adults',
      features: ['Garden view', 'Separate living area', 'Outdoor shower', 'Butler service'],
      image: '/api/placeholder/800/600'
    },
    {
      name: 'Presidential Villa',
      type: 'villas',
      description: 'The ultimate luxury experience with private pool and panoramic views.',
      price: 'From $899 per night',
      size: '120 sq m',
      beds: '1 King',
      occupancy: 'Up to 2 adults',
      features: ['Private pool', 'Ocean view', 'Full kitchen', '24/7 butler service'],
      image: '/api/placeholder/800/600'
    },
    {
      name: 'Family Suite',
      type: 'suites',
      description: 'Perfect for families with spacious accommodations and convenient amenities.',
      price: 'From $499 per night',
      size: '85 sq m',
      beds: '1 King and 2 Twin',
      occupancy: 'Up to 2 adults and 2 children',
      features: ['Connecting rooms', 'Gaming console', 'Children amenities', 'Family dining area'],
      image: '/api/placeholder/800/600'
    },
    {
      name: 'Beachfront Villa',
      type: 'villas',
      description: 'Steps from the sand with exclusive beach access and luxurious accommodations.',
      price: 'From $999 per night',
      size: '150 sq m',
      beds: '1 King',
      occupancy: 'Up to 2 adults',
      features: ['Direct beach access', 'Private pool', 'Outdoor dining area', 'Personal chef available'],
      image: '/api/placeholder/800/600'
    },
    {
      name: 'Premium Mountain View Room',
      type: 'rooms',
      description: 'Enjoy breathtaking mountain views from this well-appointed room.',
      price: 'From $259 per night',
      size: '40 sq m',
      beds: '1 King or 2 Queen',
      occupancy: 'Up to 2 adults',
      features: ['Mountain views', 'Private balcony', 'Rainfall shower', 'Work desk'],
      image: '/api/placeholder/800/600'
    }
  ];
  
  const filteredAccommodations = activeFilter === 'all' 
    ? accommodations 
    : accommodations.filter(room => room.type === activeFilter);
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/api/placeholder/1920/600')" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Accommodations
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Discover our luxurious rooms, suites, and villas for an unforgettable stay.
          </p>
        </div>
      </div>
      
      {/* Accommodations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full capitalize transition-colors duration-300 ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Accommodations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredAccommodations.map((room, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img src={room.image} alt={room.name} className="h-64 w-full object-cover md:h-full" />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="uppercase tracking-wide text-xs text-teal-600 font-semibold">
                      {room.type}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">{room.name}</h3>
                    <p className="mt-2 text-gray-600">{room.description}</p>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-gray-500 text-sm">Size</span>
                        <span className="font-medium">{room.size}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500 text-sm">Beds</span>
                        <span className="font-medium">{room.beds}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500 text-sm">Occupancy</span>
                        <span className="font-medium">{room.occupancy}</span>
                      </div>
                      <div>
                        <span className="block text-gray-500 text-sm">Price</span>
                        <span className="font-medium text-teal-600">{room.price}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900">Key Features</h4>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {room.features.map((feature, idx) => (
                          <li key={idx} className="text-sm bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6">
                      <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded transition-colors duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Room Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our accommodations include premium amenities for your comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Bedding",
                description: "Luxury linens, plush pillows and premium mattresses for the perfect night's sleep.",
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M8 16H4M4 8h4m12 4h-4m0-4h4m-4 8h4M9 4v16M15 4v16" />
                  </svg>
                )
              },
              {
                title: "High-Speed WiFi",
                description: "Complimentary high-speed internet access throughout the resort.",
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                )
              },
              {
                title: "Luxury Bath Products",
                description: "Organic and locally-sourced bath amenities for a spa-like experience.",
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              },
              {
                title: "Smart Room Controls",
                description: "Personalize your experience with state-of-the-art climate and lighting control.",
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "24/7 Room Service",
                description: "Gourmet dining available in the comfort of your room, any time day or night.",
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: "Mini Bar",
                description: "Stocked with premium beverages and gourmet snacks for your enjoyment.",
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                )
              },
              {
                title: "Daily Housekeeping",
                description: "Impeccable service and attention to detail for a pristine environment.",
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              },
              {
                title: "Private Balcony/Terrace",
                description: "Enjoy outdoor living with stunning views from your private space.",
                icon: (
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              }
            ].map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-teal-600 mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Reserve your room today and experience the ultimate in luxury and relaxation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-800 hover:bg-teal-100 py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300">
              Book Now
            </button>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
