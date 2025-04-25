import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  
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
  
  // Reset carousel when category changes
  useEffect(() => {
    setCurrentIndex(0);
    resetAutoplay();
  }, [activeCategory]);
  
  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % filteredImages.length);
      }, 3000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, filteredImages.length]);
  
  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % filteredImages.length);
      }, 3000);
    }
  };
  
  const pauseAutoplay = () => {
    setIsAutoplay(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };
  
  const resumeAutoplay = () => {
    setIsAutoplay(true);
  };
  
  const handlePrevious = () => {
    pauseAutoplay();
    setCurrentIndex(prevIndex => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };
  
  const handleNext = () => {
    pauseAutoplay();
    setCurrentIndex(prevIndex => (prevIndex + 1) % filteredImages.length);
  };
  

  
  // Get position class for an item
  const getPositionClass = (index) => {
    if (index === currentIndex) return 'center';
    
    const totalItems = filteredImages.length;
    if (totalItems <= 1) return 'center';
    
    const prev1 = (currentIndex - 1 + totalItems) % totalItems;
    const prev2 = (currentIndex - 2 + totalItems) % totalItems;
    const next1 = (currentIndex + 1) % totalItems;
    const next2 = (currentIndex + 2) % totalItems;
    
    if (index === prev1) return 'prev-1';
    if (index === prev2) return 'prev-2';
    if (index === next1) return 'next-1';
    if (index === next2) return 'next-2';
    
    return 'hidden';
  };
  
  // Handle touch events for mobile
  const touchStartX = useRef(null);
  
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    pauseAutoplay();
  };
  
  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = event.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    
    if (diff > 50) { // Swipe right - go to previous
      handlePrevious();
    } else if (diff < -50) { // Swipe left - go to next
      handleNext();
    }
    
    touchStartX.current = null;
  };
  
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
      
      {/* Filter Section */}
      <section className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full capitalize transition-colors duration-300 ${
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
        </div>
      </section>
      
      {/* Carousel Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length > 0 ? (
            <>
              <div 
                className="clear-carousel-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="clear-carousel-track">
                  {filteredImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`clear-carousel-item ${getPositionClass(index)}`}
                    >
                      <div className="clear-carousel-card">
                        <img 
                          src={image.src}
                          alt={image.title}
                          className="clear-carousel-image"
                          loading="lazy"
                        />
                        <div className="clear-carousel-caption">
                          <h3>{image.title}</h3>
                          <span className="category-badge">{image.category}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation buttons */}
                <button 
                  className="clear-carousel-nav prev"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                
                <button 
                  className="clear-carousel-nav next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
              
              {/* Thumbnails and Indicators */}
              <div className="clear-carousel-controls">
                <div className="clear-carousel-dots">
                  {filteredImages.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                      onClick={() => {
                        pauseAutoplay();
                        setCurrentIndex(index);
                      }}
                      aria-label={`Go to image ${index + 1}`}
                    ></button>
                  ))}
                </div>
                
                <button 
                  className={`autoplay-toggle ${isAutoplay ? 'playing' : ''}`}
                  onClick={() => isAutoplay ? pauseAutoplay() : resumeAutoplay()}
                >
                  {isAutoplay ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images available for this category.</p>
            </div>
          )}
          
          {/* Thumbnail Strip */}
          {filteredImages.length > 0 && (
            <div className="thumbnail-strip mt-8">
              <div className="thumbnail-container">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => {
                      pauseAutoplay();
                      setCurrentIndex(index);
                    }}
                  >
                    <img 
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* CSS for Clear 3D Carousel */}
      <style jsx>{`
        .clear-carousel-container {
          position: relative;
          height: 500px;
          max-width: 100%;
          margin: 0 auto;
          perspective: 1200px;
          overflow: hidden;
        }
        
        .clear-carousel-track {
          width: 100%;
          height: 100%;
          position: absolute;
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        
        .clear-carousel-item {
          position: absolute;
          width: 60%;
          max-width: 600px;
          height: 90%;
          left: 0;
          right: 0;
          margin: auto;
          transition: transform 0.8s ease, opacity 0.8s ease;
          transform-style: preserve-3d;
        }
        
        .clear-carousel-item.center {
          z-index: 10;
          transform: translateZ(0) scale(1);
          opacity: 1;
        }
        
        .clear-carousel-item.prev-1 {
          z-index: 9;
          transform: translateX(-75%) translateZ(-100px) rotateY(10deg) scale(0.85);
          opacity: 0.9;
        }
        
        .clear-carousel-item.next-1 {
          z-index: 9;
          transform: translateX(75%) translateZ(-100px) rotateY(-10deg) scale(0.85);
          opacity: 0.9;
        }
        
        .clear-carousel-item.prev-2 {
          z-index: 8;
          transform: translateX(-120%) translateZ(-200px) rotateY(20deg) scale(0.7);
          opacity: 0.7;
        }
        
        .clear-carousel-item.next-2 {
          z-index: 8;
          transform: translateX(120%) translateZ(-200px) rotateY(-20deg) scale(0.7);
          opacity: 0.7;
        }
        
        .clear-carousel-item.hidden {
          opacity: 0;
          pointer-events: none;
        }
        
        .clear-carousel-card {
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          background-color: white;
          transform-style: preserve-3d;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          backface-visibility: hidden;
        }
        
        .clear-carousel-item.center .clear-carousel-card {
          box-shadow: 0 15px 50px rgba(0, 150, 136, 0.4);
          border: 3px solid #14b8a6;
        }
        
        .clear-carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
        
        .clear-carousel-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent);
          padding: 20px;
          color: white;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        
        .clear-carousel-caption h3 {
          margin: 0 0 10px;
          font-size: 24px;
          font-weight: 600;
        }
        
        .category-badge {
          display: inline-block;
          background-color: #14b8a6;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          text-transform: capitalize;
        }
        
        .clear-carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
        }
        
        .clear-carousel-nav:hover {
          background-color: #14b8a6;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }
        
        .clear-carousel-nav.prev {
          left: 20px;
        }
        
        .clear-carousel-nav.next {
          right: 20px;
        }
        
        .nav-icon {
          width: 24px;
          height: 24px;
        }
        
        .clear-carousel-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          position: relative;
        }
        
        .clear-carousel-dots {
          display: flex;
          gap: 8px;
        }
        
        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #d1d5db;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .carousel-dot.active {
          background-color: #14b8a6;
          transform: scale(1.5);
          box-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
        }
        
        .autoplay-toggle {
          position: absolute;
          right: 20px;
          background-color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          color: #6b7280;
          transition: all 0.3s ease;
        }
        
        .autoplay-toggle:hover {
          color: #14b8a6;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .autoplay-toggle.playing {
          background-color: #14b8a6;
          color: white;
        }
        
        .thumbnail-strip {
          overflow-x: auto;
          padding: 15px 0;
          scrollbar-width: thin;
          scrollbar-color: #14b8a6 #f3f4f6;
        }
        
        .thumbnail-strip::-webkit-scrollbar {
          height: 6px;
        }
        
        .thumbnail-strip::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }
        
        .thumbnail-strip::-webkit-scrollbar-thumb {
          background-color: #14b8a6;
          border-radius: 10px;
        }
        
        .thumbnail-container {
          display: flex;
          gap: 10px;
          padding: 0 10px;
          min-width: min-content;
        }
        
        .thumbnail {
          flex: 0 0 80px;
          height: 60px;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.7;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        
        .thumbnail.active {
          opacity: 1;
          border-color: #14b8a6;
          transform: scale(1.05);
        }
        
        .thumbnail:hover {
          opacity: 0.9;
        }
        
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Mobile responsive styles */
        @media (max-width: 1024px) {
          .clear-carousel-container {
            height: 450px;
          }
          
          .clear-carousel-item {
            width: 70%;
          }
          
          .clear-carousel-caption h3 {
            font-size: 20px;
          }
        }
        
        @media (max-width: 768px) {
          .clear-carousel-container {
            height: 400px;
          }
          
          .clear-carousel-item {
            width: 80%;
          }
          
          .clear-carousel-item.prev-1 {
            transform: translateX(-60%) translateZ(-100px) rotateY(10deg) scale(0.8);
          }
          
          .clear-carousel-item.next-1 {
            transform: translateX(60%) translateZ(-100px) rotateY(-10deg) scale(0.8);
          }
          
          .clear-carousel-caption h3 {
            font-size: 18px;
          }
          
          .autoplay-toggle {
            position: relative;
            right: auto;
            margin-left: 15px;
          }
        }
        
        @media (max-width: 480px) {
          .clear-carousel-container {
            height: 350px;
          }
          
          .clear-carousel-item {
            width: 90%;
          }
          
          .clear-carousel-item.prev-1, 
          .clear-carousel-item.next-1 {
            opacity: 0.6;
          }
          
          .clear-carousel-item.prev-2, 
          .clear-carousel-item.next-2 {
            opacity: 0;
          }
          
          .clear-carousel-nav {
            width: 40px;
            height: 40px;
          }
          
          .clear-carousel-nav.prev {
            left: 10px;
          }
          
          .clear-carousel-nav.next {
            right: 10px;
          }
          
          .clear-carousel-caption {
            padding: 15px;
          }
          
          .clear-carousel-caption h3 {
            font-size: 16px;
            margin-bottom: 5px;
          }
          
          .category-badge {
            padding: 3px 8px;
            font-size: 12px;
          }
          
          .thumbnail {
            flex: 0 0 70px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;