import React from 'react';

const ActivityCard = ({ title, description, image, price }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          title: "Sunset Sailing",
          description: "Cruise along the coast and enjoy breathtaking sunset views aboard our luxury catamaran.",
          price: "From $85 per person",
          image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        },
        {
          title: "Snorkeling Adventure",
          description: "Discover the underwater world with guided snorkeling tours to the best spots around the resort.",
          price: "From $60 per person",
          image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        },
        {
          title: "Private Waterfall Picnic",
          description: "Exclusive access to a hidden waterfall with gourmet picnic setup and champagne.",
          price: "From $220 per couple",
          image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        }
      ]
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-black/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80"
          alt="Adventure background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Adventure & Nature Experiences
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            From thrilling safaris to serene waterfalls and magical campfire nights under the stars.
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
            <h2 className="text-3xl font-serif font-bold mb-4">Premium Adventure Packages</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
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
              <div key={index} className="bg-teal-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Weekly Adventure Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your adventure itinerary with our regular activities
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
                    <td className="py-3 px-4 border-b text-center">Morning Safari</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Waterfall Hike</td>
                    <td className="py-3 px-4 border-b text-center">Morning Safari</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Jungle Trek</td>
                    <td className="py-3 px-4 border-b text-center">Morning Safari</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Waterfall Hike</td>
                    <td className="py-3 px-4 border-b text-center">Nature Walk</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">2:00 PM</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Camp Setup Demo</td>
                    <td className="py-3 px-4 border-b text-center">Afternoon Safari</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Survival Skills</td>
                    <td className="py-3 px-4 border-b text-center">Afternoon Safari</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Wildlife Spotting</td>
                    <td className="py-3 px-4 border-b text-center">Afternoon Safari</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Photography Walk</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">7:00 PM</td>
                    <td className="py-3 px-4 border-b text-center">Beach Campfire</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Jungle Night Walk</td>
                    <td className="py-3 px-4 border-b text-center">Stargazing</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Beach Campfire</td>
                    <td className="py-3 px-4 border-b text-center">Night Safari</td>
                    <td className="py-3 px-4 border-b text-center bg-teal-50">Beach Campfire</td>
                    <td className="py-3 px-4 border-b text-center">Bonfire Stories</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-center text-sm text-gray-600">
              * Adventure activities require advance booking. Minimum age requirements may apply for some activities.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;