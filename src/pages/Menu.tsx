
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Utensils, 
  Clock, 
  CircleDot, 
  Circle, 
  CircleDashed,
  Plus,
  Minus,
  ShoppingBag,
  CalendarClock
} from 'lucide-react';
import { toast } from 'sonner';

// Canteen data
const canteens = [
  {
    id: 1,
    name: "Main Campus Canteen",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    name: "Science Block Café",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    name: "Student Center Food Court",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  }
];

// Menu categories
const categories = [
  { id: 'main', name: 'Main Courses' },
  { id: 'sides', name: 'Side Dishes' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Beverages' },
];

// Menu items based on canteen ID
const menuItems = {
  1: [
    {
      id: 101,
      name: "Vegetable Pasta",
      description: "Fresh pasta with seasonal vegetables and homemade tomato sauce",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      category: "main",
      price: { small: 5.99, medium: 7.99, large: 9.99 },
      preparationTime: "15 min",
      dietary: ["vegetarian"],
    },
    {
      id: 102,
      name: "Chicken Caesar Salad",
      description: "Crisp romaine lettuce with grilled chicken, parmesan, and creamy dressing",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "main",
      price: { small: 6.49, medium: 8.49, large: 10.49 },
      preparationTime: "10 min",
      dietary: ["protein-rich"],
    },
    {
      id: 103,
      name: "Garlic Bread",
      description: "Toasted bread with garlic butter and herbs",
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "sides",
      price: { small: 2.99, medium: 3.99, large: 4.99 },
      preparationTime: "8 min",
      dietary: ["vegetarian"],
    },
    {
      id: 104,
      name: "Chocolate Brownie",
      description: "Rich chocolate brownie with walnuts",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
      category: "desserts",
      price: { small: 3.49, medium: 4.49, large: 5.49 },
      preparationTime: "5 min",
      dietary: ["contains-nuts"],
    },
    {
      id: 105,
      name: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1787&q=80",
      category: "drinks",
      price: { small: 2.99, medium: 3.99, large: 4.99 },
      preparationTime: "3 min",
      dietary: ["vegan"],
    },
  ],
  2: [
    {
      id: 201,
      name: "Avocado Toast",
      description: "Multigrain toast with smashed avocado, cherry tomatoes, and microgreens",
      image: "https://images.unsplash.com/photo-1588137378633-dea1707cee5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "main",
      price: { small: 6.99, medium: 8.99, large: 10.99 },
      preparationTime: "10 min",
      dietary: ["vegetarian", "vegan-option"],
    },
    {
      id: 202,
      name: "Quinoa Bowl",
      description: "Protein-rich quinoa with roasted vegetables and tahini dressing",
      image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      category: "main",
      price: { small: 7.49, medium: 9.49, large: 11.49 },
      preparationTime: "12 min",
      dietary: ["vegan", "gluten-free"],
    },
    {
      id: 203,
      name: "Sweet Potato Fries",
      description: "Crispy baked sweet potato fries with herb seasoning",
      image: "https://images.unsplash.com/photo-1578160112054-954a67602b88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "sides",
      price: { small: 3.49, medium: 4.49, large: 5.49 },
      preparationTime: "15 min",
      dietary: ["vegan", "gluten-free"],
    },
    {
      id: 204,
      name: "Chia Pudding",
      description: "Chia seeds soaked in almond milk with berries and honey",
      image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      category: "desserts",
      price: { small: 4.99, medium: 5.99, large: 6.99 },
      preparationTime: "5 min",
      dietary: ["vegetarian"],
    },
    {
      id: 205,
      name: "Green Smoothie",
      description: "Spinach, kale, banana, and almond milk smoothie",
      image: "https://images.unsplash.com/photo-1622597467886-df0ae6b8b448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "drinks",
      price: { small: 4.49, medium: 5.49, large: 6.49 },
      preparationTime: "5 min",
      dietary: ["vegan"],
    },
  ],
  3: [
    {
      id: 301,
      name: "Stir-Fry Noodles",
      description: "Asian-style noodles with vegetables and your choice of protein",
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "main",
      price: { small: 7.99, medium: 9.99, large: 11.99 },
      preparationTime: "15 min",
      dietary: ["customizable"],
    },
    {
      id: 302,
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "main",
      price: { small: 8.49, medium: 10.49, large: 12.49 },
      preparationTime: "20 min",
      dietary: ["vegetarian"],
    },
    {
      id: 303,
      name: "Hummus & Pita",
      description: "Creamy hummus with warm pita bread",
      image: "https://images.unsplash.com/photo-1586185118245-8a374d131493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
      category: "sides",
      price: { small: 4.99, medium: 5.99, large: 6.99 },
      preparationTime: "8 min",
      dietary: ["vegan"],
    },
    {
      id: 304,
      name: "Cheesecake",
      description: "New York style cheesecake with berry compote",
      image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      category: "desserts",
      price: { small: 5.49, medium: 6.49, large: 7.49 },
      preparationTime: "5 min",
      dietary: ["vegetarian"],
    },
    {
      id: 305,
      name: "Cold Brew Coffee",
      description: "Smooth cold brew coffee with optional milk",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      category: "drinks",
      price: { small: 3.99, medium: 4.99, large: 5.99 },
      preparationTime: "2 min",
      dietary: ["vegan-option"],
    },
  ],
};

type PortionSize = 'small' | 'medium' | 'large';

interface CartItem {
  id: number;
  name: string;
  price: number;
  portionSize: PortionSize;
  quantity: number;
}

const Menu = () => {
  const { canteenId } = useParams<{ canteenId: string }>();
  const canteenIdNumber = Number(canteenId);
  const navigate = useNavigate();
  
  const [activeCategory, setActiveCategory] = useState<string>('main');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCartSummary, setShowCartSummary] = useState(false);
  
  const canteen = canteens.find(c => c.id === canteenIdNumber);
  const items = menuItems[canteenIdNumber as keyof typeof menuItems] || [];
  
  // Filter items by active category
  const filteredItems = items.filter(item => item.category === activeCategory);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (
    item: any, 
    portionSize: PortionSize
  ) => {
    const price = item.price[portionSize];
    
    // Check if item already exists in cart with the same portion size
    const existingItemIndex = cart.findIndex(
      cartItem => cartItem.id === item.id && cartItem.portionSize === portionSize
    );
    
    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Item doesn't exist, add new item
      setCart([
        ...cart, 
        {
          id: item.id,
          name: item.name,
          price,
          portionSize,
          quantity: 1
        }
      ]);
    }
    
    toast.success(`Added ${item.name} (${portionSize}) to cart`);
  };

  const handleUpdateQuantity = (index: number, increment: boolean) => {
    const updatedCart = [...cart];
    
    if (increment) {
      updatedCart[index].quantity += 1;
    } else {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        // Remove item if quantity would be 0
        updatedCart.splice(index, 1);
      }
    }
    
    setCart(updatedCart);
  };

  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully!");
    setCart([]);
    setShowCartSummary(false);
    
    // Navigate to a confirmation page or back to canteens
    setTimeout(() => {
      navigate('/canteens');
    }, 1500);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  if (!canteen) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-food-dark mb-4">Canteen not found</h2>
          <button 
            onClick={() => navigate('/canteens')} 
            className="btn-primary"
          >
            Back to Canteens
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Canteen Image */}
      <div 
        className="h-[30vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${canteen.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold animate-fade-in">
            {canteen.name}
          </h1>
        </div>
        <button 
          onClick={() => navigate('/canteens')}
          className="absolute top-6 left-6 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
          aria-label="Back to canteens"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="flex-grow pt-6 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Selector */}
          <div className="mb-10 overflow-x-auto md:overflow-visible">
            <div className="flex space-x-4 min-w-max md:min-w-0 md:justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-food-primary text-white shadow-md'
                      : 'bg-gray-100 text-food-gray hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg animate-zoom-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-food-dark">{item.name}</h3>
                    <div className="flex items-center text-food-gray text-sm">
                      <Clock size={14} className="mr-1" />
                      {item.preparationTime}
                    </div>
                  </div>
                  <p className="text-food-gray text-sm mb-4">{item.description}</p>
                  
                  {/* Portion Size Selection */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-food-dark mb-2">Select Portion Size</h4>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CircleDashed size={18} className="mr-2 text-food-primary" />
                          <span className="text-sm">Small</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-3">${item.price.small.toFixed(2)}</span>
                          <button 
                            onClick={() => handleAddToCart(item, 'small')}
                            className="bg-food-primary/10 hover:bg-food-primary/20 text-food-primary rounded-full p-1.5 transition-colors"
                            aria-label="Add small portion to cart"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Circle size={18} className="mr-2 text-food-primary" />
                          <span className="text-sm">Medium</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-3">${item.price.medium.toFixed(2)}</span>
                          <button 
                            onClick={() => handleAddToCart(item, 'medium')}
                            className="bg-food-primary/10 hover:bg-food-primary/20 text-food-primary rounded-full p-1.5 transition-colors"
                            aria-label="Add medium portion to cart"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CircleDot size={18} className="mr-2 text-food-primary" />
                          <span className="text-sm">Large</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-3">${item.price.large.toFixed(2)}</span>
                          <button 
                            onClick={() => handleAddToCart(item, 'large')}
                            className="bg-food-primary/10 hover:bg-food-primary/20 text-food-primary rounded-full p-1.5 transition-colors"
                            aria-label="Add large portion to cart"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dietary Information */}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.dietary.map((tag: string) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-food-muted text-food-gray px-2 py-1 rounded-full"
                        >
                          {tag.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-30">
          <button
            onClick={() => setShowCartSummary(true)}
            className="btn-primary flex items-center shadow-lg"
          >
            <ShoppingBag size={20} className="mr-2" />
            <span>View Cart ({cart.length})</span>
          </button>
        </div>
      )}

      {/* Cart Summary Modal */}
      {showCartSummary && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4 animate-fade-in">
          <div className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-zoom-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-food-dark">Your Cart</h2>
                <button 
                  onClick={() => setShowCartSummary(false)}
                  className="text-food-gray hover:text-food-dark transition-colors"
                  aria-label="Close cart"
                >
                  <X size={24} />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-food-gray mb-4">Your cart is empty</p>
                  <button 
                    onClick={() => setShowCartSummary(false)}
                    className="btn-primary"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item, index) => (
                      <div key={`${item.id}-${item.portionSize}`} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-food-dark">{item.name}</p>
                          <div className="flex items-center text-sm text-food-gray">
                            <span className="capitalize">{item.portionSize}</span>
                            <span className="mx-2">•</span>
                            <span>${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => handleUpdateQuantity(index, false)}
                              className="bg-gray-100 hover:bg-gray-200 text-food-dark rounded-full p-1.5 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-6 text-center font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => handleUpdateQuantity(index, true)}
                              className="bg-gray-100 hover:bg-gray-200 text-food-dark rounded-full p-1.5 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-food-gray">Subtotal</span>
                      <span className="font-medium">${calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-center mb-2 py-2 px-4 bg-food-secondary/10 rounded-lg text-food-secondary">
                      <CalendarClock size={18} className="mr-2" />
                      <span className="text-sm font-medium">Pre-order for pick-up</span>
                    </div>
                    <button 
                      onClick={handlePlaceOrder}
                      className="btn-primary py-3"
                    >
                      Place Order
                    </button>
                    <button 
                      onClick={() => setShowCartSummary(false)}
                      className="btn-outline py-2"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
