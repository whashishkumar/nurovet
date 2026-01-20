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
};

type BlogDetailCardProps = {
  data: Blog;
};

export default function BlogDetailCard({ data }: BlogDetailCardProps) {
  return (
    <article className=" mx-auto px-6 lg:px-0">
      <div className="pb-8">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-[#0a5e3b] hover:text-[#0a5e3b] font-medium transition"
        >
          ← Back to Blog
        </a>
      </div>
      <div className="relative h-[420px] w-full overflow-hidden rounded-3xl">
        <Image src={data.image} alt={data.title} fill className="object-cover" priority />
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
        <span>By {data.author}</span>
        <span>•</span>
        <span>{data.date}</span>
        <span>•</span>
        <span>{data.comments} Comments</span>
      </div>
      <h1 className="mt-4 text-4xl font-bold text-black leading-tight">{data.title}</h1>
      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <p>
          Dirt, debris, and loose fur can build up in your pet’s coat and lead to matting, hot
          spots, and skin irritation. Regular grooming ensures your pet stays clean, comfortable,
          and healthy.
        </p>

        <p>
          Nutrition plays a critical role in maintaining your pet’s immune system. Balanced meals
          rich in vitamins, minerals, and protein can help your pet stay energetic and happy
          year-round.
        </p>

        <blockquote className="border-l-4 border-[#0a5e3b] pl-4 italic text-gray-600">
          “Healthy pets are happy pets. Consistency in care and nutrition makes all the difference.”
        </blockquote>

        <p>
          Always consult with your veterinarian for personalized care plans and preventive measures
          to ensure your loved ones live long, fulfilling lives.
        </p>
      </div>
    </article>
  );
}
