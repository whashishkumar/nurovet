import InnerBanner from '@/components/common/InnerBanner';
import EmergencyContact from '@/components/sections/EmergencyContact';
import FeatureGuide from '@/components/sections/FeatureGuide';
import FeaturesNeuroVet from '@/components/sections/FeaturesNeuroVet';
import HelpCenterBanner from '@/components/sections/HelpCenterBanner';
// import HelpCenterServices from '@/components/sections/HelpCenterServices';
import Reviews from '@/components/sections/Reviews';
import { AboutPageEndPoints } from '@/lib/service/AboutUsPageEndPoints';
import { HelpCenterPageEndPoints } from '@/lib/service/HelpCenterPageEndPoints';
import { HomePageEndPoints } from '@/lib/service/HomePageEndPoints';


export default async function page() {
  const featuresNuroVet = await HomePageEndPoints.featuresSection();
  const reviewsData = await AboutPageEndPoints.reviews();
  const banner = await HelpCenterPageEndPoints.heroBanner();
  const services = await HelpCenterPageEndPoints.services();
  const emergency = await HelpCenterPageEndPoints.emergency();

  return (
    <>
      <InnerBanner
        bannerInfo={banner}
        className="bg-color"
      />
      {/* <FeaturesNeuroVet featuresNuroVet={featuresNuroVet} /> */}
      {/* <HelpCenterServices services={services} /> */}
      <HelpCenterBanner />
      <FeatureGuide />
      <EmergencyContact emergency={emergency} />
      <Reviews reviewsData={reviewsData} />
    </>
  );
}
