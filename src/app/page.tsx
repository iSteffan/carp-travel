import { About, Gallery, Header, Hero, Services } from '@/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
      </main>
    </>
  );
}
