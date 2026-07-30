import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClubStrip from "../components/ClubStrip";
import NewArrivals from "../sections/NewArrivals";
import TopSelling from "../sections/TopSelling";
import LeagueSection from "../sections/LeaguesSection";
import Review from "../components/Reviews";
import Letter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClubStrip />
      <NewArrivals />
      <TopSelling />
       <LeagueSection />
        <Review />
         <Letter/>
          <Footer />

    </>
  );
}

export default Home;