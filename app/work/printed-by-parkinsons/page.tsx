import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import ContactFooter from '@/components/sections/contact-footer';

export default function PrintedByParkinsonsPage() {
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
              <h1 className="text-[clamp(4rem,14vw,9rem)] leading-none text-center tracking-tight !font-normal !whitespace-pre-line !whitespace-pre-line">Grokia-M</h1>
            </div>
            
            {/* Hero image block */}
            <div className="w-full h-full relative rounded-[10px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757146191531-pk0wtrxoof.png"
                alt="Printed by Parkinson's Hero"
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
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20193-1758565015571.png"
            alt="Upload 1"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20194-1758566002031.png"
            alt="Upload 2"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20195-1758566008779.png"
            alt="Upload 3"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20196-1758566002594.png"
            alt="Upload 4"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20197-1758565016183.png"
            alt="Upload 5"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20198-1758565018971.png"
            alt="Upload 6"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20199-1758566002635.png"
            alt="Upload 7"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20200-1758565019173.png"
            alt="Upload 8"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20201-1758565016253.png"
            alt="Upload 9"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20202-1758565018170.png"
            alt="Upload 10"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20203-1758565019185.png"
            alt="Upload 11"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20204-1758565017127.png"
            alt="Upload 12"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20205-1758565016232.png"
            alt="Upload 13"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20206-1758565016285.png"
            alt="Upload 14"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20207-1758565015728.png"
            alt="Upload 15"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20208-1758565015770.png"
            alt="Upload 16"
            fill
            className="object-cover" />
        </div>
      </section>
      
      {/* Project Details Section - Phynart layout */}
      <section className="w-full bg-[#F4F4F4] px-5 md:px-[55px] pt-[100px] md:pt-[150px] pb-[50px]">
        <div className="max-w-[1700px] mx-auto">
          {/* Mobile Layout - Stacked vertically */}
          <div className="block md:hidden space-y-6">
            <h3 className="text-[20px] font-medium text-gray-500">2020-21</h3>
            <h1 className="text-[40px] font-medium text-black">Grokia-M</h1>
            <h3 className="text-[30px] font-medium text-black">University Project</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
               <p>
                  Grokia-M is a smart IoT device designed for monitoring beehives.This project was part of an electromechanical design course during my undergraduate studies at UID. 
                </p>
                <p>
                  The objective of the exercise was to develop a deep understanding of a chosen domain (in my case, apiculture), interview stakeholders, analyze processes, identify their pain points, and design potential solutions to address those challenges.
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
              <p className="text-[40px] font-medium text-black !whitespace-pre-line">Grokia-M</p>
            </div>
            
            {/* Main Content */}
            <div className="col-span-8">
              <h2 className="text-4xl font-medium text-black mb-8 !whitespace-pre-line">University Project</h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-800">
                <p>
                  Grokia-M is a smart IoT device designed for monitoring beehives.This project was part of an electromechanical design course during my undergraduate studies at UID. 
                </p>
                <p>
                  The objective of the exercise was to develop a deep understanding of a chosen domain (in my case, apiculture), interview stakeholders, analyze processes, identify their pain points, and design potential solutions to address those challenges.
                </p>
                <div className="mt-12">
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Industrial Design', 'Research & Analysis', 'Sketching', 'Prototyping', 'CAD  Modelling', 'CMF Design', 'Product Visualization'].map((tag) =>
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