import {
  About,
  Career,
  CareerMobileFormSection,
  Contacts,
  Gallery,
  Header,
  Hero,
  Services,
} from '@/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Career />
        <CareerMobileFormSection />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}
