'use client';
import { useState } from 'react';
import DropdownSelect from '../ui/DropdownSelect';

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export const serviceSelectData = {
  name: 'service',
  placeholder: 'Select a Service',
  options: [
    'Pet Grooming',
    'Veterinary Checkup',
    'Pet Training',
    'Pet Boarding',
    'Nutrition Consultation',
  ],
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form Submitted:', form);
    // Example validation
    if (!form.name || !form.email || !form.phone || !form.service) {
      alert('Please fill all required fields');
      return;
    }
    setForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-4xl bg-white p-8 md:p-10  mx-auto  shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          value={form.name}
          onChange={handleChange}
          className="rounded-full bg-gray-50 px-6 py-4 text-gray-700 border border-gray-200 focus:border-[#0B5D3B] focus:outline-none transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address*"
          value={form.email}
          onChange={handleChange}
          className="rounded-full bg-gray-50 px-6 py-4 text-gray-700 border border-gray-200 focus:border-[#0B5D3B] focus:outline-none transition"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number*"
          value={form.phone}
          onChange={handleChange}
          className="rounded-full bg-gray-50 px-6 py-4 text-gray-700 border border-gray-200 focus:border-[#0B5D3B] focus:outline-none transition"
        />
        <DropdownSelect
          data={serviceSelectData}
          value={form.service}
          onChange={(value) => setForm((prev) => ({ ...prev, service: value }))}
        />
      </div>
      <textarea
        name="message"
        placeholder="Write a message*"
        value={form.message}
        onChange={handleChange}
        rows={6}
        className="mt-6 w-full rounded-3xl bg-gray-50 px-6 py-4 text-gray-700 border border-gray-200 focus:border-[#0B5D3B] focus:outline-none transition resize-none"
      />
      <button
        type="submit"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0B5D3B]/90 px-10 py-4 text-white font-medium hover:bg-[#0B5D3B] transition cursor-pointer"
      >
        Submit Message
      </button>
    </form>
  );
}
