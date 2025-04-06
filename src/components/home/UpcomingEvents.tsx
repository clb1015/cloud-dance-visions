
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Spring Showcase",
    date: "April 15, 2025",
    time: "7:00 PM",
    location: "SCHS Auditorium",
    description: "Our annual spring performance featuring all dance classes",
  },
  {
    id: 2,
    title: "Dance Team Tryouts",
    date: "May 10, 2025",
    time: "3:30 PM",
    location: "SCHS Dance Studio",
    description: "Auditions for the 2025-2026 competitive dance team",
  },
  {
    id: 3,
    title: "Summer Dance Intensive",
    date: "June 5-15, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "SCHS Dance Studio",
    description: "Two-week summer program for intermediate and advanced dancers",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-maroon mb-2">Upcoming Events</h2>
          <p className="text-gray-600">Join us for performances, workshops, and more</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 card-hover"
            >
              <div className="flex items-start mb-4">
                <div className="bg-maroon/10 p-3 rounded-lg mr-4">
                  <Calendar className="h-6 w-6 text-maroon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-gold font-medium">{event.date} • {event.time}</p>
                  <p className="text-gray-500 text-sm mt-1">{event.location}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <Button asChild variant="outline" className="w-full border-maroon text-maroon hover:bg-maroon hover:text-white">
                <Link to="/events">Event Details</Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-maroon hover:bg-maroon/90">
            <Link to="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
