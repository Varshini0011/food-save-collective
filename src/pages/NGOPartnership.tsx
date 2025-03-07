
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  HandHeart, 
  ArrowRight, 
  Clock, 
  Utensils, 
  LineChart,
  Building2,
  Users,
  Calendar
} from 'lucide-react';

const NGOPartnership = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Impact statistics
  const impactStats = [
    { value: '2,500+', label: 'Meals Distributed', icon: Utensils },
    { value: '15+', label: 'Partner NGOs', icon: Building2 },
    { value: '300+', label: 'Student Volunteers', icon: Users },
    { value: '52', label: 'Weekly Collections', icon: Calendar },
  ];

  // NGO Partners
  const partners = [
    {
      name: 'Food Saver NGO',
      description: 'Dedicated to preventing food waste and distributing excess food to those in need.',
      logo: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
      link: 'https://forms.gle/18uJqpaPocE9WkR96'
    },
    {
      name: 'Community Food Bank',
      description: 'Providing food assistance to local families facing food insecurity.',
      logo: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: 'https://forms.gle/18uJqpaPocE9WkR96'
    },
    {
      name: 'Sustainable Future Initiative',
      description: 'Promoting sustainable practices through education and community programs.',
      logo: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      link: 'https://forms.gle/18uJqpaPocE9WkR96'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-food-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-3xl md:text-4xl font-bold text-food-dark mb-6 animate-slide-down">
                Reduce Food Waste,<br />Feed the Needy
              </h1>
              <p className="text-food-gray mb-8 animate-fade-in">
                Join us in our mission to prevent food waste and distribute excess food to those in need through our NGO partnerships. Together, we can make a significant impact on food security and sustainability.
              </p>
              <a 
                href="https://forms.gle/18uJqpaPocE9WkR96" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center animate-fade-in"
              >
                Join the Initiative <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            <div className="lg:w-1/2 animate-zoom-in">
              <img 
                src="https://source.unsplash.com/1600x900/?food,waste" 
                alt="Food waste reduction" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-food-dark">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-card py-8 px-4 text-center transition-transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="rounded-full bg-food-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-food-primary" size={30} />
                </div>
                <p className="text-3xl font-bold text-food-dark mb-2">{stat.value}</p>
                <p className="text-food-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="py-16 bg-food-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-food-dark">
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl animate-zoom-in">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-food-dark mb-3">Community Food Drives</h3>
                <p className="text-food-gray mb-4">
                  Organizing food collection drives to distribute surplus food to shelters and communities in need.
                </p>
                <div className="rounded-full bg-food-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <HandHeart className="text-food-primary" size={24} />
                </div>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl animate-zoom-in animation-delay-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-food-dark mb-3">Educational Campaigns</h3>
                <p className="text-food-gray mb-4">
                  Raising awareness about reducing food waste in households, businesses, and institutions.
                </p>
                <div className="rounded-full bg-food-secondary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-food-secondary" size={24} />
                </div>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl animate-zoom-in animation-delay-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-food-dark mb-3">Tech for Food Saving</h3>
                <p className="text-food-gray mb-4">
                  Using AI and data analytics to predict and manage food surplus efficiently across our network.
                </p>
                <div className="rounded-full bg-food-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <LineChart className="text-food-accent" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner NGOs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-food-dark">
            Our NGO Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl animate-zoom-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-food-dark mb-2">{partner.name}</h3>
                  <p className="text-food-gray text-sm mb-4">{partner.description}</p>
                  <a 
                    href={partner.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-food-primary hover:text-food-primary/80 font-medium transition-colors"
                  >
                    Get involved <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form CTA */}
      <section className="py-16 bg-food-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Fill out our volunteer form and join our network of students and community members working together to reduce food waste.
          </p>
          <a 
            href="https://forms.gle/18uJqpaPocE9WkR96" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary bg-white text-food-primary hover:bg-white/90 inline-flex items-center"
          >
            Get Started <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 border border-food-primary/20">
            <h2 className="text-2xl font-bold text-food-dark mb-6 text-center">
              Contact Us
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <a 
                href="tel:+123456789" 
                className="flex items-center text-food-dark hover:text-food-primary transition-colors"
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/724/724664.png" 
                  alt="Phone" 
                  className="w-6 h-6 mr-2" 
                />
                +1 234 567 89
              </a>
              <a 
                href="mailto:info@foodsavengo.org" 
                className="flex items-center text-food-dark hover:text-food-primary transition-colors"
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
                  alt="Email" 
                  className="w-6 h-6 mr-2" 
                />
                info@foodsavengo.org
              </a>
              <a 
                href="https://instagram.com/foodsavengo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-food-dark hover:text-food-primary transition-colors"
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" 
                  alt="Instagram" 
                  className="w-6 h-6 mr-2" 
                />
                @foodsavengo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGOPartnership;
