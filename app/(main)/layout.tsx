import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/NavBar';
import { CommonEndPoints } from '@/lib/service/CommonEndPoints';
import { HomePageEndPoints } from '@/lib/service/HomePageEndPoints';

export default async function layout({ children }: any) {
  const headerResp = await HomePageEndPoints.headerAPi();
  const footerResp = await CommonEndPoints.footerResponse();

  return (
    <>
      <Navbar headerResp={headerResp} />
      {children}
      <Footer footerResp={footerResp} />
    </>
  );
}
