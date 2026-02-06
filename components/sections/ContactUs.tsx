import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { IconType } from 'react-icons';
import ContactUsForm from '../common/ContactUsForm';

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

const iconMap: Record<any, IconType> = {
  phone: HiOutlinePhone,
  email: HiOutlineMail,
  location: HiOutlineLocationMarker,
};

const ContactCard = ({ contactUsInfo }: any) => {
  const { header, items } = contactUsInfo || {};

  const renderValue = (item: any) => {
    if (item.type === "email") {
      return (
        <a href={`mailto:${item.value}`} className="hover:underline">
          {item.value}
        </a>
      );
    }

    if (item.type === "phone") {
      return (
        <a
          href={`tel:${item.value.replace(/[^\d+]/g, "")}`}
          className="hover:underline"
        >
          {item.value}
        </a>
      );
    }

    if (item.type === "address") {
      return (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            item.value
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline cursor-pointer"
        >
          {item.value}
        </a>
      );
    }

    return item.value;
  };

  return (
    <div className="p-8 bg-white rounded-4xl shadow-sm border border-gray-50 figtree">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-3">
          {header?.title}
        </h2>
        <p className="text-gray-500 leading-relaxed">
          {header?.description}
        </p>
      </div>

      <div className="space-y-6">
        {items?.map((item: any, index: number) => {
          const Icon = iconMap[item.type];

          return (
            <div key={item.id}>
              
              {item.title && (
                <p className="text-gray-500 mb-1 flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  {item.title}
                </p>
              )}


              <p className="text-lg font-bold text-black">
                {renderValue(item)}
              </p>
              {index !== items.length - 1 && (
                <hr className="mt-6 border-gray-100" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default function ContactUs({ contactUsInfo }: any) {
  return (
    <div className="inner-wrapper m-auto py-16 px-6 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ContactCard contactUsInfo={contactUsInfo} />
        <ContactUsForm />
      </div>
    </div>
  );
}
