'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />,
});

export default function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
        <Scene3D />
      </Suspense>
      <Navigation />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
