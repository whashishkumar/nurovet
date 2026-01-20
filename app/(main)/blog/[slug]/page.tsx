import BlogDetail from '@/components/Articles/BlogDetail';
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
          title: 'Blogs-slug',
        }}
        className="bg-blog"
      />
      <BlogDetail />
    </div>
  );
}
