import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import ContactFooter from '@/components/sections/contact-footer';

export default function AnimationsPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#F4F4F4] text-black">
        <div className="mx-auto max-w-[1920px] px-5 md:px-[55px] pt-[100px] md:pt-[150px]">
          {/* Negative space container for title */}
          <div className="pt-[200px] md:pt-[250px] relative">
            {/* Project title centered */}
            <div className="absolute top-[40px] left-0 right-0 h-[100px] flex items-center justify-center text-center">
              <h1 className="text-[clamp(4rem,14vw,9rem)] leading-none text-center tracking-tight !font-normal !whitespace-pre-line">Animations</h1>
            </div>
            
            {/* Hero image block */}
            <div className="w-full aspect-[21/9] relative rounded-[10px] overflow-hidden">
              <video
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/V3-1-1759934665921.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Media assets */}
      <section className="w-full relative px-5 md:px-[55px] pt-[20px] pb-[10px]">
        <div className="flex flex-col md:flex-row gap-[10px]">
          <div className="relative w-full md:flex-1 aspect-[10.5/9] rounded-[10px] overflow-hidden">
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Short-commercial-for-logitech-mouse-1759935811979.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full md:flex-1 aspect-[10.5/9] rounded-[10px] overflow-hidden">
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/CMF-logitech-mouse-1-1759935812335.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="flex flex-col md:flex-row gap-[10px]">
          <div className="relative w-full md:flex-1 aspect-[10.5/9] rounded-[10px] overflow-hidden">
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-video-Made-with-Clipchamp-1759940558504.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full md:flex-1 aspect-[10.5/9] rounded-[10px] overflow-hidden">
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-video-Made-with-Clipchamp-2-1759941458048.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="flex flex-col md:flex-row gap-[10px]">
          <div className="relative w-full md:flex-1 aspect-[10.5/9] rounded-[10px] overflow-hidden">
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-video-Made-with-Clipchamp-1-1759942153237.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full md:flex-1 aspect-[10.5/9] rounded-[10px] overflow-hidden">
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-video-Made-with-Clipchamp-3-1759941589464.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Project Details Section */}
      <section className="w-full bg-[#F4F4F4] px-5 md:px-[55px] pt-[100px] md:pt-[150px] pb-[50px]">
        <div className="max-w-[1700px] mx-auto">
          {/* Mobile Layout - Stacked vertically */}
          <div className="block md:hidden space-y-6">
            <h3 className="text-[20px] font-medium text-gray-500">2020-21</h3>
            <h1 className="text-[40px] font-medium text-black">Product Animations</h1>
            <h3 className="text-[30px] font-medium text-black">Meaning in Motion</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
                  This project is a curated compilation of my product animation work, created over the years using traditional 3D motion software—primarily Blender. Each animation captures not only the product's form and function but also its emotion and purpose. From lighting to timing, every frame is crafted to enhance storytelling and communicate design intent effectively.
                </p>
                <p>
                  Product animation, for me, goes beyond visual flair—it's about creating an experience that bridges the gap between design and perception. Motion allows me to express how a product feels in the real world: how it reflects light, responds to interaction, and fits into its intended environment. Through these animations, I strive to convey the tactile and emotional essence of each design, something static visuals often fall short of.
                </p>
            </div>
            <div className="mt-8">
              <div className="mt-6 flex flex-wrap gap-2">
                {['Brand Identity', 'Logo Design', 'Visual Identity', 'Print Design'].map((tag) =>
                <span key={tag} className="rounded-full border border-neutral-300 px-4 py-2 text-sm">{tag}</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid grid-cols-12 gap-8">
            {/* Client/Year */}
            <div className="col-span-3">
              <h3 className="text-[20px] font-medium text-gray-500 mb-[1px] !whitespace-pre-line">2020-21</h3>
              <p className="text-[40px] font-medium text-black !whitespace-pre-line">Product Animations</p>
            </div>
            
            {/* Main Content */}
            <div className="col-span-8">
              <h2 className="text-4xl font-medium text-black mb-8 !whitespace-pre-line">Meaning in Motion</h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-800">
                <p>
                  This project is a curated compilation of my product animation work, created over the years using traditional 3D motion software—primarily Blender. Each animation captures not only the product's form and function but also its emotion and purpose. From lighting to timing, every frame is crafted to enhance storytelling and communicate design intent effectively.
                </p>
                <p>
                  Product animation, for me, goes beyond visual flair—it's about creating an experience that bridges the gap between design and perception. Motion allows me to express how a product feels in the real world: how it reflects light, responds to interaction, and fits into its intended environment. Through these animations, I strive to convey the tactile and emotional essence of each design, something static visuals often fall short of.
                </p>
                <div className="mt-12">
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Product Visualization', 'Product Animation', 'Blender3D', 'Storytelling'].map((tag) =>
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
    </div>
  );
}