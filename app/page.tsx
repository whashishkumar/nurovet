/** @format */
import Articles from '@/components/Articles';
import AboutNuroVet from '@/components/sections/AboutNuroVet';
import BookDemo from '@/components/sections/BookDemo';
import CustomizedDashboard from '@/components/sections/CustomizedDashboard';
import FeaturesNeuroVet from '@/components/sections/FeaturesNeuroVet';
import HeroBanner from '@/components/sections/HeroBanner';
import MobilePlatform from '@/components/sections/MobilePlatform';
import OurTestimonials from '@/components/sections/OurTestimonials';
import QuickAnswers from '@/components/sections/QuickAnswers';
import RecentStories from '@/components/sections/RecentStories';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Footer from '@/components/layout/Footer';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const featuredVet = {
  name: 'Alina Maisner',
  role: 'Veterinarian',
  image: '/images/Webp/testimonials.webp',
  bio: [
    'Emma leads our team with a passion for animal welfare and years of experience.',
    'Although expert groomers themselves, lots of cats like being brushed and it’s a great way of bonding with your cat.',
    'As well as fewer hairballs and less shedding, grooming your cats will imitate how they groom each other naturally.',
  ],
  socials: [
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaYoutube />, link: '#' },
    { icon: <FaLinkedinIn />, link: '#' },
  ],
};

const teamMembers = [
  { name: 'Alina Maisner', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals1.webp' },
  { name: 'David Smith', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals2.webp' },
  { name: 'Emma Brown', role: 'Surgeon', avatar: '/images/Webp/Testimoinals3.webp' },
  { name: 'Mary Douglas', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals4.webp' },
  { name: 'James Wilson', role: 'Technician', avatar: '/images/Webp/Testimoinals1.webp' },
  { name: 'Sarah Cook', role: 'Therapist', avatar: '/images/Webp/Testimoinals2.webp' },
  { name: 'Alina Maisner', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals1.webp' },
  { name: 'David Smith', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals2.webp' },
  { name: 'Emma Brown', role: 'Surgeon', avatar: '/images/Webp/Testimoinals3.webp' },
  { name: 'Mary Douglas', role: 'Veterinarian', avatar: '/images/Webp/Testimoinals4.webp' },
  { name: 'James Wilson', role: 'Technician', avatar: '/images/Webp/Testimoinals1.webp' },
  { name: 'Sarah Cook', role: 'Therapist', avatar: '/images/Webp/Testimoinals2.webp' },
];

const sectionData = {
  testimonialSection: {
    badge: {
      label: 'Our Testimonials',
      icon: '/icons/bone.svg',
    },
    heading: {
      title: 'Expert Care, Better Healing.',
      subTitle:
        'Nurovet is powered by experts dedicated to supporting veterinarians and improving pet outcomes.',
    },
  },
};

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutNuroVet />
      <FeaturesNeuroVet />
      <CustomizedDashboard />
      <MobilePlatform />
      <WhyChooseUs />
      <RecentStories />
      <OurTestimonials
        featuredVet={featuredVet}
        teamMembers={teamMembers}
        sectionData={sectionData}
      />
      <QuickAnswers />
      <BookDemo />
      <Articles />
      <Footer />
    </>
  );
}
