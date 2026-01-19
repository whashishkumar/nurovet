import React from 'react';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import AppointmentForm from '../common/AppointmentForm';
import { IconType } from 'react-icons';

// PURE DATA ONLY
const contactData = {
  header: {
    title: "Let's working together",
    description:
      "Thank you for your interest in Attach Web Agency. We're excited to hear from you and discuss...",
  },
  items: [
    {
      id: 1,
      type: 'phone',
      title: 'Call Us For Query',
      value: '(+58-125) 25-3158',
    },
    {
      id: 2,
      type: 'email',
      title: 'Email Anytime',
      value: 'info@Babet.chat.com',
    },
    {
      id: 3,
      type: 'location',
      title: 'Visit Our Office',
      value: '15 Maniel Lane, Front Line Berlin',
    },
  ],
};

// ICON MAP (UI LAYER)
const iconMap: Record<any, IconType> = {
  phone: HiOutlinePhone,
  email: HiOutlineMail,
  location: HiOutlineLocationMarker,
};

const ContactCard = () => {
  return (
    <div className="p-8 bg-white rounded-4xl shadow-sm border border-gray-50 font-sans">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{contactData.header.title}</h2>
        <p className="text-gray-500 leading-relaxed">{contactData.header.description}</p>
      </div>

      {/* Contact List */}
      <div className="space-y-6">
        {contactData.items.map((item, index) => {
          const Icon = iconMap[item.type];
          return (
            <div key={item.id}>
              <div className="flex items-center gap-5 py-2">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-orange-50">
                  <Icon className="w-6 h-6 text-[#0a5e3b]" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">{item.title}</p>
                  <p className="text-lg font-bold text-gray-900">{item.value}</p>
                </div>
              </div>

              {/* Divider */}
              {index !== contactData.items.length - 1 && <hr className="mt-6 border-gray-100" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function ContactUs() {
  return (
    <div className="inner-wrapper m-auto py-16 px-6 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ContactCard />
        <AppointmentForm />
      </div>
    </div>
  );
}
