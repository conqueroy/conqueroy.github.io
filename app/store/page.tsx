import Navigation from '@/components/sections/navigation';
import ContactFooter from '@/components/sections/contact-footer';
import StoreSection from '@/components/sections/store';

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero intro */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-[1920px] px-4 pt-[100px] md:px-10 md:pt-[150px]">
          {/* Negative space container */}
          <div className="pt-[200px] md:pt-[250px] relative">
            {/* STORE text positioned in the negative space */}
            <div className="absolute top-[40px] left-0 right-0 h-[100px] flex items-center justify-center">
              <h1 className="text-[clamp(4rem,14vw,9rem)] -tracking-[0.04em] leading-none text-primary z-10 !whitespace-pre-line !font-normal !font-(family-name:--font-geist)">Store</h1>
            </div>
            
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Store-Intro-1759807693829.mov"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <div className="mt-10 md:mt-20 mb-[50px] md:mb-[100px] px-4 sm:px-8 lg:px-[60px]">
        <p className="max-w-[32ch] font-soehne-web-buch text-2xl leading-tight md:max-w-[45ch] md:text-3xl lg:text-[40px] lg:leading-[1.1] !whitespace-pre-line !whitespace-pre-line">Well, you need a store when love and passion grows and spills over.
        </p>
        
        {/* Tags section */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["Physical Products", "Digital Goods"].map((tag) =>
          <span
            key={tag}
            className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-soehne-web-buch">
              {tag}
            </span>
          )}
        </div>
      </div>

      <StoreSection />
      
      <ContactFooter />
    </div>);

}