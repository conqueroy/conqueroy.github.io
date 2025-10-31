import Image from 'next/image';
import Navigation from "@/components/sections/navigation";
import ContactFooter from "@/components/sections/contact-footer";

export default function GaggenauBookDesignPage() {
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
              <h1 className="text-[clamp(4rem,14vw,9rem)] leading-none text-center tracking-tight !font-normal !whitespace-pre-line !whitespace-pre-line">{`Mod-U`}</h1>
            </div>
            
            {/* Hero image block */}
            <div className="w-full h-full relative rounded-[10px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757146191531-pk0wtrxoof.png"
                alt="Gaggenau Book Design Hero"
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
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20209-1758903654730.png"
            alt="Upload 1"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20210-1758903662320.png"
            alt="Upload 2"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20211-1758906364758.png"
            alt="Upload 3"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20212-1758903662299.png"
            alt="Upload 4"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20213-1758903666045.png"
            alt="Upload 5"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20214-1758903663843.png"
            alt="Upload 6"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20215-1758903662250.png"
            alt="Upload 7"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20216-1758903662663.png"
            alt="Upload 8"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20217-1758903662979.png"
            alt="Upload 9"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20218-1758903666027.png"
            alt="Upload 10"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20219-1758903644548.png"
            alt="Upload 11"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20220-1758903659544.png"
            alt="Upload 12"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20221-1758903652072.png"
            alt="Upload 13"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20222-1758903660535.png"
            alt="Upload 14"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20223-1758903661132.png"
            alt="Upload 15"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20224-1758903640152.png"
            alt="Upload 16"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20225-1758903657867.png"
            alt="Upload 17"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20226-1758903654575.png"
            alt="Upload 18"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20227-1758903645402.png"
            alt="Upload 19"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20228-1758903658185.png"
            alt="Upload 20"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20229-1758903658185.png"
            alt="Upload 21"
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
            <h1 className="text-[40px] font-medium text-black">Mod-U</h1>
            <h3 className="text-[30px] font-medium text-black">An assignment turned to project</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
                Mod-U began as a simple assignment that quickly evolved into a full-fledged concept project. A company had approached me with a three-day challenge—to design an innovative smartwatch. Although the brief was conceptual, they wanted the outcome to feel as practical and feasible as possible. To achieve that, I studied the internals of existing smartwatches to understand their components, layout, and technical limitations.
              </p>
              <p>
                My thought process revolved around a single question: What can I make different—something that might already exist in the market but could be pushed a step further? During my research, I came across a few smartwatches that featured built-in cameras. That discovery left a strong impression and sparked a new direction in my thinking.
              </p>
              <p>
                I began exploring the idea of giving the watch an actual action-camera-like attachment—a GoPro-style module with a higher-resolution camera—while using the watch's screen as the interface. And that's how the idea for a modular smartwatch was born. MOD-U—a smartwatch designed to adapt, evolve, and redefine what a wearable can be.
              </p>          
            </div>
            <div className="mt-8">
              <div className="mt-6 flex flex-wrap gap-2">
                {['Editorial Design', 'Book Layout', 'Typography', 'Art Direction'].map((tag) =>
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
              <p className="text-[40px] font-medium text-black !whitespace-pre-line">Mod-U</p>
            </div>
            
            {/* Main Content */}
            <div className="col-span-8">
              <h2 className="text-4xl font-medium text-black mb-8 !whitespace-pre-line">An assignment turned to project</h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-800">
                <p>
                Mod-U began as a simple assignment that quickly evolved into a full-fledged concept project. A company had approached me with a three-day challenge—to design an innovative smartwatch. Although the brief was conceptual, they wanted the outcome to feel as practical and feasible as possible. To achieve that, I studied the internals of existing smartwatches to understand their components, layout, and technical limitations.
              </p>
              <p>
                My thought process revolved around a single question: What can I make different—something that might already exist in the market but could be pushed a step further? During my research, I came across a few smartwatches that featured built-in cameras. That discovery left a strong impression and sparked a new direction in my thinking.
              </p>
              <p>
                I began exploring the idea of giving the watch an actual action-camera-like attachment—a GoPro-style module with a higher-resolution camera—while using the watch's screen as the interface. And that's how the idea for a modular smartwatch was born. MOD-U—a smartwatch designed to adapt, evolve, and redefine what a wearable can be.
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