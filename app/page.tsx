import Layout from '@/components/layout/Layout';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Home from '@/components/sections/Home';
import Projects from '@/components/sections/Projects';
import Service from '@/components/sections/Service';
import Skills from '@/components/sections/Skills';
import Static from '@/components/sections/Static';

export default function HomePage2() {
  return (
    <>
      <Layout>
        <Home />
        <Static />
        <Service />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </>
  );
}
