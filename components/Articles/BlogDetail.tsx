import React from 'react';
import BlogSideBar from './BlogSideBar';
import BlogDetailCard from './BlogDetailCard';
import AppointmentForm from '../common/AppointmentForm';

const blogInfo = [
  {
    author: 'Babet',
    date: 'October 5, 2025',
    comments: 0,
    title: 'How to Keep Your Loved Ones Healthy Year-Round',
    excerpt:
      'Dirt, debris, and loose fur can build up in your pet’s coat and lead to matting, hot spots, and skin care...',
    image: '/images/service3.jpg',
    slug: 'keep-your-loved-ones-healthy',
  },
];

export const commentHeaderData = {
  title: 'Leave comments',
  note: 'Your email address will not be published. Required fields are marked *',
};

export default function BlogDetail() {
  return (
    <div className="bg-blog">
      <div className="wrapper m-auto py-16 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[70%_28%] gap-[2%] min-h-[80vh]">
          <div className="space-y-10 overflow-y-auto h-fit pr-2">
            {blogInfo.map((blog, index) => (
              <BlogDetailCard key={index} data={blog} />
            ))}
            {/* <div className="max-w-4xl justify-center mx-auto py-16">
              <AppointmentForm className="bg-white" commentHeaderData={commentHeaderData} />
            </div> */}
          </div>
          <div className="hidden md:block sticky top-24 h-fit">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
