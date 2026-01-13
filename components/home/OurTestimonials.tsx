import React from 'react';
import SectionBadge from '../common/SectionBadge';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';

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

const VetTeamSection = () => {
  return (
    <section className="pt-14">
      <div className="wrapper mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 relative">
            <span className="hidden md:block absolute left-0 top-0 h-full w-[2px] bg-gray-100" />
            <ul
              className="space-y-8 max-h-[500px] overflow-y-auto custom-scrollbar"
              style={{ direction: 'rtl' }}
            >
              <div style={{ direction: 'ltr', marginLeft: '40px' }}>
                {teamMembers.map((member, index) => (
                  <li key={index} className="flex items-center gap-4 mb-8 last:mb-0">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover shrink-0 border border-gray-100"
                    />
                    <div>
                      <p className="font-semibold text-[#02000F] text-2xl fredoka">{member.name}</p>
                      <p className="text-base text-[#4E4E4E] font-normal onesta">{member.role}</p>
                    </div>
                  </li>
                ))}
              </div>
            </ul>
          </div>

          {/* RIGHT SIDE: Featured Card */}
          <div className="md:col-span-8">
            <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-lg border border-gray-50">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="relative shrink-0 rounded-3xl border-10 border-[#F6F6F6] overflow-hidden w-full max-w-[300px] lg:max-w-[320px]">
                  <img
                    src={featuredVet.image}
                    alt={featuredVet.name}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className=" text-[2rem] lg:text-[2.5rem] font-semibold text-[#02000F] fredoka lg:leading-14 ">
                    {featuredVet.name}
                  </h3>
                  <p className="text-base text-[#4E4E4E] mt-1 capitalize tracking-wider onesta">
                    {featuredVet.role}
                  </p>

                  <div className="mt-6 space-y-4 text-[#000000] text-base leading-relaxed">
                    {featuredVet.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    {featuredVet.socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.link}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-green-700 hover:text-white transition-all"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function OurTestimonials() {
  return (
    <div
      className="
    bg-color
    bg-[url('/images/Webp/Testimonial-BG.webp')]
    bg-no-repeat
    bg-cover
    bg-center
  "
    >
      <div className="inner-wrapper m-auto lg:py:16 py-12 lg:px-0 px-6 ">
        <div className="flex justify-between flex-wrap">
          <div>
            <div className="flex justify-start">
              <SectionBadge label="Our Testimonials" icon="/icons/bone.svg" />
            </div>
            <SectionHeading
              cssClass="text-left"
              title={'Expert Care, Better Healing.'}
              subTitle={
                'Nurovet is powered by experts dedicated to supporting veterinarians and improving pet outcomes.'
              }
            />
          </div>
          <div>
            <Button
              href={''}
              label={'Book a demo Now!'}
              variant={'outline'}
              className="text-black! "
            />
          </div>
        </div>
        <VetTeamSection />
      </div>
    </div>
  );
}
