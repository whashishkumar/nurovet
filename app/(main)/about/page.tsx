import InnerBanner from '@/components/common/InnerBanner';
import OurStory from '@/components/sections/OurStory';
import OurTestimonials from '@/components/sections/OurTestimonials';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import OurHitory from '@/components/sections/OurHitory';
import Reviews from '@/components/sections/Reviews';
import HowWeWork from '@/components/sections/HowWeWork';
import { AboutPageEndPoints } from '@/lib/service/AboutUsPageEndPoints';
// import OurServices from '@/components/sections/OurServices';

// const featuredVet = {
//   name: 'Alina Maisner',
//   role: 'Pet Sitter',
//   image: '/images/Webp/testimonials.webp',
//   bio: [
//     'Emma leads our team with a passion for animal welfare and years of experience.',
//     'Although expert groomers themselves, lots of cats like being brushed and it’s a great way of bonding with your cat.',
//     'As well as fewer hairballs and less shedding, grooming your cats will imitate how they groom each other naturally.',
//   ],
//   socials: [
//     { icon: <FaFacebookF />, link: '#' },
//     { icon: <FaInstagram />, link: '#' },
//     { icon: <FaYoutube />, link: '#' },
//     { icon: <FaLinkedinIn />, link: '#' },
//   ],
// };

// const teamMembers = [
//   { name: 'Alina Maisner', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals1.webp' },
//   { name: 'David Smith', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals2.webp' },
//   { name: 'Emma Brown', role: 'Surgeon', avatar: '/images/Webp/Testimoinals3.webp' },
//   { name: 'Mary Douglas', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals4.webp' },
//   { name: 'James Wilson', role: 'Technician', avatar: '/images/Webp/Testimoinals1.webp' },
//   { name: 'Sarah Cook', role: 'Therapist', avatar: '/images/Webp/Testimoinals2.webp' },
//   { name: 'Alina Maisner', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals1.webp' },
//   { name: 'David Smith', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals2.webp' },
//   { name: 'Emma Brown', role: 'Surgeon', avatar: '/images/Webp/Testimoinals3.webp' },
//   { name: 'Mary Douglas', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals4.webp' },
//   { name: 'James Wilson', role: 'Technician', avatar: '/images/Webp/Testimoinals1.webp' },
//   { name: 'Sarah Cook', role: 'Therapist', avatar: '/images/Webp/Testimoinals2.webp' },
// ];

// const sectionData = {
//   testimonialSection: {
//     badge: {
//       label: 'Team Members',
//       icon: '/icons/bone.svg',
//     },
//     heading: {
//       title: 'Loyal, Passionate, and Driven',
//       subTitle: 'Our team is made up of dedicated individuals who share a common love for animals.',
//     },
//   },
// };

// const data = {
//   background: {
//     image: '/images/innerbg.jpg',
//   },
//   title: 'About Us',
//   breadcrumb: {
//     activeColor: 'text-orange-500',
//   },
// };

export default async function page() {
  const heroBannerData = await AboutPageEndPoints.heroBanner();
  const ourStoryData = await AboutPageEndPoints.ourStory();
  const testimonialsData = await AboutPageEndPoints.testimonials();
  const { teamMembers, featuredVet, heading, subHeading, tagicon, tag } = testimonialsData || {};
  const sectionData = {
    testimonialSection: {
      badge: {
        label: tag,
        icon: tagicon,
      },
      heading: {
        title: heading,
        subTitle: subHeading,
      },
    },
  };
  const ourHistoryData = await AboutPageEndPoints.ourHistory();
  const ourWorkData = await AboutPageEndPoints.ourWork();

  return (
    <>
      <InnerBanner bannerInfo={heroBannerData} />
      <OurStory ourStoryData={ourStoryData} />
      <OurTestimonials
        teamMembers={teamMembers}
        featuredVet={featuredVet}
        sectionData={sectionData}
      />
      <OurHitory ourHistoryData={ourHistoryData} />
      <HowWeWork ourWorkData={ourWorkData} />
      <Reviews />
    </>
  );
}
