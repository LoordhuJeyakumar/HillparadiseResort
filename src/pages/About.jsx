import React from 'react';

const About = () => {
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
            About Paradise Resort
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Discover our story, our values, and what makes us the premier luxury destination.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="\src\assets\images\download.jpg" alt="Resort history" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 1985, Paradise Resort began as a small beachfront getaway with just 10 rooms and a vision to create the most relaxing, luxurious experience possible for our guests.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over the decades, we've grown into a world-renowned luxury destination while maintaining our commitment to personalized service, environmental stewardship, and authentic local experiences.
              </p>
              <p className="text-lg text-gray-700">
                Today, our award-winning resort features 120 rooms and villas, three restaurants, a world-class spa, and countless amenities, all designed to provide an unforgettable escape.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Paradise Resort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Service",
                description: "We believe in exceeding expectations with personalized attention to every detail of your stay.",
                icon: (
                  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: "Environmental Responsibility",
                description: "We are committed to sustainable practices that preserve and protect our beautiful natural surroundings.",
                icon: (
                  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Community Connection",
                description: "We foster strong ties with our local community and showcase authentic cultural experiences for our guests.",
                icon: (
                  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  {/* <!-- Background --> */}
  <rect width="800" height="600" fill="#e8eedc" />
  
  {/* <!-- Forest Background Texture --> */}
  <pattern id="forestPattern" patternUnits="userSpaceOnUse" width="100" height="100">
    <rect width="100" height="100" fill="#e8eedc" />
    <circle cx="20" cy="20" r="3" fill="#d9e6c2" opacity="0.7" />
    <circle cx="60" cy="40" r="4" fill="#d9e6c2" opacity="0.7" />
    <circle cx="30" cy="70" r="5" fill="#d9e6c2" opacity="0.7" />
    <circle cx="80" cy="80" r="3" fill="#d9e6c2" opacity="0.7" />
  </pattern>
  <rect width="800" height="600" fill="url(#forestPattern)" />
  
  {/* <!-- Hill Contours --> */}
  <path d="M150 350 Q300 200 450 250 Q600 300 700 250" stroke="#b5c9a0" stroke-width="3" fill="none" />
  <path d="M100 380 Q250 230 400 280 Q550 330 750 280" stroke="#b5c9a0" stroke-width="3" fill="none" />
  <path d="M50 400 Q200 250 350 300 Q500 350 800 300" stroke="#b5c9a0" stroke-width="3" fill="none" />
  
  {/* <!-- Resort Boundary --> */}
  <path d="M200 150 Q350 100 500 150 Q600 200 650 350 Q680 450 600 500 Q500 550 350 530 Q250 510 200 450 Q150 350 200 150" 
        stroke="#6b5644" stroke-width="3" stroke-dasharray="10,5" fill="none" />
  

  <circle cx="400" cy="300" r="80" fill="#c8dbc5" opacity="0.4" />
  

  <rect x="370" y="270" width="60" height="40" fill="#8b7560" />
  <polygon points="370,270 430,270 400,240" fill="#6b5644" />
  <rect x="390" y="290" width="20" height="20" fill="#d3c7b8" /> 
  <rect x="380" y="280" width="10" height="10" fill="#d3c7b8" /> 
  <rect x="410" y="280" width="10" height="10" fill="#d3c7b8" />
  

  <path d="M400 550 Q400 450 400 310" stroke="#6b5644" stroke-width="15" fill="none" stroke-linecap="round" />
  <path d="M400 550 Q400 450 400 310" stroke="#8b7560" stroke-width="12" fill="none" stroke-linecap="round" />
  <path d="M400 550 Q400 450 400 310" stroke="#d3c7b8" stroke-width="2" stroke-dasharray="20,20" fill="none" />
  

  

  <circle cx="550" cy="200" r="40" fill="#a4c8e0" opacity="0.6" />

  <path d="M550 170 Q560 185 550 200 Q540 185 550 170" fill="#c2e0f4" />
  <path d="M545 200 Q555 215 545 230 Q535 215 545 200" fill="#c2e0f4" />

  <ellipse cx="550" cy="240" rx="20" ry="10" fill="#a4c8e0" />
  
 
  <path d="M410 270 Q480 235 550 200" stroke="#8b7560" stroke-width="5" fill="none" />
  <path d="M410 270 Q480 235 550 200" stroke="#d3c7b8" stroke-width="1" stroke-dasharray="5,5" fill="none" />

  <circle cx="260" cy="220" r="40" fill="#d8c9aa" opacity="0.5" />

  <rect x="245" y="215" width="30" height="18" rx="3" fill="#6b5644" />
  <rect x="252" y="205" width="15" height="10" rx="2" fill="#6b5644" />
  <circle cx="250" cy="233" r="5" fill="#3e3e3e" />
  <circle cx="270" cy="233" r="5" fill="#3e3e3e" />
  

  <path d="M370 270 Q315 245 260 220" stroke="#8b7560" stroke-width="5" fill="none" />
  <path d="M370 270 Q315 245 260 220" stroke="#d3c7b8" stroke-width="1" stroke-dasharray="5,5" fill="none" />
  

  <circle cx="300" cy="400" r="40" fill="#f4dfc1" opacity="0.5" />

  <polygon points="300,390 292,400 308,400" fill="#8b5c34" />
  <path d="M296 390 Q300 380 304 390 Q307 383 310 390 Q304 380 296 390" fill="#e67e22" />
  <path d="M298 388 Q300 380 302 388 Q304 384 306 388 Q302 380 298 388" fill="#f39c12" />

  <rect x="280" y="410" width="15" height="5" rx="2" fill="#8b5c34" />
  <rect x="305" y="410" width="15" height="5" rx="2" fill="#8b5c34" />
  

  <path d="M380 310 Q340 355 300 400" stroke="#8b7560" stroke-width="5" fill="none" />
  <path d="M380 310 Q340 355 300 400" stroke="#d3c7b8" stroke-width="1" stroke-dasharray="5,5" fill="none" />
  

  <circle cx="500" cy="400" r="40" fill="#c2b4d6" opacity="0.5" />

  <rect x="485" y="390" width="30" height="15" rx="2" fill="#6b5644" />
  <circle cx="492" cy="398" r="4" fill="#3e3e3e" />
  <circle cx="508" cy="398" r="4" fill="#3e3e3e" />
  <rect x="495" y="385" width="10" height="10" fill="#8b7560" />
  <path d="M488 382 Q500 377 512 382" stroke="#3e3e3e" stroke-width="2" fill="none" />

  <rect x="485" y="410" width="30" height="20" rx="2" fill="#c2b4d6" opacity="0.7" />
  

  <path d="M420 310 Q460 355 500 400" stroke="#8b7560" stroke-width="5" fill="none" />
  <path d="M420 310 Q460 355 500 400" stroke="#d3c7b8" stroke-width="1" stroke-dasharray="5,5" fill="none" />
  
 

  <g opacity="0.9">
    <circle cx="180" cy="180" r="20" fill="#3e5e41" />
    <circle cx="150" cy="200" r="15" fill="#4a6b4d" />
    <circle cx="200" cy="210" r="18" fill="#567b57" />
    <circle cx="170" cy="160" r="12" fill="#638663" />
  </g>
  
  <g opacity="0.9">
    <circle cx="620" cy="180" r="15" fill="#3e5e41" />
    <circle cx="650" cy="160" r="20" fill="#4a6b4d" />
    <circle cx="600" cy="150" r="12" fill="#567b57" />
    <circle cx="630" cy="130" r="18" fill="#638663" />
  </g>
  
  <g opacity="0.9">
    <circle cx="200" cy="450" r="18" fill="#3e5e41" />
    <circle cx="230" cy="470" r="15" fill="#4a6b4d" />
    <circle cx="180" cy="480" r="20" fill="#567b57" />
    <circle cx="210" cy="430" r="12" fill="#638663" />
  </g>
  
  <g opacity="0.9">
    <circle cx="600" cy="450" r="20" fill="#3e5e41" />
    <circle cx="630" cy="430" r="15" fill="#4a6b4d" />
    <circle cx="580" cy="470" r="18" fill="#567b57" />
    <circle cx="610" cy="480" r="12" fill="#638663" />
  </g>
  

  <g>
    <circle cx="350" cy="200" r="8" fill="#4a6b4d" />
    <circle cx="450" cy="200" r="10" fill="#567b57" />
    <circle cx="320" cy="320" r="9" fill="#3e5e41" />
    <circle cx="480" cy="320" r="7" fill="#638663" />
    <circle cx="350" cy="400" r="8" fill="#4a6b4d" />
    <circle cx="450" cy="400" r="9" fill="#3e5e41" />
    <circle cx="350" cy="150" r="7" fill="#567b57" />
    <circle cx="450" cy="150" r="8" fill="#638663" />
    <circle cx="300" cy="250" r="9" fill="#4a6b4d" />
    <circle cx="500" cy="250" r="7" fill="#567b57" />
    <circle cx="350" cy="450" r="8" fill="#3e5e41" />
    <circle cx="450" cy="450" r="9" fill="#638663" />
  </g>
  

  <path d="M260 220 Q230 180 200 130 Q150 100 100 150 Q80 200 120 250" stroke="#d8c9aa" stroke-width="3" stroke-dasharray="5,5" fill="none" />
  <text x="150" cy="150" font-family="Arial" font-size="10" fill="#6b5644" transform="rotate(-20,150,150)">Safari Route</text>
  

  <circle cx="100" cy="100" r="30" fill="#e8eedc" stroke="#6b5644" stroke-width="2" />
  <path d="M100 70 L100 130" stroke="#6b5644" stroke-width="2" />
  <path d="M70 100 L130 100" stroke="#6b5644" stroke-width="2" />
  <polygon points="100,75 105,95 100,90 95,95" fill="#6b5644" />
  <text x="98" y="85" font-family="Arial" font-size="12" fill="#6b5644">N</text>
  <text x="115" y="103" font-family="Arial" font-size="12" fill="#6b5644">E</text>
  <text x="98" y="123" font-family="Arial" font-size="12" fill="#6b5644">S</text>
  <text x="77" y="103" font-family="Arial" font-size="12" fill="#6b5644">W</text>
  

  <rect x="50" y="500" width="180" height="80" fill="#e8eedc" fill-opacity="0.8" rx="5" ry="5" stroke="#6b5644" stroke-width="2" />
  <text x="60" y="520" font-family="Arial" font-size="12" font-weight="bold" fill="#3e5e41">RESORT ACTIVITY MAP</text>
  
  <line x1="60" y1="535" x2="80" y2="535" stroke="#8b7560" stroke-width="4" />
  <text x="90" y="539" font-family="Arial" font-size="10" fill="#6b5644">Main Road</text>
  
  <line x1="60" y1="550" x2="80" y2="550" stroke="#8b7560" stroke-width="2" />
  <text x="90" y="554" font-family="Arial" font-size="10" fill="#6b5644">Activity Path</text>
  
  <circle cx="65" cy="565" r="5" fill="#4a6b4d" />
  <text x="75" y="568" font-family="Arial" font-size="10" fill="#6b5644">Forest Area</text>
  

  <text x="550" y="185" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#3e5e41">PRIVATE WATERFALL</text>
  <text x="260" y="205" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#3e5e41">JEEP SAFARI</text>
  <text x="300" y="385" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#3e5e41">CAMP FIRE</text>
  <text x="500" y="385" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="#3e5e41">DJ MUSIC</text>
  <text x="400" y="320" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#3e5e41">MAIN LODGE</text>
  

  <rect x="600" y="100" width="180" height="100" fill="#e8eedc" fill-opacity="0.8" rx="5" ry="5" stroke="#6b5644" stroke-width="2" />
  <text x="690" y="120" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#3e5e41">ACTIVITY SCHEDULE</text>
  <text x="610" y="140" font-family="Arial" font-size="10" fill="#6b5644">🌄 Jeep Safari: 5:30 AM - 8:00 AM</text>
  <text x="610" y="155" font-family="Arial" font-size="10" fill="#6b5644">💦 Private Waterfall: 10:00 AM - 1:00 PM</text>
  <text x="610" y="170" font-family="Arial" font-size="10" fill="#6b5644">🔥 Camp Fire: 6:00 PM - 8:00 PM</text>
  <text x="610" y="185" font-family="Arial" font-size="10" fill="#6b5644">🎵 DJ Music: 9:00 PM - 12:00 AM</text>

  <line x1="650" y1="550" x2="750" y2="550" stroke="#6b5644" stroke-width="2" />
  <line x1="650" y1="545" x2="650" y2="555" stroke="#6b5644" stroke-width="2" />
  <line x1="700" y1="545" x2="700" y2="555" stroke="#6b5644" stroke-width="2" />
  <line x1="750" y1="545" x2="750" y2="555" stroke="#6b5644" stroke-width="2" />
  <text x="690" y="540" font-family="Arial" font-size="10" text-anchor="middle" fill="#6b5644">100 m</text>
  <text x="740" y="540" font-family="Arial" font-size="10" text-anchor="middle" fill="#6b5644">200 m</text>
  

  <rect x="250" y="30" width="300" height="60" fill="#e8eedc" fill-opacity="0.9" rx="10" ry="10" stroke="#6b5644" stroke-width="2" />
  <text x="400" y="60" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle" fill="#3e5e41">HILL PARADISE RESORT</text>
  <text x="400" y="80" font-family="Arial" font-size="14" text-anchor="middle" fill="#6b5644">Adventure Activities Map</text>
</svg>
      {/* Awards Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Five-Star Rating - Global Luxury Travel Guide",
              "Best Luxury Resort - World Travel Awards",
              "Sustainable Tourism Excellence Award",
              "Top 10 Beachfront Resorts - Luxury Travel Magazine"
            ].map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="text-teal-600 mb-4">
                  <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <p className="text-center font-medium">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;