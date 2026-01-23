import Blogs from '@/components/Articles/Blogs';
import InnerBanner from '@/components/common/InnerBanner';
import { BlogEndPoints } from '@/lib/service/BlogsEndPoints';
import React from 'react';

export default async function page() {
  const blogs = await BlogEndPoints.blogList(1);
  const { bgImage, title } = blogs || {};

  return (
    <div>
      <InnerBanner
        bannerInfo={{
          background: {
            image: bgImage,
          },
          title: title,
        }}
        className="bg-blog"
      />
      <Blogs blogs={blogs} />
    </div>
  );
}
