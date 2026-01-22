import InnerBanner from '@/components/common/InnerBanner';
import Gallery from '@/components/sections/Gallery';
import QuickAnswers from '@/components/sections/QuickAnswers';

// const quickAnswersData = {
//   badge: {
//     label: 'Quick Answers',
//     icon: '/icons/bone.svg',
//   },
//   heading: {
//     title: 'Questions Asked by Veterinarians',
//   },
//   image: {
//     src: '/images/Webp/faq-img.webp',
//     alt: 'FAQ banner',
//   },
//   faqs: [
//     {
//       id: 1,
//       question: 'How can I track critical and emergency patients in real time?',
//       answer:
//         'You can track critical and emergency patients in real time through Nurovet’s centralized dashboard, which highlights urgent cases with priority alerts, live status updates, and detailed patient profiles—ensuring faster decisions and timely care.',
//     },
//     {
//       id: 2,
//       question: 'Does the system provide alerts for urgent cases?',
//       answer:
//         'Yes, the system provides real-time alerts and notifications for all urgent and high-priority cases.',
//     },
//     {
//       id: 3,
//       question: 'How can I track critical and emergency patients in real time?',
//       answer:
//         'You can track critical and emergency patients in real time through Nurovet’s centralized dashboard, which highlights urgent cases with priority alerts, live status updates, and detailed patient profiles—ensuring faster decisions and timely care.',
//     },
//     {
//       id: 4,
//       question: 'Does the system provide alerts for urgent cases?',
//       answer:
//         'Yes, the system provides real-time alerts and notifications for all urgent and high-priority cases.',
//     },
//     {
//       id: 5,
//       question: 'How can I track critical and emergency patients in real time?',
//       answer:
//         'You can track critical and emergency patients in real time through Nurovet’s centralized dashboard, which highlights urgent cases with priority alerts, live status updates, and detailed patient profiles—ensuring faster decisions and timely care.',
//     },
//   ],
// };
export default function page() {
  return (
    <div>
      <InnerBanner
        bannerInfo={{
          background: {
            image: '/images/innerbg.jpg',
          },
          title: 'Gallery',
        }}
      />
      <Gallery />
      <QuickAnswers />
    </div>
  );
}
