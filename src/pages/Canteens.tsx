
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, ChevronRight } from 'lucide-react';

// Canteen data
const canteens = [
  {
    id: 1,
    name: "Main Campus Canteen",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    location: "Central Building, First Floor",
    rating: 4.7,
    openingHours: "7:30 AM - 8:00 PM",
    description: "Our main dining facility offering a wide variety of cuisines and meal options throughout the day."
  },
  {
    id: 2,
    name: "Science Block Café",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    location: "Science Building, Ground Floor",
    rating: 4.5,
    openingHours: "8:00 AM - 6:00 PM",
    description: "Quick service café with healthy options, perfect for busy science students and faculty."
  },
  {
    id: 3,
    name: "Student Center Food Court",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    location: "Student Center, Second Floor",
    rating: 4.8,
    openingHours: "9:00 AM - 9:00 PM",
    description: "Modern food court with multiple stalls offering international cuisines and comfort food options."
  }
];

const Canteens = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-4 animate-slide-down">
              Select a Canteen
            </h1>
            <p className="text-food-gray max-w-2xl mx-auto animate-fade-in">
              Choose from our partner canteens to pre-order your meal with portion control options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {canteens.map((canteen, index) => (
              <Link 
                to={`/menu/${canteen.id}`} 
                key={canteen.id}
                className="group animate-zoom-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-card overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={canteen.image} 
                      alt={canteen.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-sm font-medium text-food-dark">
                      <Star className="text-food-accent mr-1" size={16} />
                      {canteen.rating}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-food-dark mb-2 group-hover:text-food-primary transition-colors">
                      {canteen.name}
                    </h3>
                    
                    <div className="flex items-center text-food-gray mb-2 text-sm">
                      <MapPin size={16} className="mr-1" />
                      {canteen.location}
                    </div>
                    
                    <div className="flex items-center text-food-gray mb-3 text-sm">
                      <Clock size={16} className="mr-1" />
                      {canteen.openingHours}
                    </div>
                    
                    <p className="text-food-gray text-sm mb-4 line-clamp-2">
                      {canteen.description}
                    </p>
                    
                    <div className="flex justify-end">
                      <span className="text-food-primary font-medium flex items-center text-sm group-hover:translate-x-1 transition-transform">
                        View Menu <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canteens;
