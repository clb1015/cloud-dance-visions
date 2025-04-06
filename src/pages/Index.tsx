
import HeroSection from "@/components/home/HeroSection";
import FeaturedAccomplishments from "@/components/home/FeaturedAccomplishments";
import SizzleReel from "@/components/home/SizzleReel";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import ClassesOverview from "@/components/home/ClassesOverview";
import StudentSpotlight from "@/components/home/StudentSpotlight";
import DonationCTA from "@/components/home/DonationCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedAccomplishments />
        <ClassesOverview />
        <SizzleReel />
        <StudentSpotlight />
        <UpcomingEvents />
        <DonationCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
