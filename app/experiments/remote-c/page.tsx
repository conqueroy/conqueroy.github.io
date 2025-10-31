import Image from 'next/image';
import Navigation from "@/components/sections/navigation";
import ContactFooter from "@/components/sections/contact-footer";

export default function RemoteCPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navigation />
      
      {/* Hero Section - Phynart layout */}
      <section className="bg-[#F4F4F4] text-black">
        <div className="mx-auto max-w-[1920px] px-5 md:px-10 pt-[100px] md:pt-[150px]">
          {/* Negative space container for title */}
          <div className="pt-[250px] relative !w-[99.9%] !h-full">
            {/* Project title centered */}
            <div className="absolute top-[40px] left-0 right-0 h-[100px] flex items-center justify-center text-center">
              <h1 className="text-[clamp(4rem,14vw,9rem)] leading-none text-center tracking-tight !font-normal !whitespace-pre-line">{`AI Images`}</h1>
            </div>
            
            {/* Hero image block */}
            <div className="w-full h-full relative rounded-[10px] overflow-hidden">
              

            </div>
          </div>
        </div>
      </section>

      {/* Inserted Phynart media assets */}
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-230-1759847694029.png"
            alt="Standard Angle Photo Booth"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-231-1759847211428.png"
            alt="Upload 17"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-232-1759847503555.png"
            alt="Photo Booth Retail Experience"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-233-1759847503191.png"
            alt="Photo Booth Color Variants"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-234-1759847501492.png"
            alt="High Angle Photo Booth Product"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-235-1759847503879.png"
            alt="Photo Booth Neon Signage"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-236-1759847504169.png"
            alt="Photo Booth Interior Experience"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-237-1759847503936.png"
            alt="Photo Booth Wall Mounted Variants"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-238-1759847504454.png"
            alt="Low Angle Photo Booth Product"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-239-1759847504066.png"
            alt="Photo Booth Arcade Environment"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-240-1759847504135.png"
            alt="Photo Booth User Experience"
            fill
            className="object-cover" />

        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-241-1759847503866.png"
            alt="Photo Booth Arcade Color Collection"
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
            <h1 className="text-[40px] font-medium text-black">AI Images Compilation</h1>
            <h3 className="text-[30px] font-medium text-black">Gen AI for Industrial</h3>
           <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
                This project explores the use of generative AI as a creative tool for producing photorealistic product renders, dynamic environments, and human interactions around the product. By integrating AI-driven image generation into the design and visualization workflow, I've been able to rapidly prototype product contexts, simulate lifestyle scenarios, and visualize brand narratives with greater speed and flexibility than traditional rendering pipelines allow.
              </p>
              <p>
                Every image showcased here was created through a combination of AI tools and manual refinement—balancing creative direction, composition, and realism. Importantly, these visuals are not hypothetical experiments. All of them are currently live on Chalkak Studio, actively deployed as part of real product campaigns and brand communication.
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
              <p className="text-[40px] font-medium text-black !whitespace-pre-line">AI Images Compilation</p>
            </div>
            
            {/* Main Content */}
            <div className="col-span-8">
              <h2 className="text-4xl font-medium text-black mb-8 !whitespace-pre-line">Gen AI for Industrial Design</h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-800">
                <p>
                This project explores the use of generative AI as a creative tool for producing photorealistic product renders, dynamic environments, and human interactions around the product. By integrating AI-driven image generation into the design and visualization workflow, I've been able to rapidly prototype product contexts, simulate lifestyle scenarios, and visualize brand narratives with greater speed and flexibility than traditional rendering pipelines allow.
              </p>
              <p>
                Every image showcased here was created through a combination of AI tools and manual refinement—balancing creative direction, composition, and realism. Importantly, these visuals are not hypothetical experiments. All of them are currently live on Chalkak Studio, actively deployed as part of real product campaigns and brand communication.
              </p>
                <div className="mt-12">
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Generative AI', 'Product Visualization', 'Adaptive Rendering'].map((tag) =>
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