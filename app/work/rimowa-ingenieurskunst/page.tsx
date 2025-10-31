import Image from 'next/image';
import Navigation from "@/components/sections/navigation";
import ContactFooter from "@/components/sections/contact-footer";

export default function RimowaIngenieurskunstPage() {
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
              <h1 className="text-[clamp(4rem,14vw,9rem)] leading-none text-center tracking-tight !font-normal !whitespace-pre-line !whitespace-pre-line">SWR Speakers</h1>
            </div>
            
            {/* Hero image block */}
            <div className="w-full h-full relative rounded-[10px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757146191531-pk0wtrxoof.png"
                alt="Rimowa Ingenieurskunst Hero"
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
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20175-1758476647634.png"
            alt="Upload 1"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20176-1758476496045.png"
            alt="Upload 2"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20177-1758476742333.png"
            alt="Upload 3"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20178-1758476736151.png"
            alt="Upload 4"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20179-1758476742465.png"
            alt="Upload 5"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20180-1758476759211.png"
            alt="Upload 6"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20181-1758476671042.png"
            alt="Upload 7"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20182-1758476714595.png"
            alt="Upload 8"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20183-1758476499045.png"
            alt="Upload 9"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20184-1758476706853.png"
            alt="Upload 10"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20185-1758476785521.png"
            alt="Upload 11"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20186-1758476566856.png"
            alt="Upload 12"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20187-1758476663342.png"
            alt="Upload 13"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20188-1758476553364.png"
            alt="Upload 14"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20189-1758476705778.png"
            alt="Upload 15"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20190-1758476649555.png"
            alt="Upload 16"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20191-1758476698823.png"
            alt="Upload 17"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20192-1758476479595.png"
            alt="Upload 18"
            fill
            className="object-cover" />
        </div>
      </section>

      {/* Project Details Section - Phynart layout */}
      <section className="w-full bg-neutral-50 px-5 md:px-[55px] pt-[100px] md:pt-[150px] pb-[50px]">
        <div className="max-w-[1700px] mx-auto">
          {/* Mobile Layout - Stacked vertically */}
          <div className="block md:hidden space-y-6">
            <h3 className="text-[20px] font-medium text-gray-500">2023</h3>
            <h1 className="text-[40px] font-medium text-black">SWR Speakers</h1>
            <h3 className="text-[30px] font-medium text-black">Speculative Design approach at modernism</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
                Rimowa represents the pinnacle of German engineering in luxury luggage. Our collaboration focused on translating their heritage of precision craftsmanship into a contemporary digital experience that honors their 125-year legacy.
              </p>
              <p>
                The concept "Ingenieurskunst" – the art of engineering – became the foundation for expressing how technical mastery can achieve aesthetic perfection.
              </p>
            </div>
            <div className="mt-8">
              <div className="mt-6 flex flex-wrap gap-2">
                {['Brand Identity', 'Art Direction', 'Digital Design'].map((tag) =>
                <span key={tag} className="rounded-full border border-neutral-300 px-4 py-2 text-sm">{tag}</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid grid-cols-12 gap-8">
            {/* Client/Year */}
            <div className="col-span-3">
              <h3 className="text-[20px] font-medium text-gray-500 mb-[1px] !whitespace-pre-line">2023</h3>
              <p className="text-[40px] font-medium text-black !whitespace-pre-line">SWR Speakers</p>
            </div>
            
            {/* Main Content */}
            <div className="col-span-8">
              <h2 className="text-4xl font-medium text-black mb-8 !whitespace-pre-line">Speculative Design approach at modernism</h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-800">
                <p>
                  This collection presents three distinct speaker designs—each evoking its own emotional resonance while sharing a unified CMF language. Despite their varied forms, every design exudes a premium quality and sophisticated identity.
                </p>
                <p>
                  At present, this project is purely a conceptual CMF exploration. It began as a thought experiment with the question: "What if Apple made good speakers?"—not some avant-garde smart speaker with Siri, but truly high-quality Hi-Fi speakers. These are my thoughts on how they might look if Apple ever pursued that direction.
                </p>
                <p>
                  While I did study speaker mechanisms and sound properties at the start of this project, those insights are not yet fully reflected in the current outcomes. There are plans to further develop the project, build prototypes, and actually test them in the future.
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