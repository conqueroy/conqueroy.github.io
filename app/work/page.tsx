import Navigation from '@/components/sections/navigation';
import SelectedWork from '@/components/sections/selected-work';
import ContactFooter from '@/components/sections/contact-footer';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero intro */}
      <section className="bg-white text-primary">
        <div className="mx-auto max-w-[1920px] px-5 md:px-10 pt-[100px] md:pt-[150px]">
          {/* Negative space container for Work title */}
          <div className="pt-[200px] md:pt-[250px] relative">
            {/* WORK text positioned in the negative space */}
            <div className="absolute top-[40px] left-0 right-0 h-[100px] flex items-center justify-center">
              <h1 className="text-[clamp(4rem,14vw,9rem)] -tracking-[0.04em] leading-none text-primary z-10 !whitespace-pre-line !font-normal !font-(family-name:--font-geist) !tracking-[-6px]">Work

              </h1>
            </div>
            
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Work-Intro-1759807680070.mov"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover" />

          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <div className="mt-10 md:mt-20 px-4 sm:px-8 lg:px-[60px] mb-[50px]">
        <p className="max-w-[32ch] text-2xl leading-tight md:max-w-[45ch] md:text-3xl lg:text-[40px] lg:leading-[1.1]">Work is the only faith I follow. It's what drives me every day, pushing me to design something at least 1% better than yesterday.
        </p>
        
        {/* Tags section */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["Industrial Design", "Concept Design", "Product Visualization", "Packaging Design"].map((tag) =>
          <span
            key={tag}
            className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm !whitespace-pre-line !whitespace-pre-line">
              {tag}
            </span>
          )}
        </div>
      </div>
      
      {/* Updated to be work-page specific */}
      <SelectedWork title="Freshly Brewed" compact />
      <ContactFooter />
    </div>);

}