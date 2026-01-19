import React from 'react';
import BlogSideBar from './BlogSideBar';
import ArticleCard from './ArticleCard';

export default function Blogs() {
  return (
    <div className="bg-blog">
      <div className="wrapper m-auto py-16 px-6 lg:px-0">
        <div className=" grid grid-cols-1 md:grid-cols-[70%_28%] gap-[2%]">
          <div>
            <ArticleCard />
          </div>
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
}
