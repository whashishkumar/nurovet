import Blogs from '@/components/Articles/Blogs';
import InnerBanner from '@/components/common/InnerBanner';
import React from 'react';

export default function page() {
  return (
    <div>
      <InnerBanner
        bannerInfo={{
          background: {
            image: '/images/innerbg.jpg',
          },
          title: 'Blogs',
        }}
        className="bg-blog"
      />
      <Blogs />
    </div>
  );
}
