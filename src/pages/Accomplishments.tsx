
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Categories for filtering
const categories = ["All", "Competitions", "Performances", "Recognition", "Community"];

// Accomplishment data
const accomplishmentData = [
  {
    id: 1,
    title: "State Championship",
    year: "2023",
    category: "Competitions",
    description: "First place in the Florida State Dance Competition, Contemporary Division. The team's routine 'Resilience' received the highest score in SCHS history.",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "National Recognition",
    year: "2022",
    category: "Recognition",
    description: "Top 10 finalist at the National Dance Alliance Championships. The team was recognized for exceptional choreography and technical execution.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Community Impact",
    year: "2023",
    category: "Community",
    description: "Over 20 outreach performances at local community centers, senior homes, and elementary schools, bringing the joy of dance to diverse audiences.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  {
    id: 4,
    title: "Regional Dance Festival",
    year: "2022",
    category: "Performances",
    description: "Featured performers at the Central Florida Dance Festival, showcasing original choreography that received standing ovations.",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 5,
    title: "Governor's Award",
    year: "2021",
    category: "Recognition",
    description: "Received the Governor's Award for Excellence in Arts Education for our innovative dance curriculum and student achievements.",
    image: "https://images.unsplash.com/photo-1546427660-eb7e86b3ecb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 6,
    title: "Orlando Dance Championship",
    year: "2023",
    category: "Competitions",
    description: "First place in Jazz and second place in Hip Hop categories at the Orlando Dance Championship.",
    image: "https://images.unsplash.com/photo-1504609813442-a9c857557a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
];

const Accomplishments = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredAccomplishments = activeCategory === "All" 
    ? accomplishmentData 
    : accomplishmentData.filter(item => item.category === activeCategory);

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="bg-maroon py-20 px-4 text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-10" 
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1519925610903-381054cc2a1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Accomplishments</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Celebrating years of excellence, artistic achievement, and growth in dance
            </p>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category 
                      ? "bg-maroon text-white" 
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Accomplishments Grid */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAccomplishments.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden card-hover"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <div className="flex gap-2">
                        <span className="bg-gold/20 text-maroon text-xs font-medium px-2.5 py-0.5 rounded">
                          {item.year}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Empty state if no results */}
            {filteredAccomplishments.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700">No accomplishments found in this category.</h3>
                <p className="text-gray-500 mt-2">Please try selecting a different category.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Accomplishments;
