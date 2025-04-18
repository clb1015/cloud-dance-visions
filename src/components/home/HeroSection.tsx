
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return <div className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
      backgroundImage: "url('/lovable-uploads/2df91e62-8a3b-4708-8341-93fc5f974cb7.png')"
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-dancing">
          Express. Create. Dance.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          St. Cloud High School's award-winning dance program fosters creativity, discipline, and artistic excellence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-maroon hover:bg-maroon/90 text-white">
            <Link to="/classes">Explore Classes</Link>
          </Button>
          <Button asChild size="lg" className="bg-maroon hover:bg-maroon/90 text-white">
            <Link to="/events">Upcoming Events</Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default HeroSection;
