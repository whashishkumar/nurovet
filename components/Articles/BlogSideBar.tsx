import Image from 'next/image';
import React from 'react';
import { HiOutlineCalendar, HiOutlineLink } from 'react-icons/hi';

const categoriesData = {
  title: 'Categories',
  items: [
    { id: 1, name: 'Bath & Spa', count: 3 },
    { id: 2, name: 'Face Trim', count: 4 },
    { id: 3, name: 'Fluff & Brush', count: 3 },
    { id: 4, name: 'Pet grooming', count: 4 },
    { id: 5, name: 'Teeth Cleaning', count: 4 },
  ],
};

const recentPostsData = {
  title: 'Recent Posts',
  posts: [
    {
      id: 1,
      title: 'How To Keep Your Loved Ones Healthy Year-Round',
      date: 'October 5, 2025',
      image: '/images/service1.jpg',
      featured: false,
    },
    {
      id: 2,
      title: 'How To Look After Dogs Loved Ones Healthy',
      date: 'October 5, 2025',
      image: '/images/service2.jpg',
      featured: true,
    },
    {
      id: 3,
      title: 'Essential Tips For A Healthy Pet Life Throughout',
      date: 'October 5, 2025',
      image: '/images/service3.jpg',
      featured: false,
    },
  ],
};

const CategoriesCard = () => {
  return (
    <div className="max-w-sm bg-[#F9F6F1] rounded-4xl p-8 shadow-sm border border-gray-100 font-sans">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-black fredoka">{categoriesData.title}</h2>
        <div className="relative mt-4">
          <div className="h-0.5 w-full bg-gray-200 rounded-full" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.75 w-20  rounded-full" />
        </div>
      </div>
      <div className="space-y-5">
        {categoriesData.items.map((item, index) => (
          <div key={item.id}>
            <div className="flex items-center justify-between py-2">
              <span className="text-lg text-black font-medium ">{item.name}</span>
              <span className="text-lg text-black font-medium">({item.count})</span>
            </div>
            {/* Divider */}
            {index !== categoriesData.items.length - 1 && <hr className="border-gray-200 mt-3" />}
          </div>
        ))}
      </div>
    </div>
  );
};

const RecentPostsCard = () => {
  return (
    <div className="max-w-sm bg-[#F9F6F1] rounded-4xl p-8 shadow-sm border border-gray-100 font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black fredoka">{recentPostsData.title}</h2>
        <div className="relative mt-4">
          <div className="h-0.5 w-full bg-gray-200 rounded-full" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.75 w-20 rounded-full" />
        </div>
      </div>
      {/* Posts */}
      <div className="space-y-6">
        {recentPostsData.posts.map((post) => (
          <div key={post.id} className="flex items-start gap-4 group cursor-pointer">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
              {post.featured && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <HiOutlineLink className="w-8 h-8 " />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3
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

export default function BlogSideBar() {
  return (
    <div className="grid gap-8">
      <CategoriesCard />
      <RecentPostsCard />
    </div>
  );
}
