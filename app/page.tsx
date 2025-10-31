'use client';

import Navigation from '@/components/sections/navigation';
import SelectedWork from '@/components/sections/selected-work';
import StoreSection from '@/components/sections/store';
import ContactFooter from '@/components/sections/contact-footer';
import { CuriousIdeasSection } from '@/components/sections/curious-ideas';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero intro from work page */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-[1920px] px-4 pt-[100px] md:px-10 md:pt-[150px]">
          {/* Negative space container for Swarajit Roy */}
          <div className="pt-[200px] md:pt-[250px] relative">
            {/* Swarajit Roy text positioned in the negative space */}
            <div className="absolute top-[40px] left-0 right-0 h-[100px] flex items-center justify-center text-center px-4">
              <h1 className="text-[clamp(2.5rem,12vw,9rem)] leading-none text-center tracking-tight !font-normal !whitespace-pre-line !font-(family-name:--font-geist) max-w-full">Swarajit Roy

              </h1>
            </div>
            
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Home-Page-Intro-v1-1759807669466.mov"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover" />

          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <div className="mt-10 md:mt-20 px-4 sm:px-8 lg:px-[60px]">
        <p className="max-w-[32ch] text-2xl leading-tight md:max-w-[45ch] md:text-3xl lg:text-[40px] lg:leading-[1.1]">I believe in designing wonderful products. Products that inspire love and care, even at the expense of challenging the status quo.

        </p>
        
        {/* Tags section */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["Industrial Design", "Product Visualization", "AI for Design", "Packaging Design"].map((tag) =>
          <span
            key={tag}
            className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm">
              {tag}
            </span>
          )}
        </div>
      </div>
      
      {/* Home-only: Mentions + View all row matching Experiments section */}
      <SelectedWork
        aboveHeading={
        <>
            <p className="font-soehne-web-buch text-sm !whitespace-pre-line">Honourable Mentions</p>
            <Link href="/work" className="font-soehne-web-buch text-sm underline hover:no-underline">View all</Link>
          </>
        }
        limit={6} />

      <StoreSection />
      <CuriousIdeasSection />
      <ContactFooter />
    </div>);

}