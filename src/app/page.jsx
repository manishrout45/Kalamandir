import HeroSlider from '@/components/home/HeroSlider';
import CategorySection from '@/components/home/CategorySection';
import PromoBanner from '@/components/home/PromoBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import RecentProducts from '@/components/home/RecentProducts';
import Banner from '@/components/home/Banner';

export default function HomePage() {
  return (
    <div className=" ">
      <HeroSlider />
      <CategorySection />
      <Banner />
      <FeaturedProducts />
      <PromoBanner />
      <RecentProducts />
    </div>
  );
}
