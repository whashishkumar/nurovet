'use client';

import React from 'react';
import Image from 'next/image';
import { HiOutlineUser, HiOutlineCalendar, HiOutlineChat } from 'react-icons/hi';

const articleData = {
  author: 'Babet',
  date: 'October 5, 2025',
  comments: 0,
  title: 'How to Keep Your Loved Ones Healthy Year-Round',
  excerpt:
    'Dirt, debris, and loose fur can build up in your pet’s coat and lead to matting, hot spots, and skin care. Grooming removes these irritants and allows your pet’s Overgrown nails can cause pain, posture problems, and even joint issues in both dogs and cats. If your they need a trim Brushing',
  image: '/images/service3.jpg',
  link: '#',
};

export default function ArticleCard() {
  return (
    <article className="bg-[#F9F6F1] rounded-4xl overflow-hidden shadow-sm border border-gray-100 font-sans ">
      <div className="relative w-full h-70 sm:h-85">
        <Image
          src={articleData.image}
          alt={articleData.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-4">
          <div className="flex items-center gap-2">
            <HiOutlineUser className="w-5 h-5 text-[#0a5e3b]" />
            <span>{articleData.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineCalendar className="w-5 h-5 text-[#0a5e3b]" />
            <span>{articleData.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineChat className="w-5 h-5 text-[#0a5e3b]" />
            <span>Comments ({articleData.comments})</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4">
          {articleData.title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">{articleData.excerpt}</p>

        <hr className="border-gray-200 mb-6" />

        <a
          href={articleData.link}
          className="inline-flex items-center gap-2 font-semibold text-black hover:text-[#0a5e3b] transition-colors"
        >
          Read More
          <span className="text-xl">→</span>
        </a>
      </div>
    </article>
  );
}
