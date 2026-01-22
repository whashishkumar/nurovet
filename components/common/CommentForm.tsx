'use client';
import { useState } from 'react';
import { FiUser, FiMail, FiGlobe, FiEdit3, FiArrowLeft } from 'react-icons/fi';
import { TiArrowBack } from 'react-icons/ti';

type CommentFormState = {
  name: string;
  email: string;
  website: string;
  comment: string;
};

export default function CommentForm() {
  const [form, setForm] = useState<CommentFormState>({
    name: '',
    email: '',
    website: '',
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.comment) {
      alert('Please fill all required fields');
      return;
    }

    console.log('Comment Submitted:', form);

    setForm({
      name: '',
      email: '',
      website: '',
      comment: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[40px] bg-white p-8 md:p-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <TiArrowBack className="text-[#0B5D3B] text-4xl" />
          <h2 className="text-4xl md:text-4xl font-semibold fredoka">Leave a Comment</h2>
        </div>

        <p className="mt-3 text-gray-500">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-full bg-gray-50 px-6 py-4 pr-12 border border-gray-200 focus:border-[#0B5D3B] focus:outline-none transition"
          />
          <FiUser className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-full bg-gray-50 px-6 py-4 pr-12 border border-gray-200 focus:border-[#0B5D3B] focus:outline-none transition"
          />
          <FiMail className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Website */}
      <div className="relative mt-6">
        <input
          type="url"
          name="website"
          placeholder="Website"
          value={form.website}
          onChange={handleChange}
          className="w-full rounded-full bg-gray-50 px-6 py-4 pr-12 border border-gray-200 focus:border-[#0B5D3B] focus:outline-none transition"
        />
        <FiGlobe className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Comment */}
      <div className="relative mt-6">
        <textarea
          name="comment"
          placeholder="Write a Comment*"
          value={form.comment}
          onChange={handleChange}
          rows={6}
          className="w-full rounded-[32px] bg-gray-50 px-6 py-4 pr-12 border border-gray-200 focus:border-[#0B5D3B] focus:outline-none transition resize-none"
        />
        <FiEdit3 className="absolute right-5 top-5 text-gray-400" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0B5D3B] px-10 py-4 text-white font-medium hover:bg-[#0B5D3B]/90 transition"
      >
        Post Comment
      </button>
    </form>
  );
}
