import InnerBanner from '@/components/common/InnerBanner';
import OurStory from '@/components/sections/OurStory';
import OurTestimonials from '@/components/sections/OurTestimonials';
import OurHitory from '@/components/sections/OurHitory';
import Reviews from '@/components/sections/Reviews';
import HowWeWork from '@/components/sections/HowWeWork';
import { AboutPageEndPoints } from '@/lib/service/AboutUsPageEndPoints';

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
  // const reviewsData = await AboutPageEndPoints.reviews();
  // console.log(reviewsData, 'reviews');

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
