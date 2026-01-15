import InnerBanner from '@/components/common/InnerBanner';
import Gallery from '@/components/home/Gallery';
import QuickAnswers from '@/components/home/QuickAnswers';

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
