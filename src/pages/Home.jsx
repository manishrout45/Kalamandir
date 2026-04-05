import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategorySection from "../components/CategorySection";
import PromoBanner from "../components/PromoBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import RecentProducts from "../components/RecentProducts";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <CategorySection />
      <Banner />
      <FeaturedProducts />
      <PromoBanner />
      <RecentProducts />
    </div>
  );
}