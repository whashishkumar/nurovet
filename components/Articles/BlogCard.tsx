'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiUser, FiCalendar, FiArrowRight } from 'react-icons/fi';

const BlogCards = ({ articles }: any) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {articles?.map((item: any) => (
        <article key={item.id} className="max-w-sm overflow-hidden">
          <div className="relative w-full h-55">
            <Image src={item?.image} alt={item?.slug} fill className="object-cover rounded-t-3xl" />
          </div>
          <div className="pt-6">
            <div className="flex items-center gap-6 text-sm text-black onesta">
              <div className="flex items-center gap-2">
                <FiUser className="text-[#0B5D3B]" size={22} />
                <span>{item?.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="text-[#0B5D3B]" size={22} />
                <span>{item?.date}</span>
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[#02000F] leading-snug fredoka">
              {item?.title}
            </h3>
            <div className="mt-6 h-px w-full bg-gray-300" />
            <div className="mt-4">
              <button
                className="flex items-center gap-2 text-lg font-medium text-black hover:gap-3 transition-all cursor-pointer"
                onClick={() => router.push(`/blog/${item.slug}`)}
              >
                {item?.cta}
                <FiArrowRight />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogCards;
