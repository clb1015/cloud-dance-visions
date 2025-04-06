
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-maroon text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/58bfb4e8-addc-477b-aa43-a0b6dceea2f3.png" 
                alt="St. Cloud High School Bulldog" 
                className="h-10 w-10 mr-3 bulldog-shadow"
              />
              <div>
                <h3 className="text-white font-bold">St. Cloud High School</h3>
                <p className="text-gold text-sm font-dancing">Dance Program</p>
              </div>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Inspiring students through the art of dance and movement since 1995.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/accomplishments" className="text-gray-300 hover:text-white transition-colors">
                    Accomplishments
                  </Link>
                </li>
                <li>
                  <Link to="/classes" className="text-gray-300 hover:text-white transition-colors">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gold">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/donate" className="text-gray-300 hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/students" className="text-gray-300 hover:text-white transition-colors">
                    Students
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="text-gray-300 hover:text-white transition-colors">
                    Media
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-3 text-gold">Contact</h3>
              <address className="not-italic text-gray-300 space-y-2">
                <p>2000 Bulldog Lane</p>
                <p>St. Cloud, FL 34769</p>
                <p className="mt-2"><a href="tel:+14073934700" className="hover:text-white transition-colors">+1 (407) 393-4700</a></p>
                <p><a href="mailto:dance@stcloudhigh.edu" className="hover:text-white transition-colors">dance@stcloudhigh.edu</a></p>
              </address>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-600" />
        
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} St. Cloud High School Dance Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
