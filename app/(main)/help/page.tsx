import InnerBanner from '@/components/common/InnerBanner';
import EmergencyContact from '@/components/sections/EmergencyContact';
import FeaturesNeuroVet from '@/components/sections/FeaturesNeuroVet';
import HelpCenterServices from '@/components/sections/HelpCenterServices';
import Reviews from '@/components/sections/Reviews';
import { AboutPageEndPoints } from '@/lib/service/AboutUsPageEndPoints';
import { HomePageEndPoints } from '@/lib/service/HomePageEndPoints';

export default async function page() {
    const featuresNuroVet = await HomePageEndPoints.featuresSection();
     const reviewsData = await AboutPageEndPoints.reviews();return (
    <>
      <InnerBanner
        bannerInfo={{
          background: {
            image: '/images/innerbg.jpg',
          },
          title: 'Contact Us',
        }}
        className="bg-color"
      />
      <FeaturesNeuroVet featuresNuroVet={featuresNuroVet} />
      <HelpCenterServices/>
      <EmergencyContact/>
      <Reviews reviewsData={reviewsData} />
    </>
  );
}
