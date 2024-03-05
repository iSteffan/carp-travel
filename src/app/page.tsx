import About from '@/sections/About/About';
import Gallery from '@/sections/Gallery/Gallery';
import Header from '@/sections/Header/Header';
import Hero from '@/sections/Hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
      </main>
    </>
  );
}
