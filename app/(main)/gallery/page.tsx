import InnerBanner from '@/components/common/InnerBanner';
import Gallery from '@/components/sections/Gallery';
import QuickAnswers from '@/components/sections/QuickAnswers';

export default function page() {
  return (
    <div>
      <InnerBanner
        bannerInfo={{
          background: {
            image: '/images/innerbg.jpg',
          },
          title: 'Gallery',
        }}
      />
      <Gallery />
      <QuickAnswers />
    </div>
  );
}
