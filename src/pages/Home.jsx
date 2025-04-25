import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <div className="relative h-screen overflow-hidden">
    {/* Background Video Only */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transform scale-110 animate-zoom-in-out"
      >
        <source src="https://res.cloudinary.com/loordhujeyakumar-cloudinary/video/upload/f_auto:video,q_auto/v3cvjpzq31xduousvhnk" type="video/mp4" />
        <img 
          src="/images/resort-hero-fallback.jpg" 
          alt="Luxury resort backdrop" 
          className="w-full h-full object-cover"
        />
      </video>
    </div>
   {/* Hero content with enhanced typography - positioned higher */}
<div className="relative z-20 h-full flex items-start pt-20 md:pt-32"> {/* Changed from items-center to items-start and added padding-top */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="max-w-3xl transform transition-all duration-1000 ease-out animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tighter">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-white animate-text-glow">
          Experience Luxury
        </span><br />
        <span className="text-white drop-shadow-lg">in Paradise</span>
      </h1>
      <p className="text-xl lg:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-2xl">
        Escape to our exclusive resort where luxury meets natural beauty. Indulge in world-class amenities, breathtaking views, and unforgettable experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/rooms" 
          className="relative overflow-hidden bg-teal-600 hover:bg-teal-700 text-white py-4 px-8 rounded-lg text-lg font-medium transition-all duration-500 text-center transform hover:scale-105 shadow-xl hover:shadow-teal-500/30 group"
        >
          <span className="relative z-10">Explore Rooms</span>
          <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </Link>
        <Link 
          to="/activities" 
          className="relative overflow-hidden bg-transparent hover:bg-white/10 text-white border-2 border-white py-4 px-8 rounded-lg text-lg font-medium transition-all duration-500 text-center transform hover:scale-105 hover:shadow-lg group"
        >
          <span className="relative z-10">View Activities</span>
          <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </Link>
      </div>
    </div>
  </div>
</div>
    
    {/* Enhanced scrolling indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
      <div className="flex flex-col items-center">
        <span className="text-white text-sm mb-2 tracking-widest">EXPLORE</span>
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>
);
const Feature = ({ title, description, icon }) => (
  <div className="relative flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="text-teal-600 mb-6 group-hover:text-teal-700 transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-teal-800 transition-colors duration-500">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500">{description}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Features with decorative elements */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal-100/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block text-teal-600 font-medium mb-4 tracking-widest">EXCLUSIVE EXPERIENCE</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Why Choose <span className="text-teal-600">Paradise Resort</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate getaway with our unparalleled amenities and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Feature 
              title="Luxurious Accommodations" 
              description="Relax in our spacious and elegantly designed rooms and suites with stunning views."
              icon={
                <svg className="w-16 h-16" xmlns="\src\assets\images\images-1.PNG" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <Feature 
              title="Gourmet Dining" 
              description="Savor exquisite cuisine prepared by our renowned chefs using the freshest local ingredients."
              icon={
                <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
            />
            <Feature 
              title="Wellness & Spa" 
              description="Indulge in rejuvenating treatments at our world-class spa and wellness center."
              icon={
                <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      
      {/* Highlighted Rooms with parallax effect */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-1/3 bg-gradient-to-b from-teal-50/20 to-transparent transform -skew-y-6"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block text-teal-600 font-medium mb-4 tracking-widest">LUXURY STAYS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Featured <span className="text-teal-600">Accommodations</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular rooms and suites for your dream vacation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: 'Deluxe Ocean View',
                description: 'Spacious room with stunning ocean views and premium amenities.',
                price: 'From $299 per night',
                image: '/src/assets/images/pic5.jpg',
                highlight: 'BESTSELLER'
              },
              {
                name: 'Garden Suite',
                description: 'Immerse yourself in nature with our peaceful garden suite retreat.',
                price: 'From $399 per night',
                image: 'src/assets/images/images-1.PNG',
                highlight: 'NATURE RETREAT'
              },
              {
                name: 'Presidential Villa',
                description: 'The ultimate luxury experience with private pool and panoramic views.',
                price: 'From $899 per night',
                image: '/src/assets/images/ungasan_ocean-view-plunge-pool_villa-chintamani_rgb-1.jpg',
                highlight: 'EXCLUSIVE'
              }
            ].map((room, index) => (
              <div 
                key={index} 
                className="relative bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 group"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {room.highlight && (
                    <div className="absolute top-4 right-4 bg-white/90 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {room.highlight}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="bg-teal-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
                      {room.price}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors duration-300">{room.name}</h3>
                  <p className="text-gray-600 mb-6">{room.description}</p>
                  <Link 
                    to="/rooms" 
                    className="inline-flex items-center w-full text-center bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link 
              to="/rooms" 
              className="inline-flex items-center bg-white hover:bg-gray-50 text-teal-800 border-2 border-teal-600 py-4 px-10 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Accommodations
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials with decorative elements */}
      <section className="relative py-24 bg-gradient-to-br from-teal-800 to-teal-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-teal-700/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-600/20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block text-teal-300 font-medium mb-4 tracking-widest">GUEST EXPERIENCES</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              What Our <span className="text-teal-300">Guests</span> Say
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-teal-200 mx-auto mb-8"></div>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Discover why guests keep coming back to Paradise Resort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                quote: "The most amazing resort experience we've ever had. The staff went above and beyond to make our stay unforgettable.",
                author: "Stephen Raj",
                location: "Chennai, Tamilnadu",
                rating: 5,
                avatar: "/avatars/avatar-1.jpg"
              },
              {
                quote: "Paradise Resort exceeded all our expectations. The views are breathtaking, and the amenities are world-class.",
                author: "Mariyam john",
                location: "Kakkanad, Kerala",
                rating: 5,
                avatar: "/avatars/avatar-2.jpg"
              },
              {
                quote: "From the moment we arrived, we felt like royalty. The attention to detail and personalized service is unmatched.",
                author: "Shibuna",
                location: "Tirunelveli, Tamilnadu",
                rating: 5,
                avatar: "/avatars/avatar-3.jpg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="relative bg-teal-700/50 backdrop-blur-sm rounded-2xl p-10 hover:bg-teal-700/70 transition-all duration-500 transform hover:-translate-y-3 group"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex justify-center mb-6">
                  <svg className="w-10 h-10 text-teal-300 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-8 italic text-center leading-relaxed">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-bold text-xl">{testimonial.author}</p>
                  <p className="text-teal-300">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section with enhanced styling */}
      <section className="relative py-24 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-100/30 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden h-96 md:h-auto">
                <img 
                  src="\src\assets\images\beautiful-nature-scenery-free-photo-2210x1473.jpg" 
                  alt="Resort view" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-black/10"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="inline-block bg-white/90 text-teal-800 text-sm font-bold px-4 py-2 rounded-full shadow-md">
                    LIMITED TIME OFFER
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-10 md:p-14 flex items-center">
                <div className="w-full">
                  <span className="inline-block text-teal-600 font-medium mb-4 tracking-widest">YOUR ESCAPE AWAITS</span>
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                    Book Your <span className="text-teal-600">Dream Vacation</span> Today
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-300 mb-8"></div>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    Take advantage of our special offers and packages. Reserve your stay now and experience the ultimate luxury getaway.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link 
                      to="/rooms" 
                      className="relative overflow-hidden flex-1 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white py-4 px-8 rounded-xl text-lg font-bold transition-all duration-500 text-center transform hover:scale-105 shadow-xl hover:shadow-teal-500/30 group"
                    >
                      <span className="relative z-10">Book Now</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    </Link>
                    <Link 
                      to="/contact" 
                      className="relative overflow-hidden flex-1 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 py-4 px-8 rounded-xl text-lg font-bold transition-all duration-500 text-center transform hover:scale-105 hover:shadow-lg group"
                    >
                      <span className="relative z-10">Contact Us</span>
                      <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
   
      
      {/* Custom animations and styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes zoom-in-out {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-15px) translateX(-50%);
          }
        }
        
        @keyframes text-glow {
          0% {
            text-shadow: 0 0 10px rgba(94, 234, 212, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(94, 234, 212, 0.6);
          }
          100% {
            text-shadow: 0 0 10px rgba(94, 234, 212, 0.3);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-zoom-in-out {
          animation: zoom-in-out 20s infinite alternate;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;