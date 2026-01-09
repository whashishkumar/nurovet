/** @format */

import AboutNuroVet from '@/components/home/AboutNuroVet';
import CustomizedDashboard from '@/components/home/CustomizedDashboard';
import FeaturesNeuroVet from '@/components/home/FeaturesNeuroVet';
import HeroBanner from '@/components/home/HeroBanner';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutNuroVet />
      <FeaturesNeuroVet />
      <CustomizedDashboard />
    </>
  );
}
