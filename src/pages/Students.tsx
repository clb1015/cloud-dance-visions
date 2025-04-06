
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const studentGroups = ["All Students", "Senior Spotlight", "Competition Team", "Choreographers"];

const allStudents = [
  {
    id: 1,
    name: "Emily Johnson",
    year: "Senior",
    specialty: "Contemporary & Ballet",
    achievement: "Full Dance Scholarship to Juilliard",
    bio: "Emily has been dancing for 12 years and specializes in contemporary and ballet. She will be attending Juilliard on a full dance scholarship next fall.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    group: ["Senior Spotlight", "Competition Team", "Choreographers"]
  },
  {
    id: 2,
    name: "Marcus Rivera",
    year: "Junior",
    specialty: "Hip Hop & Contemporary",
    achievement: "Selected for All-State Dance Ensemble",
    bio: "Marcus brings his unique style to both hip hop and contemporary. He was selected for the All-State Dance Ensemble and plans to pursue dance professionally.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    group: ["Competition Team"]
  },
  {
    id: 3,
    name: "Sofia Chen",
    year: "Sophomore",
    specialty: "Jazz & Tap",
    achievement: "National Dance Competition Solo Winner",
    bio: "Sofia has been dancing since age 3 and excels in jazz and tap. She recently won first place in the junior solo division at Nationals.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    group: ["Competition Team"]
  },
  {
    id: 4,
    name: "David Kim",
    year: "Senior",
    specialty: "Ballet & Modern",
    achievement: "Dance Captain & Regional Ballet Award Winner",
    bio: "David has been a dedicated dancer for 10 years. As dance captain, he helps coordinate rehearsals and mentors younger students.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    group: ["Senior Spotlight", "Competition Team", "Choreographers"]
  },
  {
    id: 5,
    name: "Jasmine Williams",
    year: "Junior",
    specialty: "Contemporary & Lyrical",
    achievement: "Original Choreography Award at State Competition",
    bio: "Jasmine is known for her emotional performances and innovative choreography. Her piece 'Remembrance' won top honors at state.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    group: ["Competition Team", "Choreographers"]
  },
  {
    id: 6,
    name: "Tyler Rodriguez",
    year: "Senior",
    specialty: "Hip Hop & Breaking",
    achievement: "YouTube Channel with 50K+ Subscribers",
    bio: "Tyler brings urban dance styles to our program. His YouTube tutorials have helped introduce many students to hip hop dance fundamentals.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    group: ["Senior Spotlight", "Competition Team"]
  },
  {
    id: 7,
    name: "Aaliyah Foster",
    year: "Freshman",
    specialty: "Jazz & Contemporary",
    achievement: "Rising Star Award at Regional Competition",
    bio: "As a freshman, Aaliyah has already made her mark with her technical precision and stage presence. She's our youngest competition team member.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    group: ["Competition Team"]
  },
  {
    id: 8,
    name: "Olivia Martinez",
    year: "Senior",
    specialty: "Ballet & Pointe",
    achievement: "Summer Intensive at American Ballet Theatre",
    bio: "Olivia's dedication to classical ballet has earned her acceptance to prestigious summer programs. She plans to major in Dance Education.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
    group: ["Senior Spotlight", "Competition Team", "Choreographers"]
  }
];

const Students = () => {
  const [selectedGroup, setSelectedGroup] = useState("All Students");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredStudents = allStudents
    .filter(student => 
      selectedGroup === "All Students" || student.group.includes(selectedGroup)
    )
    .filter(student => 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.achievement.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  const featuredStudents = allStudents.filter(student => student.group.includes("Senior Spotlight")).slice(0, 3);

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="bg-maroon py-20 px-4 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Talented Students</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Meet the dedicated dancers who bring passion, skill, and creativity to our program
            </p>
          </div>
        </div>
        
        {/* Featured Students Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-maroon mb-12 text-center">Senior Spotlight</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredStudents.map((student) => (
                <div 
                  key={student.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden card-hover"
                >
                  <div className="h-80 overflow-hidden">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
                      <span className="bg-gold/20 text-maroon text-xs font-medium px-2.5 py-0.5 rounded">
                        {student.year}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-1"><span className="font-medium">Specialty:</span> {student.specialty}</p>
                    <p className="text-gray-700 mb-4"><span className="font-medium">Achievement:</span> {student.achievement}</p>
                    <p className="text-gray-600">{student.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* All Students */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-maroon mb-8 text-center">Student Directory</h2>
            
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <TabsList className="grid grid-cols-2 w-full max-w-xs">
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>
                
                <div className="relative w-full sm:w-auto">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search students..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-maroon/50"
                  />
                </div>
              </div>
              
              <div className="mb-8 flex flex-wrap justify-center gap-2">
                {studentGroups.map(group => (
                  <button
                    key={group}
                    onClick={() => setSelectedGroup(group)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedGroup === group 
                        ? "bg-maroon text-white" 
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {group}
                  </button>
                ))}
              </div>
              
              <TabsContent value="grid" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredStudents.map((student) => (
                    <div 
                      key={student.id}
                      className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden card-hover"
                    >
                      <div className="h-56 overflow-hidden">
                        <img 
                          src={student.image} 
                          alt={student.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
                          <span className="bg-gold/20 text-maroon text-xs font-medium px-2 py-0.5 rounded">
                            {student.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-1">{student.specialty}</p>
                        <p className="text-xs text-gray-600">{student.achievement}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Empty state */}
                {filteredStudents.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-700">No students found</h3>
                    <p className="text-gray-500 mt-2">Try changing your search or filter criteria.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="list" className="mt-4">
                <div className="space-y-4">
                  {filteredStudents.map((student) => (
                    <div 
                      key={student.id}
                      className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex items-center gap-4 card-hover"
                    >
                      <img 
                        src={student.image} 
                        alt={student.name} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
                          <span className="bg-gold/20 text-maroon text-xs font-medium px-2 py-0.5 rounded">
                            {student.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{student.specialty}</p>
                        <p className="text-xs text-gray-600">{student.achievement}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                
                {/* Empty state */}
                {filteredStudents.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-700">No students found</h3>
                    <p className="text-gray-500 mt-2">Try changing your search or filter criteria.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Faculty Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-maroon mb-8 text-center">Our Faculty</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center card-hover">
                <div className="h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                    alt="Maria Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Maria Rodriguez</h3>
                <p className="text-gold mb-4">Dance Program Director</p>
                <p className="text-gray-600">
                  Former professional dancer with American Ballet Theatre with over 15 years of teaching experience.
                  Specializes in ballet and contemporary dance.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center card-hover">
                <div className="h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="James Wilson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">James Wilson</h3>
                <p className="text-gold mb-4">Modern & Jazz Dance Instructor</p>
                <p className="text-gray-600">
                  BFA in Dance from NYU Tisch School of the Arts. Performed with several modern dance companies
                  before joining our faculty in 2018.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center card-hover">
                <div className="h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
                    alt="Aisha Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Aisha Johnson</h3>
                <p className="text-gold mb-4">Hip Hop & Competition Team Coach</p>
                <p className="text-gray-600">
                  Commercial dancer with credits including music videos and national tours.
                  Brings industry experience and contemporary urban styles to our program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Students;
