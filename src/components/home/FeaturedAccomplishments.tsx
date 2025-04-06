
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const accomplishments = [
  {
    id: 1,
    title: "State Championship",
    year: "2023",
    description: "1st place in the Florida State Dance Competition, Contemporary Division",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "National Recognition",
    year: "2022",
    description: "Top 10 finalist at the National Dance Alliance Championships",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Community Impact",
    year: "2023",
    description: "Over 20 outreach performances at local community centers and schools",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
];

const FeaturedAccomplishments = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-2">Our Accomplishments</h2>
            <p className="text-gray-600">Celebrating excellence in dance and performance</p>
          </div>
          <Link to="/accomplishments" className="group flex items-center text-maroon hover:text-gold transition-colors mt-4 md:mt-0">
            See all accomplishments 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accomplishments.map((item) => (
            <Card key={item.id} className="overflow-hidden border-0 shadow-lg card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="pt-6 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <span className="bg-gold/20 text-maroon text-sm font-medium px-2.5 py-0.5 rounded">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-4">
                <Link 
                  to="/accomplishments" 
                  className="text-sm text-maroon hover:text-gold transition-colors flex items-center"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAccomplishments;
