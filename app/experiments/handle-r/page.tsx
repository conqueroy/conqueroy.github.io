import Image from 'next/image';
import Navigation from "@/components/sections/navigation";
import ContactFooter from "@/components/sections/contact-footer";

export default function HandleRPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navigation />
      
      {/* Hero Section - Phynart layout */}
      <section className="bg-[#F4F4F4] text-black">
        <div className="mx-auto max-w-[1920px] px-5 md:px-10 pt-[100px] md:pt-[150px]">
          {/* Negative space container for title */}
          <div className="pt-[250px] relative">
            {/* Project title centered */}
            <div className="absolute top-[40px] left-0 right-0 h-[100px] flex items-center justify-center text-center">
              <h1 className="text-[clamp(4rem,14vw,9rem)] leading-none text-center tracking-tight !font-normal !whitespace-pre-line">{`Photography`}</h1>
            </div>
            
            {/* Hero image block */}
            <div className="w-full h-full relative rounded-[10px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-244-1759846798691.png"
                alt="Photography Hero"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photography images */}
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-242-1759846798119.png"
            alt="Shoots for Ugra"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-243-1759846798769.png"
            alt="Fashion Photography"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-244-1759846904513.png"
            alt="Fashion Footwear Collection"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-245-1759846904416.png"
            alt="Editorial Fashion Photography"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-246-1759846904393.png"
            alt="Urban Fashion Photography"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-247-1759847042579.png"
            alt="Strappy Heels Collection"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-248-1759847041318.png"
            alt="Calcutta and Durga Puja"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-249-1759847043248.png"
            alt="Street Life Calcutta"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-250-1759847043695.png"
            alt="Durga Puja Festival"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-251-1759847043500.png"
            alt="Temple Architecture"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-252-1759847043667.png"
            alt="Festival Interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Details Section - Phynart layout */}
      <section className="w-full bg-neutral-50 px-5 md:px-[55px] pt-[100px] md:pt-[150px] pb-[50px]">
        <div className="max-w-[1700px] mx-auto">
          {/* Mobile Layout - Stacked vertically */}
          <div className="block md:hidden space-y-6">
            <h3 className="text-[20px] font-medium text-gray-500">2024</h3>
            <h1 className="text-[40px] font-medium text-black">Photography</h1>
            <h2 className="text-4xl font-medium text-black">Capturing Stories</h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
                This project brings together two distinct yet connected facets of my photography journey—professional campaign shoots and personal documentary work. The first segment features photographs captured for Ugra, where I led creative direction and execution for campaign-based product shoots. Each frame was carefully composed to align with the brand's visual language, balancing mood, tone, and storytelling to create cohesive, high-impact imagery.
              </p>
              <p>
                The second segment captures a more personal side—Durga Puja 2025, a documentation of the festival through my lens. This series reflects my fascination with culture, light, and emotion—freezing spontaneous human moments that define the spirit of the celebration.
              </p>
            </div>
            <div className="mt-8">
              <div className="mt-6 flex flex-wrap gap-2">
                {['Editorial Design', 'Book Layout', 'Typography', 'Art Direction'].map((tag) => (
                  <span key={tag} className="rounded-full border border-neutral-300 px-4 py-2 text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid grid-cols-12 gap-8">
            {/* Client/Year */}
            <div className="col-span-3">
              <h3 className="text-[20px] font-medium text-gray-500 mb-[1px]">2024</h3>
              <p className="text-[40px] font-medium text-black !whitespace-pre-line">Photography</p>
            </div>
            
            {/* Main Content */}
            <div className="col-span-8">
              <h2 className="text-4xl font-medium text-black mb-8 !whitespace-pre-line">Camera Stories</h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-800">
                <p>
                This project brings together two distinct yet connected facets of my photography journey—professional campaign shoots and personal documentary work. The first segment features photographs captured for Ugra, where I led creative direction and execution for campaign-based product shoots. Each frame was carefully composed to align with the brand's visual language, balancing mood, tone, and storytelling to create cohesive, high-impact imagery.
              </p>
              <p>
                The second segment captures a more personal side—Durga Puja 2025, a documentation of the festival through my lens. This series reflects my fascination with culture, light, and emotion—freezing spontaneous human moments that define the spirit of the celebration.
              </p>
                <div className="mt-12">
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Creative Direction', 'Storytelling', 'Product Photoshoot'].map((tag) => (
                      <span key={tag} className="rounded-full border border-neutral-300 px-4 py-2 text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}