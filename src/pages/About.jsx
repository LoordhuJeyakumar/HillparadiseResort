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
              <img src="/api/placeholder/800/600" alt="Resort history" className="rounded-lg shadow-lg w-full" />
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
      
      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals who ensure your experience exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Isabella Martinez",
                title: "General Manager",
                bio: "With over 20 years of luxury hospitality experience, Isabella leads our team with passion and vision.",
                image: "/api/placeholder/400/400"
              },
              {
                name: "James Chen",
                title: "Executive Chef",
                bio: "A world-renowned culinary artist specializing in fusion cuisine that celebrates local ingredients.",
                image: "/api/placeholder/400/400"
              },
              {
                name: "Sarah Johnson",
                title: "Spa Director",
                bio: "Sarah brings her expertise in holistic wellness to create transformative experiences for our guests.",
                image: "/api/placeholder/400/400"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
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