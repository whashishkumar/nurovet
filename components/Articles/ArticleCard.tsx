'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineUser, HiOutlineCalendar, HiOutlineChat } from 'react-icons/hi';

interface ArticleCardProps {
  article: {
    author: string;
    date: string;
    comments: number;
    title: string;
    excerpt: string;
    image: string;
    slug?: string;
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-[#F9F6F1] rounded-xl overflow-hidden shadow-sm border border-gray-100 font-sans">
      {/* Image */}
      <div className="relative w-full h-70 sm:h-85">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-4 figtree">
          <div className="flex items-center gap-2">
            <HiOutlineUser className="w-5 h-5 text-[#0a5e3b]" />
            <span>{article.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineCalendar className="w-5 h-5 text-[#0a5e3b]" />
            <span>{article.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineChat className="w-5 h-5 text-[#0a5e3b]" />
            <span>Comments ({article.comments})</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-black leading-snug mb-4 fredoka">
          {article.title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 ">{article.excerpt}</p>

        <hr className="border-gray-200 mb-6" />

        {article.slug ? (
          <Link
            href={`/blogs/${article.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-black hover:text-[#0a5e3b] transition-colors fredoka"
          >
            Read More <span className="text-xl">→</span>
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 font-semibold text-gray-400 cursor-not-allowed">
            Read More <span className="text-xl">→</span>
          </span>
        )}
      </div>
    </article>
  );
}
