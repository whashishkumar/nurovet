import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import BlogCard from './BlogCard';

export default function Articles() {
  return (
    <div className="bg-color">
      <div className="inner-wrapper m-auto lg:py:16 py-12 lg:px-0 px-6 ">
        <div className="flex justify-center">
          <SectionBadge label="Articles & Tips" icon="/icons/bone.svg" />
        </div>
        <SectionHeading title={'Latest Articles & Blog'} />
        <BlogCard />
      </div>
    </div>
  );
}
