'use client';
import { useEffect, useState } from 'react';
import BlogSideBar from './BlogSideBar';
import ArticleCard from './ArticleCard';
import Pagination from '../ui/Pagination';
import { BlogEndPoints } from '@/lib/service/BlogsEndPoints';
import Loader from '../ui/Loader';
// import { useSearchParams } from 'next/navigation';

export default function Blogs({ blogs }: any) {
  const { data, meta } = blogs || {};
  const [page, setPage] = useState(1);
  const { last_page } = meta || {};
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setCurrentArticle] = useState([]);
  const [filters, setFilters] = useState({ search: '', tag: '', category: '' });

  // const searchParams = useSearchParams();

  const FilterBlogs = async (search: string, tag: string, category: string) => {
    setFilters({ search, tag, category });
    try {
      setIsLoading(true);
      const blogs = await BlogEndPoints.getfilteredPosts(search, tag, category);
      setCurrentArticle(blogs?.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handePageChange = async (page: number) => {
    setPage(page);
    try {
      setIsLoading(true);
      const blogs =
        filters.search || filters.tag || filters.category
          ? await BlogEndPoints.getfilteredPosts(filters?.search, filters?.tag, filters?.category)
          : await BlogEndPoints.blogList(page);
      setCurrentArticle(blogs?.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const articlesData = articles.length > 0 ? articles : data;

  useEffect(() => {
    // const tag = searchParams.get('tag') || '';
    // if (tag) {
    //   FilterBlogs('', tag, '');
    // } else {
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
    getBlogs();
    // }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-blog min-h-screen">
      <div className="wrapper m-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[70%_28%] gap-[2%] min-h-[80vh]">
          <div className="relative  h-full space-y-10">
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
              {articlesData?.map((article: any, index: any) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
            <Pagination
              config={{ totalPages: last_page }}
              currentPage={page}
              onChange={handePageChange}
            />
          </div>
          <div className="hidden md:block sticky top-24 h-fit">
            <BlogSideBar onFilter={FilterBlogs} />
          </div>
        </div>
      </div>
    </div>
  );
}
