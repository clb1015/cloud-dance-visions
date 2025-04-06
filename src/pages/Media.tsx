
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mediaCategories = {
  photos: [
    {
      id: 1,
      title: "Spring Showcase 2023",
      description: "Highlights from our annual spring performance",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Performances"
    },
    {
      id: 2,
      title: "State Competition",
      description: "Our team celebrating their first place win",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Competitions"
    },
    {
      id: 3,
      title: "Master Class",
      description: "Students learning from guest choreographer Michael Thompson",
      image: "https://images.unsplash.com/photo-1546427660-eb7e86b3ecb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Workshops"
    },
    {
      id: 4,
      title: "Ballet Technique Class",
      description: "Students working on fundamentals at the barre",
      image: "https://images.unsplash.com/photo-1573750216255-6510723e3913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Classes"
    },
    {
      id: 5,
      title: "Contemporary Ensemble",
      description: "Group piece from our winter showcase",
      image: "https://images.unsplash.com/photo-1509670811615-bb8b07cb3caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Performances"
    },
    {
      id: 6,
      title: "Dance Team Auditions",
      description: "Students preparing for their audition pieces",
      image: "https://images.unsplash.com/photo-1551845281-3689dd2d9ad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
      category: "Classes"
    },
    {
      id: 7,
      title: "Community Outreach",
      description: "Dance team performing at the children's hospital",
      image: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      category: "Community"
    },
    {
      id: 8,
      title: "Hip Hop Workshop",
      description: "Special weekend workshop with guest instructor",
      image: "https://images.unsplash.com/photo-1504609813442-a9c857557a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Workshops"
    }
  ],
  videos: [
    {
      id: 1,
      title: "Spring Showcase Highlights",
      description: "Best moments from our 2023 annual showcase",
      thumbnail: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ",
      category: "Performances"
    },
    {
      id: 2,
      title: "Competition Team Contemporary Routine",
      description: "Award-winning piece choreographed by Maria Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1504609813442-a9c857557a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ",
      category: "Competitions"
    },
    {
      id: 3,
      title: "Hip Hop Dance Showcase",
      description: "Urban dance styles performed by our talented students",
      thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ",
      category: "Performances"
    },
    {
      id: 4,
      title: "National Dance Competition Finals",
      description: "Our team's journey to the national stage",
      thumbnail: "https://images.unsplash.com/photo-1546427660-eb7e86b3ecb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ",
      category: "Competitions"
    }
  ],
  press: [
    {
      id: 1,
      title: "St. Cloud High Dance Program Takes State Title",
      source: "Orlando Sentinel",
      date: "May 15, 2023",
      description: "The dance program wins top honors at the state competition for the second consecutive year.",
      link: "#"
    },
    {
      id: 2,
      title: "Local Dancers Bring Joy to Senior Centers",
      source: "St. Cloud News",
      date: "February 8, 2023",
      description: "Students perform for retirement communities as part of their community outreach initiative.",
      link: "#"
    },
    {
      id: 3,
      title: "Dance Program Director Receives Teacher of the Year Award",
      source: "Florida Arts Education",
      date: "December 12, 2022",
      description: "Maria Rodriguez honored for excellence in dance education and program leadership.",
      link: "#"
    }
  ]
};

const Media = () => {
  const [photoFilter, setPhotoFilter] = useState("All");
  const [videoFilter, setVideoFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const photoCategories = ["All", ...new Set(mediaCategories.photos.map(item => item.category))];
  const videoCategories = ["All", ...new Set(mediaCategories.videos.map(item => item.category))];
  
  const filteredPhotos = photoFilter === "All" 
    ? mediaCategories.photos 
    : mediaCategories.photos.filter(item => item.category === photoFilter);
    
  const filteredVideos = videoFilter === "All" 
    ? mediaCategories.videos 
    : mediaCategories.videos.filter(item => item.category === videoFilter);

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="bg-maroon py-20 px-4 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Photos, videos, and press coverage showcasing our talented dancers in action
            </p>
          </div>
        </div>
        
        {/* Featured Video */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-maroon mb-8 text-center">Featured Video</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl mb-6">
                <iframe 
                  className="w-full h-[500px]"
                  src="https://www.youtube.com/embed/LXb3EKWsInQ" 
                  title="St. Cloud High School Dance Program Sizzle Reel" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">2023 Program Highlights</h3>
              <p className="text-gray-600">
                Experience the passion and talent of our dancers in this highlight reel featuring performances, 
                competitions, and behind-the-scenes moments from our 2023 dance season.
              </p>
            </div>
          </div>
        </div>
        
        {/* Media Tabs */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="press">Press</TabsTrigger>
              </TabsList>
              
              {/* Photos Tab */}
              <TabsContent value="photos" className="mt-4">
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                  {photoCategories.map(category => (
                    <button
                      key={category}
                      onClick={() => setPhotoFilter(category)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        photoFilter === category 
                          ? "bg-maroon text-white" 
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredPhotos.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
                    >
                      <div className="h-56 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <span className="inline-block mt-2 bg-gold/20 text-maroon text-xs font-medium px-2.5 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {filteredPhotos.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-700">No photos found in this category</h3>
                    <p className="text-gray-500 mt-2">Please try selecting a different category.</p>
                  </div>
                )}
              </TabsContent>
              
              {/* Videos Tab */}
              <TabsContent value="videos" className="mt-4">
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                  {videoCategories.map(category => (
                    <button
                      key={category}
                      onClick={() => setVideoFilter(category)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        videoFilter === category 
                          ? "bg-maroon text-white" 
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredVideos.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
                      onClick={() => setSelectedVideo(item)}
                    >
                      <div className="relative h-64 overflow-hidden cursor-pointer">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-16 h-16 bg-maroon/90 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.84A1 1 0 004 3.5v13a1 1 0 001.7.7l9-6.5a1 1 0 000-1.4l-9-6.5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                          <span className="bg-gold/20 text-maroon text-xs font-medium px-2.5 py-0.5 rounded">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {filteredVideos.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-700">No videos found in this category</h3>
                    <p className="text-gray-500 mt-2">Please try selecting a different category.</p>
                  </div>
                )}
                
                {/* Video Modal */}
                {selectedVideo && (
                  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-5xl w-full overflow-hidden">
                      <div className="p-4 border-b">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold text-gray-900">{selectedVideo.title}</h3>
                          <button 
                            className="text-gray-500 hover:text-gray-800"
                            onClick={() => setSelectedVideo(null)}
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="p-0">
                        <iframe 
                          className="w-full h-[60vh]"
                          src={selectedVideo.videoUrl}
                          title={selectedVideo.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600">{selectedVideo.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
              
              {/* Press Tab */}
              <TabsContent value="press" className="mt-4">
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-6">
                    {mediaCategories.press.map((item) => (
                      <div 
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-lg p-6 shadow-md card-hover"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-maroon">{item.title}</h3>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded">
                            {item.date}
                          </span>
                        </div>
                        <p className="text-sm text-gold mb-4">{item.source}</p>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <a 
                          href={item.link} 
                          className="inline-block text-maroon hover:text-gold font-medium"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Read Full Article →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Media Contact Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-maroon mb-4">Media Inquiries</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              For press coverage, photography permissions, or interview requests regarding 
              the St. Cloud High School Dance Program, please contact our media coordinator.
            </p>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
              <h3 className="font-bold text-gray-900 mb-1">Jennifer Parker</h3>
              <p className="text-gold mb-4">Dance Program Media Coordinator</p>
              <div className="space-y-2">
                <p className="text-gray-600"><span className="font-medium">Email:</span> media@stcloudhigh.edu</p>
                <p className="text-gray-600"><span className="font-medium">Phone:</span> (407) 393-4701</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Media;
