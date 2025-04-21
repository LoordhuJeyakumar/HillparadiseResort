import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'rooms', 'dining', 'amenities', 'experiences'];
  
  const images = [
    { src: '/api/placeholder/800/600', category: 'rooms', title: 'Deluxe Ocean View Room' },
    { src: '/api/placeholder/800/600', category: 'rooms', title: 'Presidential Suite' },
    { src: '/api/placeholder/800/600', category: 'dining', title: 'Oceanfront Restaurant' },
    { src: '/api/placeholder/800/600', category: 'dining', title: 'Sunset Bar' },
    { src: '/api/placeholder/800/600', category: 'amenities', title: 'Infinity Pool' },
    { src: '/api/placeholder/800/600', category: 'amenities', title: 'Luxury Spa' },
    { src: '/api/placeholder/800/600', category: 'experiences', title: 'Beach Yoga' },
    { src: '/api/placeholder/800/600', category: 'experiences', title: 'Scuba Diving' },
    { src: '/api/placeholder/800/600', category: 'rooms', title: 'Garden Suite' },
    { src: '/api/placeholder/800/600', category: 'amenities', title: 'Fitness Center' },
    { src: '/api/placeholder/800/600', category: 'dining', title: 'Fine Dining Experience' },
    { src: '/api/placeholder/800/600', category: 'experiences', title: 'Sunset Cruise' }
  ];
  
  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);
  
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
            Gallery
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Explore the beauty and luxury of Paradise Resort through our photo gallery.
          </p>
        </div>
      </div>
      
      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full capitalize transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white text-lg font-medium">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Virtual Tour */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Virtual Tour</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Paradise Resort before you arrive with our immersive virtual tour.
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <p className="text-gray-500 text-lg">Virtual Tour Placeholder</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300">
              Launch Virtual Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;