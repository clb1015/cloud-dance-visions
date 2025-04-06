
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const eventTypes = ["All", "Performances", "Workshops", "Competitions", "Fundraisers"];

const allEvents = [
  {
    id: 1,
    title: "Spring Showcase",
    date: "April 15, 2025",
    time: "7:00 PM",
    location: "SCHS Auditorium",
    description: "Our annual spring performance featuring all dance classes and original choreography.",
    type: "Performances",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Dance Team Tryouts",
    date: "May 10, 2025",
    time: "3:30 PM",
    location: "SCHS Dance Studio",
    description: "Auditions for the 2025-2026 competitive dance team. Open to all SCHS students with dance experience.",
    type: "Competitions",
    image: "https://images.unsplash.com/photo-1551845281-3689dd2d9ad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Summer Dance Intensive",
    date: "June 5-15, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "SCHS Dance Studio",
    description: "Two-week summer program for intermediate and advanced dancers. Guest instructors from professional dance companies.",
    type: "Workshops",
    image: "https://images.unsplash.com/photo-1508621522255-80466723e2ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true
  },
  {
    id: 4,
    title: "Dance-A-Thon Fundraiser",
    date: "March 3, 2025",
    time: "12:00 PM - 8:00 PM",
    location: "SCHS Gymnasium",
    description: "Annual fundraiser benefiting our competition team travel expenses. Participants dance for sponsors who donate per hour danced.",
    type: "Fundraisers",
    image: "https://images.unsplash.com/photo-1525034687081-c46006a8a11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Regional Dance Competition",
    date: "February 22-24, 2025",
    time: "All Day",
    location: "Orlando Convention Center",
    description: "Central Florida regional dance competition featuring our competition team in multiple categories.",
    type: "Competitions",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    featured: true
  },
  {
    id: 6,
    title: "Master Class with Guest Artist",
    date: "January 15, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "SCHS Dance Studio",
    description: "Special workshop with Broadway dancer and choreographer Marcus Johnson. Open to intermediate and advanced dancers.",
    type: "Workshops",
    image: "https://images.unsplash.com/photo-1504609813442-a9c857557a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: false
  },
  {
    id: 7,
    title: "Winter Showcase",
    date: "December 12, 2025",
    time: "7:00 PM",
    location: "SCHS Auditorium",
    description: "Holiday-themed performance featuring all dance classes and special guest performances.",
    type: "Performances",
    image: "https://images.unsplash.com/photo-1547421981-06cd305bf219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: false
  },
  {
    id: 8,
    title: "Costume Sale Fundraiser",
    date: "November 5, 2025",
    time: "3:30 PM - 6:30 PM",
    location: "SCHS Dance Studio Lobby",
    description: "Sale of gently used dance costumes, shoes, and accessories. All proceeds support the dance program.",
    type: "Fundraisers",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: false
  },
];

const Events = () => {
  const [selectedType, setSelectedType] = useState("All");
  
  const filteredEvents = selectedType === "All" 
    ? allEvents 
    : allEvents.filter(event => event.type === selectedType);
  
  const featuredEvents = allEvents.filter(event => event.featured);
  const upcomingEvents = [...allEvents].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 3);

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="bg-maroon py-20 px-4 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Calendar</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Performances, competitions, workshops, and more - stay updated on all our dance events
            </p>
          </div>
        </div>
        
        {/* Featured Events */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-maroon mb-8 text-center">Featured Events</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden card-hover"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      <span className="bg-gold/20 text-maroon text-xs font-medium px-2.5 py-0.5 rounded">
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <Button className="w-full bg-maroon hover:bg-maroon/90">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* All Events */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-maroon mb-8 text-center">Event Calendar</h2>
            
            <Tabs defaultValue="list" className="w-full">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="list" className="mt-4">
                {/* Event Type Filter */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                  {eventTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        selectedType === type 
                          ? "bg-maroon text-white" 
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {filteredEvents.map((event) => (
                    <div 
                      key={event.id}
                      className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 card-hover"
                    >
                      <div className="md:w-1/4 lg:w-1/5">
                        <div className="aspect-w-16 aspect-h-9">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="rounded-lg object-cover w-full h-32 md:h-full"
                          />
                        </div>
                      </div>
                      
                      <div className="md:w-3/4 lg:w-4/5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                          <span className="bg-gold/20 text-maroon text-xs font-medium px-2.5 py-0.5 rounded mt-2 md:mt-0 w-fit">
                            {event.type}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                          <div className="flex items-center text-gray-600 text-sm">
                            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        
                        <Button className="bg-maroon hover:bg-maroon/90">
                          Event Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Empty state */}
                {filteredEvents.length === 0 && (
                  <div className="text-center py-12">
                    <CalendarIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">No events found</h3>
                    <p className="text-gray-500 mt-2">Try selecting a different category or check back later.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="calendar" className="mt-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-center text-gray-600 my-8">
                    Calendar view coming soon! In the meantime, use the list view to see all upcoming events.
                  </p>
                  
                  <div className="max-w-xl mx-auto">
                    <h3 className="text-xl font-bold text-maroon mb-4">Quick View: Upcoming Events</h3>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div 
                          key={event.id}
                          className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="bg-maroon/10 p-3 rounded-lg mr-4">
                            <Calendar className="h-6 w-6 text-maroon" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{event.title}</h4>
                            <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Subscribe Section */}
        <div className="bg-maroon text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Subscribe to our newsletter to receive event announcements, performance updates, and important dates.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg flex-grow text-gray-900 focus:outline-none"
              />
              <Button className="bg-gold hover:bg-gold/90 text-maroon font-bold">Subscribe</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Events;
