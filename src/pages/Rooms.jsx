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
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60'
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
      image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800&auto=format&fit=crop&q=60'
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
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop&q=60'
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
      image: 'https://images.unsplash.com/photo-1576354302919-96748cb8299e?w=800&auto=format&fit=crop&q=60'
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
      image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&auto=format&fit=crop&q=60'
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
      image: 'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=800&auto=format&fit=crop&q=60'
    }
  ];
  
  const filteredAccommodations = activeFilter === 'all' 
    ? accommodations 
    : accommodations.filter(room => room.type === activeFilter);
  
  // Function to render different card styles based on index
  const getCardStyle = (room, index) => {
    const cardStyle = index % 4;
    
    switch(cardStyle) {
      // Style 1: Image on left, text on right
      case 0:
        return (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
        );
      
      // Style 2: Image on top, text on bottom
      case 1:
        return (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
              <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                {room.price}
              </div>
            </div>
            <div className="p-6">
              <div className="uppercase tracking-wide text-xs text-teal-600 font-semibold">
                {room.type}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{room.name}</h3>
              <p className="mt-2 text-gray-600">{room.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M8 16H4M4 8h4m12 4h-4m0-4h4m-4 8h4M9 4v16M15 4v16" />
                  </svg>
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{room.occupancy}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Key Features</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {room.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-sm bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                      {feature}
                    </li>
                  ))}
                  {room.features.length > 3 && (
                    <li className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      +{room.features.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        );
      
      // Style 3: Image on right, text on left (reverse of style 1)
      case 2:
        return (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-2/5">
                <img src={room.image} alt={room.name} className="h-64 w-full object-cover md:h-full" />
              </div>
              <div className="md:w-3/5 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="uppercase tracking-wide text-xs text-teal-600 font-semibold">
                      {room.type}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-gray-900">{room.name}</h3>
                  </div>
                  <div className="bg-teal-600 text-white px-3 py-1 rounded-md text-sm">
                    {room.price}
                  </div>
                </div>
                <p className="mt-3 text-gray-600">{room.description}</p>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span className="text-gray-700">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M8 16H4M4 8h4m12 4h-4m0-4h4m-4 8h4M9 4v16M15 4v16" />
                    </svg>
                    <span className="text-gray-700">{room.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-700">{room.occupancy}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Amenities</h4>
                  <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      
      // Style 4: Full-width image with overlay text
      case 3:
        return (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img src={room.image} alt={room.name} className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="text-white">
                  <div className="uppercase tracking-wide text-xs font-semibold mb-2 bg-teal-600 inline-block px-2 py-1 rounded">
                    {room.type}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                  <p className="text-gray-200 mb-4">{room.description}</p>
                  
                  <div className="flex gap-4 mb-4">
                    <div>
                      <span className="block text-gray-300 text-xs">Size</span>
                      <span className="font-medium">{room.size}</span>
                    </div>
                    <div>
                      <span className="block text-gray-300 text-xs">Beds</span>
                      <span className="font-medium">{room.beds}</span>
                    </div>
                    <div>
                      <span className="block text-gray-300 text-xs">Occupancy</span>
                      <span className="font-medium">{room.occupancy}</span>
                    </div>
                    <div className="ml-auto">
                      <span className="block text-gray-300 text-xs">Price</span>
                      <span className="font-medium text-teal-400">{room.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap mb-4">
                    {room.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button className="bg-teal-600 hover:bg-teal-500 text-white py-2 px-4 rounded transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-black/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&auto=format&fit=crop&q=80')" }}
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
          <div className="grid grid-cols-1 gap-8">
            {filteredAccommodations.map((room, index) => (
              <div key={index}>
                {getCardStyle(room, index)}
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
      Experience the ultimate luxury getaway. Book your accommodation today for the best rates and availability.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-white text-teal-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300">
        Book Now
      </button>
      <button className="border border-white text-white hover:bg-teal-700 px-6 py-3 rounded-md font-medium transition-colors duration-300">
        View Special Offers
      </button>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Guest Experiences</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Hear what our guests have to say about their stay with us.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Sarah Johnson",
          location: "New York, USA",
          quote: "The Presidential Villa exceeded all our expectations. The private pool and ocean views were breathtaking, and the staff went above and beyond to make our anniversary special.",
          rating: 5
        },
        {
          name: "David Chen",
          location: "Singapore",
          quote: "Our family had an amazing time in the Family Suite. The children's amenities were thoughtful, and the connecting rooms gave everyone their own space while keeping us together.",
          rating: 5
        },
        {
          name: "Emma Roberts",
          location: "London, UK",
          quote: "My stay in the Deluxe Ocean View Room was the perfect escape. Waking up to those stunning views every morning was the highlight of my trip.",
          rating: 4
        }
      ].map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="text-center mt-10">
      <Link to="/reviews" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
        Read more guest reviews
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Find answers to common questions about our accommodations.
      </p>
    </div>
    
    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
      {[
        {
          question: "What time is check-in and check-out?",
          answer: "Standard check-in time is 3:00 PM, and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability."
        },
        {
          question: "Do you offer airport transfers?",
          answer: "Yes, we offer airport transfers for all our guests. Luxury vehicles and private helicopters are available depending on your preference. Please contact our concierge to arrange transportation."
        },
        {
          question: "Are children welcome at the resort?",
          answer: "Absolutely! We welcome guests of all ages. Our Family Suites are specially designed for families with children, and we offer a variety of kids' activities and amenities."
        },
        {
          question: "Is breakfast included with the room?",
          answer: "Yes, all our room rates include complimentary breakfast at our main restaurant. In-room dining breakfast options are also available."
        },
        {
          question: "Can I request special accommodations?",
          answer: "Of course. We strive to meet all special requests. Please inform us of any specific needs or preferences at the time of booking, and our staff will do their best to accommodate them."
        }
      ].map((faq, index) => (
        <div key={index} className="py-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
    
    <div className="text-center mt-10">
      <p className="text-gray-700">
        Have more questions? Contact our concierge at <a href="mailto:concierge@luxuryresort.com" className="text-teal-600 hover:text-teal-700 font-medium">concierge@luxuryresort.com</a> or call <a href="tel:+18001234567" className="text-teal-600 hover:text-teal-700 font-medium">+1 (800) 123-4567</a>.
      </p>
    </div>
  </div>
</section>
    </div>
  );
};

export default Rooms;