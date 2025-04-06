
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Emily Johnson",
    achievement: "Full Dance Scholarship to Juilliard",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    year: "Senior"
  },
  {
    id: 2,
    name: "Marcus Rivera",
    achievement: "Selected for the All-State Dance Ensemble",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    year: "Junior"
  },
  {
    id: 3,
    name: "Sofia Chen",
    achievement: "National Dance Competition Solo Winner",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    year: "Sophomore"
  },
];

const StudentSpotlight = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-maroon mb-2">Student Spotlights</h2>
            <p className="text-gray-600">Celebrating our talented dancers and their achievements</p>
          </div>
          <Link to="/students" className="group flex items-center text-maroon hover:text-gold transition-colors mt-4 md:mt-0">
            See all students 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {students.map((student) => (
            <div 
              key={student.id}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-lg card-hover"
            >
              <div className="h-64 overflow-hidden">
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
                <p className="text-gray-600 mb-4">{student.achievement}</p>
                <Link 
                  to="/students"
                  className="text-sm text-maroon hover:text-gold transition-colors flex items-center"
                >
                  Full profile
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSpotlight;
