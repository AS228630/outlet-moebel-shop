import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import TrustBar from "@/components/TrustBar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import PromoBanner from "@/components/PromoBanner";
import TopOffers from "@/components/TopOffers";
import InspirationCards from "@/components/InspirationCards";
import BrandsRow from "@/components/BrandsRow";
import ReviewsSection from "@/components/ReviewsSection";
import TrustBadgesRow from "@/components/TrustBadgesRow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <CategoryNav />
      <TrustBar />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <PromoBanner />
        <TopOffers />
        <InspirationCards />
        <BrandsRow />
        <ReviewsSection />
      </main>
      <TrustBadgesRow />
      <Footer />
    </>
  );
}
