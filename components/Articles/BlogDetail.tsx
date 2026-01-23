'use client';
import { useEffect, useState } from 'react';
import { BlogEndPoints } from '@/lib/service/BlogsEndPoints';
import Loader from '../ui/Loader';
import React from 'react';
import BlogSideBar from './BlogSideBar';
import BlogDetailCard from './BlogDetailCard';
import CommentForm from '../common/CommentForm';
import { useParams, usePathname } from 'next/navigation';

const blogInfo = [
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

export const commentHeaderData = {
  title: 'Leave comments',
  note: 'Your email address will not be published. Required fields are marked *',
};

export default function BlogDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setCurrentArticle] = useState([]);
  const { slug } = useParams();
  const {} = article || {};

  const getBlogs = async (slug: any) => {
    try {
      setIsLoading(true);
      const blogs = await BlogEndPoints.blogDetails(slug);
      setCurrentArticle(blogs);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBlogs(slug);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  console.log(article, 'article');

  return (
    <div className="bg-blog">
      <div className="wrapper m-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[70%_28%] gap-[2%] min-h-[80vh]">
          <div className="space-y-10 overflow-y-auto h-fit pr-2">
            {blogInfo.map((blog, index) => (
              <BlogDetailCard key={index} data={blog} />
            ))}
            <div className="max-w-4xl justify-center mx-auto py-16">
              <CommentForm />
            </div>
          </div>
          <div className="hidden md:block sticky top-24 h-fit">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
