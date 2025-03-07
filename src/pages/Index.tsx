
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, BarChart, Clock, Award } from 'lucide-react';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://hospitalityinsights.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/AdobeStock_264542845.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-down">
            FOOD WASTE MANAGEMENT
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-down animation-delay-200">
            "Join the Movement Against Food Waste. Make Every Meal Count!"
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-400">
            <Link to="/login" className="btn-primary w-full sm:w-auto flex items-center justify-center">
              Join Us <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/ngo-partnership" className="btn-outline text-white border-white w-full sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-food-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            How We Reduce Food Waste
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-6 animate-zoom-in animation-delay-100">
              <div className="rounded-full bg-food-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                <Utensils className="text-food-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-food-dark">
                Pre-Order System
              </h3>
              <p className="text-food-gray">
                Order your meals in advance to help canteens prepare the right amount and reduce excess.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-6 animate-zoom-in animation-delay-200">
              <div className="rounded-full bg-food-secondary/10 w-14 h-14 flex items-center justify-center mb-4">
                <BarChart className="text-food-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-food-dark">
                Portion Control
              </h3>
              <p className="text-food-gray">
                Choose the right portion size for your appetite to minimize personal food waste.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-6 animate-zoom-in animation-delay-300">
              <div className="rounded-full bg-food-accent/10 w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="text-food-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-food-dark">
                Real-time Updates
              </h3>
              <p className="text-food-gray">
                Get notified about meal status and availability to make informed choices.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card p-6 animate-zoom-in animation-delay-400">
              <div className="rounded-full bg-food-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                <Award className="text-food-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-food-dark">
                NGO Collaboration
              </h3>
              <p className="text-food-gray">
                Excess food is distributed to those in need through our NGO partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-food-dark">
                Why Pre-order With Portion Control?
              </h2>
              <div className="space-y-4">
                <p className="text-food-gray">
                  Pre-ordering meals with precise portion control is one of the most effective ways to combat food waste in institutional settings.
                </p>
                <p className="text-food-gray">
                  When you select your exact portion size, you're not just satisfying your hunger - you're making a conscious decision to minimize waste and maximize resource efficiency.
                </p>
                <p className="text-food-gray">
                  Studies show that implementing portion control can reduce food waste by up to 30% in cafeterias and institutional settings.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/canteens" className="btn-primary">
                  Start Pre-ordering Now
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80" 
                  alt="Food portion control" 
                  className="rounded-2xl shadow-xl w-full animate-blur-in"
                />
                <div className="absolute -bottom-6 -left-6 bg-food-primary text-white p-4 rounded-xl shadow-lg animate-fade-in animation-delay-300">
                  <p className="text-lg font-semibold">30% Waste Reduction</p>
                  <p className="text-sm">With proper portion control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-food-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Join our platform today and help us create a sustainable food future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login" className="btn-secondary bg-white text-food-primary hover:bg-white/90">
              Get Started Now
            </Link>
            <Link to="/ngo-partnership" className="btn-outline text-white border-white">
              Learn About NGO Partnerships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
