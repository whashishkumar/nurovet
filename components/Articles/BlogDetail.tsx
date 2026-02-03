'use client';
import { useEffect, useState } from 'react';
import { BlogEndPoints } from '@/lib/service/BlogsEndPoints';
import Loader from '../ui/Loader';
import React from 'react';
import BlogSideBar from './BlogSideBar';
import BlogDetailCard from './BlogDetailCard';
import CommentForm from '../common/CommentForm';
import { useParams } from 'next/navigation';
import { FaUserCircle, FaClock } from 'react-icons/fa';

export const commentHeaderData = {
  title: 'Leave comments',
  note: 'Your email address will not be published. Required fields are marked *',
};

const BlogComments = ({ commentsData }: any) => {
  const { total, items } = commentsData || {};

  return (
    <section className="max-w-4l mx-auto  px-4">
      <h2 className="text-2xl font-bold mb-8 fredoka">{total} Comments</h2>

      <div className="space-y-6">
        {items?.map((item: any) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm  p-6 hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#00603a]">
                <FaUserCircle />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-black capitalize">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.email}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaClock />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-700 figtree">{item.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function BlogDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setCurrentArticle] = useState([]);
  const { slug } = useParams();
  const { data }: any = article || {};
  const [comments, setComments] = useState([]);


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

  const getBlogCommentList = async (slug: any) => {
    try {
      setIsLoading(true);
      const comment = await BlogEndPoints.getComments(slug);
      setComments(comment);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const FilterBlogs = async (search = '', tag = '', category = '') => {
    console.log(search,tag,category,"search,tag,category");
    try {
      setIsLoading(true);
      const filter = await BlogEndPoints.getfilteredPosts( search, tag, category);
      // setCurrentArticle(filter);
      console.log('Filtered blogs:', filter);
    } catch (error) {
      console.error('Failed to filter blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    getBlogs(slug);
    getBlogCommentList(slug);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-blog">
      <div className="wrapper m-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[70%_28%] gap-[2%] min-h-[80vh]">
          <div className="space-y-10  h-fit pr-2">
            <BlogDetailCard data={data} />
            <div className="max-w-4xl justify-center mx-auto py-12">
              <BlogComments commentsData={comments} />
            </div>
            <div className="max-w-4xl justify-center mx-auto py-1">
              <CommentForm getBlogCommentList={getBlogCommentList} />
            </div>
          </div>
          <div className="hidden md:block sticky top-24 h-fit">
            <BlogSideBar onFilter={FilterBlogs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
