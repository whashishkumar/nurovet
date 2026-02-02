import InnerBanner from '@/components/common/InnerBanner';
import Gallery from '@/components/sections/Gallery';
import QuickAnswers from '@/components/sections/QuickAnswers';
import { GalleryPageEndPoints } from '@/lib/service/GalleryPageEndPoints';
import { HomePageEndPoints } from '@/lib/service/HomePageEndPoints';


export default async function page() {
  const faqSection = await HomePageEndPoints.faqSection();
  const bannerInfo = await GalleryPageEndPoints.heroBanner();
  const galleryData = await GalleryPageEndPoints.gallery();
  const faq = await GalleryPageEndPoints.faq();

  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} />
      <Gallery galleryData={galleryData} />
      <QuickAnswers faqSection={faqSection} />
    </div>
  );
}
