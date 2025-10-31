import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import ContactFooter from '@/components/sections/contact-footer';

export default function AstonMartinValourPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navigation />
      
      {/* Hero Section - Phynart layout */}
      <section className="bg-[#F4F4F4] text-black">
        <div className="mx-auto max-w-[1920px] px-5 md:px-10 pt-[100px] md:pt-[150px]">
          {/* Negative space container for title */}
          <div className="pt-[200px] md:pt-[250px] relative">
            {/* Project title centered */}
            <div className="absolute top-[40px] left-0 right-0 h-[100px] flex items-center justify-center text-center">
              <h1 className="text-[clamp(4rem,14vw,9rem)] leading-none text-center tracking-tight !font-normal !whitespace-pre-line !whitespace-pre-line">Starwatch</h1>
            </div>
            
            {/* Hero image block */}
            <div className="w-full h-full relative rounded-[10px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757146191531-pk0wtrxoof.png"
                alt="Aston Martin Valour Hero"
                fill
                className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Inserted Phynart media assets */}
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20166-1758369847236.png"
            alt="Upload 1"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20167-1758369845943.png"
            alt="Upload 2"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20168-1758369846036.png"
            alt="Upload 3"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20169-1758369845238.png"
            alt="Upload 4"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20170-1758369845962.png"
            alt="Upload 5"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20171-1758369847288.png"
            alt="Upload 6"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20172-1758369847332.png"
            alt="Upload 7"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20173-1758369846265.png"
            alt="Upload 8"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20174-1758369847354.png"
            alt="Upload 9"
            fill
            className="object-cover" />
        </div>
      </section>

      {/* Project Details Section - Phynart layout */}
      <section className="w-full bg-neutral-50 px-5 md:px-[55px] pt-[100px] md:pt-[150px] pb-[50px]">
        <div className="max-w-[1700px] mx-auto">
          {/* Mobile Layout - Stacked vertically */}
          <div className="block md:hidden space-y-6">
            <h3 className="text-[20px] font-medium text-gray-500">2024</h3>
            <h1 className="text-[40px] font-medium text-black">YDxTitan</h1>
            <h3 className="text-[30px] font-medium text-black">A retrofuturistic watch</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
                This project was the result of a online competition organised by Titan and Yanko Design. The theme was to design a watch that evokes a sense of retrofuturism.
              </p>
              <p>
                Here's a bit about my thought process. Just as the color red evokes certain emotions (which may vary across cultures), every emotion can be broken down and triggered by certain forms, shapes, and other metaphysical properties of nature. In this instance, the word retro literally describes something from the past, while futuristic points toward the future. I instantly knew that my inspiration could be found in popular pop-culture references—movies and series from the past that were set in their own time but told stories of a distant future.
              </p>
              <p>
                Thus enters Star Wars. I remember watching the original trilogy back in college. While it's a personal favorite, it's also an iconic piece of pop culture—making it ideal for strong relatability on social media. This also inspired the name the product - Starwatch, to help viewers create an instant connection with the movies.
              </p>
            </div>
            <div className="mt-8">
              <div className="mt-6 flex flex-wrap gap-2">
                {['Brand Identity', 'Art Direction', 'Campaign Strategy', 'Visual Design'].map((tag) =>
                <span key={tag} className="rounded-full border border-neutral-300 px-4 py-2 text-sm">{tag}</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid grid-cols-12 gap-8">
            {/* Client/Year */}
            <div className="col-span-3">
              <h3 className="text-[20px] font-medium text-gray-500 mb-[1px]">2024</h3>
              <p className="text-[40px] font-medium text-black !whitespace-pre-line !whitespace-pre-line">YDxTitan</p>
            </div>
            
            {/* Main Content */}
            <div className="col-span-8">
              <h2 className="text-4xl font-medium text-black mb-8 !whitespace-pre-line">A retrofuturistic watch</h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-800">
                <p>
                This project was the result of a online competition organised by Titan and Yanko Design. The theme was to design a watch that evokes a sense of retrofuturism.
              </p>
              <p>
                Here's a bit about my thought process. Just as the color red evokes certain emotions (which may vary across cultures), every emotion can be broken down and triggered by certain forms, shapes, and other metaphysical properties of nature. In this instance, the word retro literally describes something from the past, while futuristic points toward the future. I instantly knew that my inspiration could be found in popular pop-culture references—movies and series from the past that were set in their own time but told stories of a distant future.
              </p>
              <p>
                Thus enters Star Wars. I remember watching the original trilogy back in college. While it's a personal favorite, it's also an iconic piece of pop culture—making it ideal for strong relatability on social media. This also inspired the name the product - Starwatch, to help viewers create an instant connection with the movies.
              </p>
                <div className="mt-12">
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Industrial Design', 'Research & Analysis', 'Sketching', 'CAD  Modelling', 'CMF Design', 'Product Visualization'].map((tag) =>
                    <span key={tag} className="rounded-full border border-neutral-300 px-4 py-2 text-sm">{tag}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>);

}