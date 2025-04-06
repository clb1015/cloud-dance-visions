
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DonationCTA = () => {
  return (
    <section className="py-20 bg-maroon text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Dance Program</h2>
          <p className="text-lg mb-8 text-white/90">
            Your donation helps us provide costumes, competition fees, studio equipment, and 
            scholarships for students with financial need. Help us continue fostering artistic 
            excellence and providing opportunities for our dancers.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-maroon font-bold">
            <Link to="/donate">Donate Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;
