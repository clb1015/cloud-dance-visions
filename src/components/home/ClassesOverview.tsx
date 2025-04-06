
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const classes = [
  {
    id: 1,
    title: "Ballet",
    level: "All Levels",
    description: "Classical ballet technique training with emphasis on alignment, grace, and precision.",
    icon: "🩰"
  },
  {
    id: 2,
    title: "Contemporary",
    level: "Intermediate-Advanced",
    description: "Modern dance style combining elements of jazz, lyrical, and classical ballet.",
    icon: "✨"
  },
  {
    id: 3,
    title: "Hip Hop",
    level: "All Levels",
    description: "Urban dance styles focusing on rhythm, isolation movements, and self-expression.",
    icon: "🎵"
  },
  {
    id: 4,
    title: "Jazz",
    level: "All Levels",
    description: "Energetic dance style emphasizing strong technique, performance skills, and musicality.",
    icon: "💃"
  },
];

const ClassesOverview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-maroon mb-4">Dance Classes & Opportunities</h2>
          <p className="text-gray-600">
            Our program offers a wide range of classes designed to nurture technical skills, 
            artistic expression, and a lifelong love for dance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {classes.map((classItem) => (
            <div 
              key={classItem.id}
              className="bg-white rounded-lg shadow-md p-6 flex items-start card-hover"
            >
              <div className="mr-4 text-4xl">{classItem.icon}</div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{classItem.title}</h3>
                  <span className="bg-gold/20 text-maroon text-xs font-medium px-2.5 py-0.5 rounded">
                    {classItem.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{classItem.description}</p>
                <Link 
                  to="/classes" 
                  className="text-sm text-maroon hover:text-gold transition-colors flex items-center"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-maroon hover:bg-maroon/90">
            <Link to="/classes">View All Classes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassesOverview;
