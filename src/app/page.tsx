import About from '@/sections/About/About';
import Header from '@/sections/Header/Header';
import Hero from '@/sections/Hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main
      // className="flex min-h-screen"
      >
        <Hero />
        <About />
      </main>
    </>
  );
}
