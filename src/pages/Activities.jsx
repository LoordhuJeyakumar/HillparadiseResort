import React from 'react';

const ActivityCard = ({ title, description, image, price }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {price && <p className="text-teal-600 font-medium mb-4">{price}</p>}
      <button className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded transition-colors duration-300">
        Learn More
      </button>
    </div>
  </div>
);

const Activities = () => {
  const categories = [
    {
      title: "Water Activities",
      activities: [
        {
          title: "Scuba Diving",
          description: "Explore vibrant coral reefs and underwater marine life with our certified diving instructors.",
          price: "From $120 per person",
          image: "/api/placeholder/800/600"
        },
        {
          title: "Sunset Sailing",
          description: "Cruise along the coast and enjoy breathtaking sunset views aboard our luxury catamaran.",
          price: "From $85 per person",
          image: "/api/placeholder/800/600"
        },
        {
          title: "Snorkeling Adventure",
          description: "Discover the underwater world with guided snorkeling tours to the best spots around the resort.",
          price: "From $60 per person",
          image: "/api/placeholder/800/600"
        }
      ]
    },
    {
      title: "Wellness & Recreation",
      activities: [
        {
          title: "Beach Yoga",
          description: "Start your day with rejuvenating yoga sessions on our pristine private beach.",
          price: "Complimentary for guests",
          image: "/api/placeholder/800/600"
        },
        {
          title: "Spa Treatments",
          description: "Indulge in relaxing massages and rejuvenating treatments at our world-class spa.",
          price: "From $150 per session",
          image: "/api/placeholder/800/600"
        },
        {
          title: "Tennis & Pickleball",
          description: "Stay active with our professional-grade courts and equipment rentals.",
          price: "Complimentary for guests",
          image: "/api/placeholder/800/600"
        }
      ]
    },
    {
      title: "Cultural Experiences",
      activities: [
        {
          title: "Cooking Classes",
          description: "Learn to prepare local delicacies with our expert chefs using fresh, local ingredients.",
          price: "From $95 per person",
          image: "/api/placeholder/800/600"
        },
        {
          title: "Island Tours",
          description: "Explore local villages, markets, and historical sites with our knowledgeable guides.",
          price: "From $110 per person",
          image: "/api/placeholder/800/600"
        },
        {
          title: "Traditional Dance Show",
          description: "Experience the rich cultural heritage through vibrant performances and music.",
          price: "Complimentary weekly show",
          image: "/api/placeholder/800/600"
        }
      ]
    }
  ];
  
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
            Activities & Experiences
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Discover adventure, relaxation, and cultural immersion during your stay.
          </p>
        </div>
      </div>
      
      {/* Activities Sections */}
      {categories.map((category, index) => (
        <section key={index} className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{category.title}</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.activities.map((activity, idx) => (
                <ActivityCard key={idx} {...activity} />
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Special Experiences */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Signature Experiences</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Create unforgettable memories with our exclusive curated experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Private Island Picnic",
                description: "Escape to a secluded island for a gourmet picnic prepared by our executive chef. Enjoy swimming, snorkeling, and complete privacy in paradise.",
                price: "From $450 per couple",
                image: "/api/placeholder/800/600"
              },
              {
                title: "Helicopter Sunset Tour",
                description: "Soar above the island on a private helicopter tour, capturing breathtaking aerial views and a spectacular sunset from the skies.",
                price: "From $750 per couple",
                image: "/api/placeholder/800/600"
              }
            ].map((experience, index) => (
              <div key={index} className="bg-teal-700 rounded-lg overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img src={experience.image} alt={experience.title} className="h-64 w-full object-cover md:h-full" />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                      <p className="text-teal-100 mb-4">{experience.description}</p>
                      <p className="text-teal-200 font-medium mb-4">{experience.price}</p>
                    </div>
                    <button className="bg-white text-teal-800 hover:bg-teal-100 py-2 px-4 rounded transition-colors duration-300">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Weekly Activity Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your stay with our regularly scheduled activities and events.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-teal-600 text-white text-left">Time</th>
                    <th className="py-3 px-4 bg-teal-600 text-white text-center">Monday</th>
                    <th className="py-3 px-4 bg-teal-600 text-white text-center">Tuesday</th>
                    <th className="py-3 px-4 bg-teal-600 text-white text-center">Wednesday</th>
                    <th className="py-3 px-4 bg-teal-600 text-white text-center">Thursday</th>
                    <th className="py-3 px-4 bg-teal-600 text-white text-center">Friday</th>
                    <th className="py-3 px-4 bg-teal-600 text-white text-center">Saturday</th>
                    <th className="py-3 px-4 bg-teal-600 text-white text-center">Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">7:00 AM</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Beach Yoga</td>
                    <td className="py-3 px-4 border-b text-center">Morning Walk</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Beach Yoga</td>
                    <td className="py-3 px-4 border-b text-center">Pilates</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Beach Yoga</td>
                    <td className="py-3 px-4 border-b text-center">Tai Chi</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Beach Yoga</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">10:00 AM</td>
                    <td className="py-3 px-4 border-b text-center">Snorkeling</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Cooking Class</td>
                    <td className="py-3 px-4 border-b text-center">Island Tour</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Snorkeling</td>
                    <td className="py-3 px-4 border-b text-center">Market Tour</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Scuba Diving</td>
                    <td className="py-3 px-4 border-b text-center">Beach Games</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">2:00 PM</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Tennis Clinic</td>
                    <td className="py-3 px-4 border-b text-center">Sailing</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Mixology Class</td>
                    <td className="py-3 px-4 border-b text-center">Kayaking</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Tennis Clinic</td>
                    <td className="py-3 px-4 border-b text-center">Paddle Boarding</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Island Hike</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">8:00 PM</td>
                    <td className="py-3 px-4 border-b text-center">Movie Night</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Beach Bonfire</td>
                    <td className="py-3 px-4 border-b text-center">Stargazing</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Live Music</td>
                    <td className="py-3 px-4 border-b text-center">Wine Tasting</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Dance Show</td>
                    <td className="py-3 px-4 border-b text-center">Acoustic Night</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-center text-sm text-gray-600">
              * Activities subject to weather conditions and availability. Please check with the concierge for the latest schedule.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;