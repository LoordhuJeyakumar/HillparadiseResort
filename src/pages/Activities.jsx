import React, { useState, useEffect, useRef } from 'react';

const ActivityCard = ({ title, description, image, price, isActive }) => (
  <div className={`relative rounded-xl overflow-hidden transition-all duration-500 ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'}`}>
    <img 
      src={image} 
      alt={title} 
      className="w-full h-64 md:h-80 object-cover brightness-75 hover:brightness-90 transition-all duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-3">{description}</p>
      {price && <p className="text-teal-400 font-medium mb-4">{price}</p>}
      <button className="self-start bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
        Learn More
      </button>
    </div>
  </div>
);

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const carouselRef = useRef(null);
  
  const categories = [
    {
      title: "Adventure Activities",
      activities: [
        {
          title: "Jeep Safari",
          description: "Explore rugged terrain and hidden gems of the island on our thrilling 4x4 jungle adventures.",
          price: "From $95 per person",
          image: "https://images.unsplash.com/photo-1591703291603-2150887a3db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        },
        {
          title: "Private Waterfalls Tour",
          description: "Discover secluded waterfalls with private swimming holes accessible only with our expert guides.",
          price: "From $110 per person",
          image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        },
        {
          title: "Scuba Diving",
          description: "Explore vibrant coral reefs and underwater marine life with our certified diving instructors.",
          price: "From $120 per person",
          image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        }
      ]
    },
    {
      title: "Nature & Camping",
      activities: [
        {
          title: "Beach Camping",
          description: "Sleep under the stars on our private beach with luxury tent setups and campfire dining.",
          price: "From $150 per night",
          image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        },
        {
          title: "Jungle Tenting",
          description: "Experience the rainforest canopy in our elevated tree tents with full amenities.",
          price: "From $180 per night",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        },
        {
          title: "Sunset Campfire",
          description: "Private beach bonfire with gourmet s'mores and cocktails under the stars.",
          price: "From $75 per couple",
          image: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        }
      ]
    },
    {
      title: "Water Activities",
      activities: [
        {
          title: "Private Waterfall",
          description: "Cruise along the coast and enjoy breathtaking sunset views aboard our luxury catamaran.",
          price: "From $85 per person",
          image: "/src/assets/images/waterfall.jpg"
        },
        {
          title: "Fire camping",
          description: "Discover the underwater world with guided snorkeling tours to the best spots around the resort.",
          price: "From $60 per person",
          image: "/src/assets/images/firecamp.jpg"
        },
        {
          title: "Dj Music",
          description: "Exclusive access to a hidden waterfall with gourmet picnic setup and champagne.",
          price: "From $220 per couple",
          image: "/src/assets/images/dj.jpg"
        }
      ]
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => 
        prev === categories[activeCategory].activities.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeCategory, isAutoRotating]);

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev === categories[activeCategory].activities.length - 1 ? 0 : prev + 1
    );
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev === 0 ? categories[activeCategory].activities.length - 1 : prev - 1
    );
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-teal-900/70 to-gray-900/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80"
          alt="Adventure background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Adventure & Nature Experiences
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl">
            From thrilling safaris to serene waterfalls and magical campfire nights under the stars.
          </p>
        </div>
      </div>
      
      {/* Category Selector */}
      <div className="flex justify-center py-8 bg-gray-800">
        <div className="inline-flex rounded-full bg-gray-700 p-1">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      
      {/* 3D Carousel Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              {categories[activeCategory].title}
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="relative h-[500px] perspective-1000">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Carousel Items */}
            <div 
              ref={carouselRef}
              className="relative w-full h-full flex items-center justify-center"
            >
              {categories[activeCategory].activities.map((activity, index) => {        
                const isActive = index === currentIndex;
                const isNext = index === (currentIndex + 1) % categories[activeCategory].activities.length;
                const isPrev = index === (currentIndex - 1 + categories[activeCategory].activities.length) % categories[activeCategory].activities.length;
                
                let transform = '';
                let zIndex = 0;
                let opacity = 0.5;
                
                if (isActive) {
                  transform = 'translateX(0) scale(1)';
                  zIndex = 10;
                  opacity = 1;
                } else if (isNext) {
                  transform = 'translateX(30%) scale(0.9)';
                  zIndex = 5;
                  opacity = 0.8;
                } else if (isPrev) {
                  transform = 'translateX(-30%) scale(0.9)';
                  zIndex = 5;
                  opacity = 0.8;
                } else {
                  transform = 'translateX(0) scale(0.7)';
                  opacity = 0.3;
                }
                
                return (
                  <div
                    key={index}
                    className={`absolute w-3/4 md:w-2/3 transition-all duration-700 ease-in-out`}
                    style={{
                      transform: transform,
                      zIndex: zIndex,
                      opacity: opacity
                    }}
                  >
                    <ActivityCard 
                      {...activity} 
                      isActive={isActive}
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {categories[activeCategory].activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoRotating(false);
                    setTimeout(() => setIsAutoRotating(true), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-teal-500 w-6' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Premium Experiences */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Premium Adventure Packages</h2>
            <p className="text-xl text-teal-200 max-w-3xl mx-auto">
              Our most exclusive nature and adventure experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Safari & Waterfalls Combo",
                description: "Full-day adventure combining our famous Jeep Safari with access to private waterfalls and swimming holes. Includes gourmet jungle picnic.",
                price: "From $350 per person",
                image: "https://images.unsplash.com/photo-1591703291603-2150887a3db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
              },
              {
                title: "Luxury Camping Experience",
                description: "Overnight in our premium safari tents with private beach campfire, stargazing guide, and sunrise breakfast.",
                price: "From $650 per couple",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
              }
            ].map((experience, index) => (
              <div 
                key={index} 
                className="bg-gray-700 rounded-xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="md:flex h-full">
                  <div className="md:w-1/2 relative">
                    <img 
                      src={experience.image} 
                      alt={experience.title} 
                      className="h-64 w-full object-cover md:h-full brightness-75 hover:brightness-90 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent"></div>
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                      <p className="text-gray-300 mb-4">{experience.description}</p>
                      <p className="text-teal-400 font-medium mb-4">{experience.price}</p>
                    </div>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 self-start">
                      Book This Experience
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Activity Calendar */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Weekly Adventure Schedule</h2>
            <p className="text-xl text-teal-200 max-w-3xl mx-auto">
              Plan your adventure itinerary with our regular activities
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-teal-700 text-white text-left font-bold">Time</th>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <th key={day} className="py-4 px-6 bg-teal-700 text-white text-center font-bold">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { time: '7:00 AM', activities: ['Morning Safari', 'Waterfall Hike', 'Morning Safari', 'Jungle Trek', 'Morning Safari', 'Waterfall Hike', 'Nature Walk'] },
                    { time: '2:00 PM', activities: ['Camp Setup Demo', 'Afternoon Safari', 'Survival Skills', 'Afternoon Safari', 'Wildlife Spotting', 'Afternoon Safari', 'Photography Walk'] },
                    { time: '7:00 PM', activities: ['Beach Campfire', 'Jungle Night Walk', 'Stargazing', 'Beach Campfire', 'Night Safari', 'Beach Campfire', 'Bonfire Stories'] }
                  ].map((row, rowIndex) => (
                    <tr key={row.time} className={rowIndex % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}>
                      <td className="py-3 px-6 text-teal-400 font-medium">{row.time}</td>
                      {row.activities.map((activity, colIndex) => (
                        <td 
                          key={colIndex} 
                          className={`py-3 px-6 text-center ${colIndex % 2 === 0 ? 'text-white' : 'text-teal-300'}`}
                        >
                          {activity}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-900 text-center text-sm text-gray-400">
              * Adventure activities require advance booking. Minimum age requirements may apply for some activities.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;