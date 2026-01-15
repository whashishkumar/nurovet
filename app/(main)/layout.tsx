import Footer from '@/components/layout/Footer';

export default function layout({ children }: any) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
