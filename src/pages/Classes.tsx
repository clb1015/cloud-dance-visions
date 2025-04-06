
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const classData = {
  courseOfferings: [
    {
      id: 1,
      title: "Ballet",
      levels: ["Beginner", "Intermediate", "Advanced"],
      description: "Classical ballet technique training with emphasis on alignment, grace, and precision. Students learn proper posture, turnout, and classical movements.",
      image: "https://images.unsplash.com/photo-1573750216255-6510723e3913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Contemporary",
      levels: ["Intermediate", "Advanced"],
      description: "Modern dance style combining elements of jazz, lyrical, and classical ballet. Focus on fluidity, expression, and floor work.",
      image: "https://images.unsplash.com/photo-1641658510786-330bf01bd588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Hip Hop",
      levels: ["Beginner", "Intermediate", "Advanced"],
      description: "Urban dance styles focusing on rhythm, isolation movements, and self-expression. Students learn various hip hop techniques and choreography.",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 4,
      title: "Jazz",
      levels: ["Beginner", "Intermediate", "Advanced"],
      description: "Energetic dance style emphasizing strong technique, performance skills, and musicality. Focuses on turns, leaps, and dynamic movement combinations.",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
    },
    {
      id: 5,
      title: "Tap",
      levels: ["Beginner", "Intermediate"],
      description: "Rhythmic dance style using the sounds of tap shoes striking the floor. Students develop musicality, rhythm, and coordination.",
      image: "https://images.unsplash.com/photo-1490926009737-7fadb50c5e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 6,
      title: "Dance Composition",
      levels: ["Advanced"],
      description: "Study of choreographic principles and composition techniques. Students create original works while developing their artistic voice.",
      image: "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ],
  
  extracurricularOpportunities: [
    {
      id: 1,
      title: "Competition Dance Team",
      description: "Our elite performance group representing St. Cloud High School at regional and national competitions.",
      requirements: "Audition required, minimum 2 years of dance experience"
    },
    {
      id: 2,
      title: "Dance Club",
      description: "Open to all students interested in dance, focusing on fun, fitness, and building community through movement.",
      requirements: "No experience necessary, all students welcome"
    },
    {
      id: 3,
      title: "Student Choreography Showcase",
      description: "Annual event featuring original works created and performed by students.",
      requirements: "Enrollment in Dance Composition or teacher recommendation"
    }
  ]
};

const Classes = () => {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="bg-maroon py-20 px-4 text-white relative">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dance Classes & Opportunities</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              From technical training to performance opportunities, discover the many ways to grow as a dancer at St. Cloud High School
            </p>
          </div>
        </div>
        
        {/* Content Tabs */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="courses">Course Offerings</TabsTrigger>
                <TabsTrigger value="opportunities">Extracurricular</TabsTrigger>
              </TabsList>
              
              {/* Course Offerings Tab */}
              <TabsContent value="courses" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {classData.courseOfferings.map((course) => (
                    <div 
                      key={course.id}
                      className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden card-hover"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-col mb-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {course.levels.map((level, index) => (
                              <span 
                                key={index}
                                className="bg-gold/20 text-maroon text-xs font-medium px-2.5 py-0.5 rounded"
                              >
                                {level}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{course.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-maroon mb-4">How to Register</h3>
                  <p className="text-gray-600 mb-6">
                    Registration for dance classes takes place during regular school course selection. 
                    Contact your guidance counselor or the dance department for assistance in selecting 
                    the appropriate level and class that fits your schedule.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-maroon hover:bg-maroon/90">
                      <a href="mailto:dance@stcloudhigh.edu">Email Department</a>
                    </Button>
                    <Button variant="outline" className="border-maroon text-maroon hover:bg-maroon/10">
                      <a href="tel:+14073934700">Call: (407) 393-4700</a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Extracurricular Opportunities Tab */}
              <TabsContent value="opportunities" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {classData.extracurricularOpportunities.map((opportunity) => (
                    <div 
                      key={opportunity.id}
                      className="bg-white border border-gray-200 rounded-lg shadow-md p-6 card-hover"
                    >
                      <h3 className="text-xl font-bold text-maroon mb-3">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-medium text-gray-800 mb-1">Requirements:</h4>
                        <p className="text-gray-600 text-sm">{opportunity.requirements}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-bold text-maroon mb-4">Join Our Dance Community</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    Interested in any of our extracurricular dance opportunities? Reach out to our dance 
                    faculty or stop by the dance studio during lunch hours for more information.
                  </p>
                  <Link 
                    to="/events" 
                    className="inline-flex items-center text-maroon hover:text-gold transition-colors"
                  >
                    See upcoming audition dates and events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="text-2xl md:text-3xl font-dancing text-maroon italic max-w-3xl mx-auto">
              "Dance is the hidden language of the soul. At St. Cloud High School, we give students 
              the tools to speak that language with confidence, skill, and artistic integrity."
            </blockquote>
            <cite className="block mt-4 text-gray-600 font-medium">
              — Maria Rodriguez, Dance Program Director
            </cite>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Classes;
