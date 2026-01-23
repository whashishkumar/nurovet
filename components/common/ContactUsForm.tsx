'use client';
import { useEffect, useState } from 'react';
import DropdownSelect from '../ui/DropdownSelect';
import { ContactUsEndPoints } from '@/lib/service/ContactUsPageEndPoints';
import { useToast } from '@/context/ToastContext';

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
  const { showToast } = useToast();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [services, setServices] = useState(null);

  const getServices = async () => {
    const resp = await ContactUsEndPoints.services();
    setServices(resp);
    console.log(resp, 'services');
  };

  useEffect(() => {
    getServices();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resp = await ContactUsEndPoints.contactUsForm(form);

    showToast(resp.message || 'Form submitted successfully!');

    if (!form.name || !form.email || !form.phone || !form.service) {
      showToast('Please fill all required fields');
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
          required
          type="text"
          name="name"
          placeholder="Your name*"
          value={form.name}
          onChange={handleChange}
          className="rounded-full bg-gray-50 px-6 py-4 text-gray-700 border border-gray-200 focus:border-[#0B5D3B] focus:outline-none transition"
        />
        <input
          required
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
          data={services}
          value={form.service}
          onChange={(value: any) => setForm((prev) => ({ ...prev, service: value }))}
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
