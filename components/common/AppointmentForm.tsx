'use client';
import { useState } from 'react';

const AppointmentForm = ({ className }: any) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    website: '',
    date: '',
    time: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <section>
      <div className="max-w-5xl mx-auto ">
        <div
          className={`${
            className ? `${className} ` : 'bg-[#0B5D3B]'
          } rounded-4xl p-6 sm:p-10 md:py-16`}
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name*"
              className="w-full rounded-xl px-5 py-4 text-sm outline-none bg-[#E4E4E5]"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number*"
              className="w-full rounded-xl px-5 py-4 text-sm outline-none bg-[#E4E4E5]"
            />
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full rounded-xl px-5 py-4 text-sm outline-none bg-[#E4E4E5]"
            />
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website URL"
              className="w-full rounded-xl px-5 py-4 text-sm outline-none bg-[#E4E4E5]"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-xl px-5 py-4 text-sm outline-none bg-[#E4E4E5]"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full rounded-xl px-5 py-4 text-sm outline-none bg-[#E4E4E5]"
            />
            <div className="md:col-span-2">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address 1"
                className="w-full rounded-xl px-5 py-4 text-sm outline-none bg-[#E4E4E5]"
              />
            </div>
            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className={`inline-flex
                  items-center justify-center rounded-full bg-[#f9f6f1] px-8 py-4  text-lg  font-medium text-black  cursor-pointer  hover:bg-gray-100  transition`}
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
