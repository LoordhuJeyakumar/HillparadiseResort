import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'rooms', 'dining', 'amenities', 'experiences'];
  
  const images = [
    { src: '/src/assets/images/image3.avif', category: 'rooms', title: 'Deluxe Ocean View Room' },
    { src: '/src/assets/images/image4.avif', category: 'rooms', title: 'Presidential Suite' },
    { src: '/src/assets/images/image5.avif', category: 'dining', title: 'Oceanfront Restaurant' },
    { src: '/src/assets/images/image6.avif', category: 'dining', title: 'Sunset Bar' },
    { src: '/src/assets/images/image7.avif', category: 'amenities', title: 'Infinity Pool' },
    { src: '/src/assets/images/images-1.PNG', category: 'amenities', title: 'Luxury Spa' },
    { src: '/src/assets/images/poyotomo-lake-is-fishing-spot-with-beautiful-mountain-views-nature_103127-902.avif', category: 'experiences', title: 'Beach Yoga' },
    { src: '/src/assets/images/pool-holiday-leisure-hotel-blue_1203-3913.avif', category: 'experiences', title: 'Scuba Diving' },
    { src: '/src/assets/images/pool_1308-5002.avif', category: 'rooms', title: 'Garden Suite' },
    { src: '/src/assets/images/swimming-pool_74190-2104.avif', category: 'amenities', title: 'Fitness Center' },
    { src: '/src/assets/images/WhatsApp Image 2025-04-22 at 2.46.21 PM (1).jpeg', category: 'dining', title: 'Fine Dining Experience' },
    { src: '/src/assets/images/WhatsApp Image 2025-04-22 at 2.46.21 PM.jpeg', category: 'experiences', title: 'Sunset Cruise' }
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
      
     
    </div>
  );
};

export default Gallery;