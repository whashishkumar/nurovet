import InnerBanner from '@/components/common/InnerBanner';
import QuickAnswers from '@/components/sections/QuickAnswers';
import Reviews from '@/components/sections/Reviews';
import { AboutPageEndPoints } from '@/lib/service/AboutUsPageEndPoints';
import { FAQPageEndPoints } from '@/lib/service/FAQEndPoints';
import { HomePageEndPoints } from '@/lib/service/HomePageEndPoints';

export default async function page() {
  const faqSection = await HomePageEndPoints.faqSection();
  const reviewsData = await AboutPageEndPoints.reviews();
  const bannerdata = await FAQPageEndPoints.heroBanner();
  const faq = await FAQPageEndPoints.faq();

  return (
    <div>
      <InnerBanner
        bannerInfo={bannerdata}
        className="bg-color"
      />
      <QuickAnswers faqSection={faqSection} />
      <Reviews reviewsData={reviewsData} />
    </div>
  );
}
