import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import BlogCard from './BlogCard';

export default function Articles({ article }: any) {
  const { articles, heading, tag, tagicon, subHeading } = article || {};

  return (
    <div className="bg-color">
      <div className="inner-wrapper m-auto lg:py:16 py-12 lg:px-0 px-6 ">
        <div className="flex justify-center">
          <SectionBadge label={tag} icon={tagicon} />
        </div>
        <SectionHeading title={heading} subTitle={subHeading} />
        <BlogCard articles={articles} />
      </div>
    </div>
  );
}
