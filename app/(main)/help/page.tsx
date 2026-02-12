import InnerBanner from '@/components/common/InnerBanner';
import EmergencyContact from '@/components/sections/EmergencyContact';
import FeatureGuide from '@/components/sections/FeatureGuide';
import HelpCenterBanner from '@/components/sections/HelpCenterBanner';
import Reviews from '@/components/sections/Reviews';
import { AboutPageEndPoints } from '@/lib/service/AboutUsPageEndPoints';
import { HelpCenterPageEndPoints } from '@/lib/service/HelpCenterPageEndPoints';


export default async function page() {
  const reviewsData = await AboutPageEndPoints.reviews();
  const banner = await HelpCenterPageEndPoints.heroBanner();
  const emergency = await HelpCenterPageEndPoints.emergency();
  const bannerSection = await HelpCenterPageEndPoints.bannerSection();
  const features = await HelpCenterPageEndPoints.features();

  return (
    <>
      <InnerBanner
        bannerInfo={banner}
        className="bg-color"
      />
      <HelpCenterBanner bannerSection={bannerSection} />
      <FeatureGuide featuresData={features} />
      <EmergencyContact emergency={emergency} />
      <Reviews reviewsData={reviewsData} />
    </>
  );
}
