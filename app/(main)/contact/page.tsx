import InnerBanner from '@/components/common/InnerBanner';
import MapLoaction from '@/components/common/MapLocation';
import ContactUs from '@/components/sections/ContactUs';
import { ContactUsEndPoints } from '@/lib/service/ContactUsPageEndPoints';

export default async function page() {
  const bannerInfo = await ContactUsEndPoints.heroBanner();
  const contactUsInfo = await ContactUsEndPoints.contactDetails();
  const location = await ContactUsEndPoints.mapSection();

  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} />
      <ContactUs contactUsInfo={contactUsInfo} />
      <MapLoaction location={location} />
    </div>
  );
}
