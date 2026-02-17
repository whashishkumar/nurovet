'use client';

import Image from 'next/image';

type Blog = {
  author: string;
  date: string;
  comments: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  content?: string;
};

type BlogDetailCardProps = {
  data: Blog;
};

export default function BlogDetailCard({ data }: BlogDetailCardProps) {
  const content = data?.content;

  console.log(content, 'content');

  return (
    <article className="bg-color mx-auto px-6 lg:px-0">
      <div className="pb-8">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-[#0a5e3b] hover:text-[#0a5e3b] font-medium transition"
        >
          ← Back to Blog
        </a>
      </div>
      <div className="relative h-[420px] w-full overflow-hidden rounded-3xl">
        {data?.image && (
          <Image
            src={data?.image}
            alt={data?.title || 'article'}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
        <span>By {data?.author}</span>
        <span>•</span>
        <span>{data?.date}</span>
        <span>•</span>
        <span>{data?.comments} Comments</span>
      </div>
      <h1 className="mt-4 text-4xl font-bold text-black leading-tight">{data?.title}</h1>
      <div className="mt-8 space-y-4  leading-relaxed  ">
        <div
          className="  blog-content
  prose 
  prose-lg 
  max-w-none
  prose-p:text-gray-600
  prose-p:leading-relaxed
  prose-h4:text-black
  prose-h4:font-semibold
  prose-ul:list-disc
  prose-li:ml-5
  prose-blockquote:border-l-4
  prose-blockquote:border-gray-300
  prose-blockquote:pl-6
  prose-blockquote:italic
  prose-blockquote:rounded-lg
  prose-blockquote:py-4
  prose-blockquote:px-6
  prose-img:rounded-xl
  prose-img:shadow-md
"
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
      </div>
    </article>
  );
}
