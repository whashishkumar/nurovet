import React from 'react';
import BlogSideBar from './BlogSideBar';
import ArticleCard from './ArticleCard';
import Pagination from '../ui/Pagination';
export const paginationConfig = {
  totalPages: 10,
  initialPage: 1,
};

const blogData = [
  {
    author: 'Babet',
    date: 'October 5, 2025',
    comments: 0,
    title: 'How to Keep Your Loved Ones Healthy Year-Round',
    excerpt:
      'Dirt, debris, and loose fur can build up in your pet’s coat and lead to matting, hot spots, and skin care...',
    image: '/images/service3.jpg',
    slug: 'keep-your-loved-ones-healthy',
  },
  {
    author: 'Admin',
    date: 'September 18, 2025',
    comments: 3,
    title: 'Why Regular Vet Visits Matter',
    excerpt:
      'Routine checkups help detect early signs of illness and keep your pet healthy and active...',
    image: '/images/service4.jpg',
    slug: 'why-regular-vet-visits-matter',
  },
  {
    author: 'Babet',
    date: 'October 5, 2025',
    comments: 0,
    title: 'How to Keep Your Loved Ones Healthy Year-Round',
    excerpt:
      'Dirt, debris, and loose fur can build up in your pet’s coat and lead to matting, hot spots, and skin care...',
    image: '/images/service3.jpg',
    slug: 'keep-your-loved-ones-healthy',
  },
];

export default function Blogs() {
  return (
    <div className="bg-blog min-h-screen">
      <div className="wrapper m-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[70%_28%] gap-[2%] min-h-[80vh]">
          <div className="space-y-10 overflow-y-auto h-fit pr-2">
            {blogData.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
            <Pagination config={paginationConfig} />
          </div>
          <div className="hidden md:block sticky top-24 h-fit">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
