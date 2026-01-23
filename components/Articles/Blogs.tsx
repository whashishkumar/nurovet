'use client';
import { useEffect, useState } from 'react';
import BlogSideBar from './BlogSideBar';
import ArticleCard from './ArticleCard';
import Pagination from '../ui/Pagination';
import { BlogEndPoints } from '@/lib/service/BlogsEndPoints';
import Loader from '../ui/Loader';

export default function Blogs({ blogs }: any) {
  const { data, meta } = blogs || {};
  const [page, setPage] = useState(1);
  const { current_page, last_page } = meta || {};
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setCurrentArticle] = useState([]);

  const handePageChange = async (page: number) => {
    setPage(page);
    try {
      setIsLoading(true);
      const blogs = await BlogEndPoints.blogList(page);
      setCurrentArticle(blogs?.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getBlogs = async () => {
    try {
      setIsLoading(true);
      const blogs = await BlogEndPoints.blogList(page);
      setCurrentArticle(blogs?.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const articlesData = articles ? articles : data;

  useEffect(() => {
    getBlogs();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-blog min-h-screen">
      <div className="wrapper m-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[70%_28%] gap-[2%] min-h-[80vh]">
          <div className="space-y-10 overflow-y-auto h-fit pr-2">
            {articlesData?.map((article: any, index: any) => (
              <ArticleCard key={index} article={article} />
            ))}
            <Pagination
              config={{ totalPages: last_page }}
              currentPage={page}
              onChange={handePageChange}
            />
          </div>
          <div className="hidden md:block sticky top-24 h-fit">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
