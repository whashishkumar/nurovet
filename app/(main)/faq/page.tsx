import InnerBanner from '@/components/common/InnerBanner';
import QuickAnswers from '@/components/sections/QuickAnswers';
import Reviews from '@/components/sections/Reviews';
import { HomePageEndPoints } from '@/lib/service/HomePageEndPoints';

export default async function page() {
  const faqSection = await HomePageEndPoints.faqSection();
  return (
    <div>
      <InnerBanner
        bannerInfo={{
          background: {
            image: '/images/innerbg.jpg',
          },
          title: 'Contact Us',
        }}
        className="bg-color"
      />
      <QuickAnswers faqSection={faqSection} />
      <Reviews />
    </div>
  );
}
