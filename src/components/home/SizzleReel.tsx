
const SizzleReel = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-maroon mb-4">Experience Our Passion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our dancers in action and witness the dedication, technique, and artistry that defines the St. Cloud High School Dance Program.
          </p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden">
          <iframe 
            className="w-full h-96 md:h-[500px] rounded-lg"
            src="https://www.youtube.com/embed/LXb3EKWsInQ" 
            title="St. Cloud High School Dance Program Sizzle Reel" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SizzleReel;
