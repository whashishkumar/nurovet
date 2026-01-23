'use client';
import { BlogEndPoints } from '@/lib/service/BlogsEndPoints';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineCalendar, HiOutlineLink } from 'react-icons/hi';

// const categoriesData = {
//   title: 'Categories',
//   items: [
//     { id: 1, name: 'Bath & Spa', count: 3 },
//     { id: 2, name: 'Face Trim', count: 4 },
//     { id: 3, name: 'Fluff & Brush', count: 3 },
//     { id: 4, name: 'Pet grooming', count: 4 },
//     { id: 5, name: 'Teeth Cleaning', count: 4 },
//   ],
// };

// const recentPostsData = {
//   title: 'Recent Posts',
//   posts: [
//     {
//       id: 1,
//       title: 'How To Keep Your Loved Ones Healthy Year-Round',
//       date: 'October 5, 2025',
//       image: '/images/service1.jpg',
//       featured: false,
//     },
//     {
//       id: 2,
//       title: 'How To Look After Dogs Loved Ones Healthy',
//       date: 'October 5, 2025',
//       image: '/images/service2.jpg',
//       featured: true,
//     },
//     {
//       id: 3,
//       title: 'Essential Tips For A Healthy Pet Life Throughout',
//       date: 'October 5, 2025',
//       image: '/images/service3.jpg',
//       featured: false,
//     },
//   ],
// };

// const tagsData = {
//   title: 'Tags',
//   activeBar: true,
//   tags: ['Cat', 'Dog', 'Grooming', 'Nutrition', 'Pet Care', 'Picky', 'Reduction'],
// };

const CategoriesCard = ({ categories }: any) => {
  const { title, data } = categories || {};
  const router = useRouter();

  const handleSelectCategory = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="max-w-sm bg-[#F9F6F1] rounded-xl p-6 shadow-sm border border-gray-100 font-sans">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-black fredoka">{title}</h2>
        <div className="relative mt-4">
          <div className="h-0.5 w-full bg-gray-200 rounded-full" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.75 w-20  rounded-xl" />
        </div>
      </div>
      <div className="space-y-2">
        {data?.map((item: any, index: number) => (
          <div key={item.id} onClick={() => handleSelectCategory(item?.slug)}>
            <div className="flex items-center justify-between py-2 figtree cursor-pointer">
              <span className="text-base text-black font-medium ">{item.name}</span>
              <span className="text-base text-black font-medium ">({item.count})</span>
            </div>
            {/* Divider */}
            {index !== data?.length - 1 && <hr className="border-gray-200 mt-3" />}
          </div>
        ))}
      </div>
    </div>
  );
};

const RecentPostsCard = ({ recentPosts }: any) => {
  const { title, data } = recentPosts || {};
  const router = useRouter();

  const handleSelectBlog = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="max-w-sm bg-[#F9F6F1] rounded-xl p-8 shadow-sm border border-gray-100 figtree">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black fredoka">{title}</h2>
        <div className="relative mt-4">
          <div className="h-0.5 w-full bg-gray-200 rounded-full" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.75 w-20 rounded-xl" />
        </div>
      </div>
      {/* Posts */}
      <div className="space-y-6">
        {data?.map((post: any) => (
          <div key={post.id} className="flex items-start gap-4 group cursor-pointer">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
              {post?.image && (
                <Image src={post?.image} alt={post.title || 'img'} fill className="object-cover" />
              )}
              {post.featured && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <HiOutlineLink className="w-8 h-8 " />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3
                onClick={() => handleSelectBlog(post?.slug)}
                className={`text-lg font-bold leading-snug transition-colors ${'text-black group-hover:text-[#0a5e3b]'}`}
              >
                {post.title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                <HiOutlineCalendar className="w-5 h-5 text-[#0a5e3b]" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TagsSection = ({ tags }: any) => {
  const { title, data } = tags || {};
  const router = useRouter();

  const handleTagPosts = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <section className="max-w-sm rounded-2xl bg-[#FDF8F2] p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <div className="relative mt-2 h-0.75 w-full bg-gray-200 rounded-full overflow-hidden">
          {data?.activeBar && <span className="absolute left-1/2 h-full w-20  rounded-full" />}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {data?.map((tag: any, index: any) => (
          <span
            key={index}
            onClick={() => handleTagPosts(tag?.slug)}
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-800 hover:border-[#0a5e3b]/90 hover:text-white hover:bg-[#0a5e3b]/90 cursor-pointer"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default function BlogSideBar() {
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [tags, setTags] = useState([]);

  const getCategories = async () => {
    const categories = await BlogEndPoints.categories();
    setCategories(categories);
  };
  const getRecentPosts = async () => {
    const recentPosts = await BlogEndPoints.recentPosts();
    setRecentPosts(recentPosts);
  };
  const getTags = async () => {
    const tags = await BlogEndPoints.tags();
    setTags(tags);
  };

  useEffect(() => {
    getCategories();
    getRecentPosts();
    getTags();
  }, []);

  return (
    <div className="grid gap-8">
      <CategoriesCard categories={categories} />
      <RecentPostsCard recentPosts={recentPosts} />
      <TagsSection tags={tags} />
    </div>
  );
}
