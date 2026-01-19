import InnerBanner from '@/components/common/InnerBanner';
import MapLoaction from '@/components/common/MapLocation';
import ContactUs from '@/components/sections/ContactUs';
import React from 'react';

export default function page() {
  return (
    <div>
      <InnerBanner
        bannerInfo={{
          background: {
            image: '/images/innerbg.jpg',
          },
          title: 'Contact Us',
        }}
      />
      <ContactUs />
      <MapLoaction />
    </div>
  );
}
