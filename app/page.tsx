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
import { HomePageEndPoints } from '@/lib/service/HomePageEndPoints';
import { CommonEndPoints } from '@/lib/service/CommonEndPoints';
import Navbar from '@/components/layout/NavBar';

export default async function Home() {
  const headerResp = await HomePageEndPoints.headerAPi();
  const footerResp = await CommonEndPoints.footerResponse();
  const heroBanner = await HomePageEndPoints.heroBanner();
  const aboutSection = await HomePageEndPoints.aboutSection();
  const featuresNuroVet = await HomePageEndPoints.featuresSection();
  const customSection = await HomePageEndPoints.customSection();
  const aiSection = await HomePageEndPoints.aiSection();
  const remoteSection = await HomePageEndPoints.remoteSection();
  const mobileSection = await HomePageEndPoints.mobileSection();
  const chooseSection = await HomePageEndPoints.chooseSection();
  const recentStories = await HomePageEndPoints.gallerySection();
  const testimonialsData = await HomePageEndPoints.testimonialSection();
  const { teamMembers, featuredVet, heading, subHeadingmtag, tagicon, tag } =
    testimonialsData || {};
  const sectionData = {
    testimonialSection: {
      badge: {
        label: tag,
        icon: tagicon,
      },
      heading: {
        title: heading,
        subTitle: subHeadingmtag,
      },
    },
  };
  const faqSection = await HomePageEndPoints.faqSection();
  const bookDemoSection = await HomePageEndPoints.bookDemoSection();
  const article = await HomePageEndPoints.articlesSection();
  return (
    <>
      <Navbar headerResp={headerResp} />
      <HeroBanner heroBanner={heroBanner} />
      <AboutNuroVet aboutSection={aboutSection} />
      <FeaturesNeuroVet featuresNuroVet={featuresNuroVet} />
      <CustomizedDashboard
        customSection={customSection}
        aiSection={aiSection}
        remoteSection={remoteSection}
      />
      <MobilePlatform mobileSection={mobileSection} />
      <WhyChooseUs chooseSection={chooseSection} />
      <RecentStories recentStories={recentStories} />
      <OurTestimonials
        featuredVet={featuredVet}
        teamMembers={teamMembers}
        sectionData={sectionData}
      />
      <QuickAnswers faqSection={faqSection} />
      <BookDemo bookDemoSection={bookDemoSection} />
      <Articles article={article} />
      <Footer footerResp={footerResp} />
    </>
  );
}
