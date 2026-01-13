/** @format */
import AboutNuroVet from '@/components/home/AboutNuroVet';
import BookDemo from '@/components/home/BookDemo';
import CustomizedDashboard from '@/components/home/CustomizedDashboard';
import FeaturesNeuroVet from '@/components/home/FeaturesNeuroVet';
import HeroBanner from '@/components/home/HeroBanner';
import MobilePlatform from '@/components/home/MobilePlatform';
import OurTestimonials from '@/components/home/OurTestimonials';
import QuickAnswers from '@/components/home/QuickAnswers';
import RecentStories from '@/components/home/RecentStories';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutNuroVet />
      <FeaturesNeuroVet />
      <CustomizedDashboard />
      <MobilePlatform />
      <WhyChooseUs />
      <RecentStories />
      <OurTestimonials />
      <QuickAnswers />
      <BookDemo />
    </>
  );
}
