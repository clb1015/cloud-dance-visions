import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const donationLevels = [
  {
    id: "friend",
    name: "Friend",
    amount: 25,
    description: "Provides dance shoes for a student in need",
    benefits: ["Name in performance programs", "Thank you email"]
  },
  {
    id: "supporter",
    name: "Supporter",
    amount: 50,
    description: "Helps cover competition entry fees",
    benefits: ["Name in performance programs", "Thank you email", "Social media shoutout"]
  },
  {
    id: "patron",
    name: "Patron",
    amount: 100,
    description: "Funds costume expenses for competitions",
    benefits: ["Name in performance programs", "Thank you email", "Social media shoutout", "2 tickets to a showcase performance"]
  },
  {
    id: "benefactor",
    name: "Benefactor",
    amount: 250,
    description: "Sponsors a dancer for summer intensive",
    benefits: ["Name in performance programs", "Thank you email", "Social media shoutout", "4 VIP tickets to a showcase performance", "Personal thank you note from students"]
  }
];

const Donate = () => {
  const { toast } = useToast();
  const [selectedLevel, setSelectedLevel] = useState(donationLevels[1].id);
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    comment: ""
  });
  
  const handleDonorInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!donorInfo.firstName || !donorInfo.lastName || !donorInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Show success message (in a real app, this would submit to a payment processor)
    toast({
      title: "Thank You!",
      description: "Your donation has been received. We'll be in touch soon!",
    });
    
    // Reset form
    setDonorInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: ""
    });
  };

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="bg-maroon py-20 px-4 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Dancers</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Your contribution helps our students grow as artists and provides opportunities they might not otherwise have
            </p>
          </div>
        </div>
        
        {/* Why Donate Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-maroon mb-6 text-center">Why Your Support Matters</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm card-hover">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Your Donation Provides</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Competition fees for students who can't afford them</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Quality costumes and performance attire</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Dance shoes and specialized equipment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Guest choreographers and master classes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Transportation to competitions and performances</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Scholarships for summer intensives and workshops</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm card-hover">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Program Impact</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>85% of our dance program graduates go on to pursue higher education</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>30% of our dancers receive college dance scholarships</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Students report improved confidence, discipline, and time management</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Dance program GPA average is 3.6, above school average</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Our program serves over 120 students annually</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gold mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Dancers perform 15+ community outreach shows annually</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-maroon/5 p-6 rounded-lg border border-maroon/20">
                <blockquote className="text-lg italic text-gray-700">
                  "The dance program at St. Cloud High School changed my life. The confidence and discipline I gained 
                  helped me achieve my dream of dancing professionally. None of it would have been possible without 
                  the support of donors who funded my competition fees and summer workshops."
                </blockquote>
                <cite className="block mt-4 text-right text-gray-600 not-italic">
                  — Amanda Peters, Class of 2020, Now dancing with Orlando Ballet
                </cite>
              </div>
            </div>
          </div>
        </div>
        
        {/* Donation Form Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-maroon mb-8 text-center">Make a Donation</h2>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-maroon text-white p-8">
                  <h3 className="text-xl font-bold mb-4">Donation Levels</h3>
                  <div className="space-y-4">
                    {donationLevels.map((level) => (
                      <div 
                        key={level.id}
                        className={`p-3 rounded-md cursor-pointer transition-colors ${
                          selectedLevel === level.id 
                            ? "bg-white text-maroon" 
                            : "bg-maroon/20 text-white hover:bg-white/10"
                        }`}
                        onClick={() => {
                          setSelectedLevel(level.id);
                          setCustomAmount("");
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold">{level.name}</h4>
                          <span>${level.amount}</span>
                        </div>
                        <p className="text-sm mt-1 opacity-80">{level.description}</p>
                      </div>
                    ))}
                    
                    <div 
                      className={`p-3 rounded-md cursor-pointer transition-colors ${
                        !donationLevels.find(level => level.id === selectedLevel) 
                          ? "bg-white text-maroon" 
                          : "bg-maroon/20 text-white hover:bg-white/10"
                      }`}
                      onClick={() => {
                        setSelectedLevel("custom");
                        setCustomAmount("100");
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold">Custom Amount</h4>
                        <div className="flex items-center">
                          <span className="mr-1">$</span>
                          <input 
                            type="number" 
                            className={`w-16 p-1 rounded-sm ${
                              selectedLevel === "custom" ? "bg-white text-gray-800" : "bg-transparent"
                            }`}
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value);
                              setSelectedLevel("custom");
                            }}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Your Information</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          value={donorInfo.firstName}
                          onChange={handleDonorInfoChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          value={donorInfo.lastName}
                          onChange={handleDonorInfoChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={donorInfo.email}
                          onChange={handleDonorInfoChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={donorInfo.phone}
                          onChange={handleDonorInfoChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="address">
                        Address
                      </label>
                      <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        value={donorInfo.address}
                        onChange={handleDonorInfoChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="comment">
                        Comments or Special Instructions
                      </label>
                      <textarea 
                        id="comment" 
                        name="comment" 
                        rows={3}
                        value={donorInfo.comment}
                        onChange={handleDonorInfoChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-800 mb-2">Selected Donation:</h4>
                        <p className="text-2xl font-bold text-maroon">
                          ${selectedLevel === "custom" ? customAmount : donationLevels.find(level => level.id === selectedLevel)?.amount}
                        </p>
                      </div>
                      
                      <Button type="submit" className="w-full bg-maroon hover:bg-maroon/90 text-lg">
                        Donate Now
                      </Button>
                      
                      <p className="text-sm text-gray-500 mt-4 text-center">
                        Your donation is tax deductible. You will receive a receipt via email.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Ways to Help */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-maroon mb-8 text-center">Other Ways to Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm card-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  Help with performances, competitions, fundraisers, and special events.
                  We need assistance with costumes, props, concessions, and more.
                </p>
                <Button variant="outline" className="w-full border-maroon text-maroon hover:bg-maroon hover:text-white">
                  Contact Us to Volunteer
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm card-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sponsor a Show</h3>
                <p className="text-gray-600 mb-4">
                  Local businesses can sponsor our showcases and receive recognition in 
                  our programs, announcements, and social media.
                </p>
                <Button variant="outline" className="w-full border-maroon text-maroon hover:bg-maroon hover:text-white">
                  Business Sponsorship Info
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm card-hover">
                <h3 className="text-xl font-bold text-gray-900 mb-4">In-Kind Donations</h3>
                <p className="text-gray-600 mb-4">
                  Donate costumes, shoes, equipment, fabric, or services like photography 
                  or graphic design to support our program.
                </p>
                <Button variant="outline" className="w-full border-maroon text-maroon hover:bg-maroon hover:text-white">
                  Contact for In-Kind Donations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Donate;
