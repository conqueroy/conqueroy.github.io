import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import ContactFooter from '@/components/sections/contact-footer';

export default function KiaGlobalRebrandPage() {
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
              <h1 className="text-[clamp(4rem,14vw,9rem)] leading-none text-center tracking-tight !font-normal !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Smart Products

              </h1>
            </div>
            
            {/* First image in hero area */}
            <div className="w-full h-full relative rounded-[10px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757146191531-pk0wtrxoof.png"
                alt="Product Design Elements"
                fill
                className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Uploaded Images in provided order */}
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20145-1758127721530.png"
            alt="Upload 1"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20146-1758127721482.png"
            alt="Upload 2"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20147-1758127726811.png"
            alt="Upload 3"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20148-1758127726597.png"
            alt="Upload 4"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20149-1758127724927.png"
            alt="Upload 5"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20150-1758127721514.png"
            alt="Upload 6"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20164-1758130227975.png"
            alt="Upload 7"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20152-1758127721531.png"
            alt="Upload 8"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-153-1760246655622.png"
            alt="Upload 9"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20154-1758127726072.png"
            alt="Upload 10"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20155-1758127726656.png"
            alt="Upload 11"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20156-1758127721397.png"
            alt="Upload 12"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20165-1758130227914.png"
            alt="Upload 13"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20159-1758127726558.png"
            alt="Upload 14"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20160-1758127725913.png"
            alt="Upload 15"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20161-1758127724524.png"
            alt="Upload 16"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20162-1758127725309.png"
            alt="Upload 17"
            fill
            className="object-cover" />
        </div>
      </section>
      <section className="w-full relative px-5 md:px-[55px] py-[10px]">
        <div className="relative w-full aspect-[21/9] rounded-[10px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame%20163-1758127725083.png"
            alt="Upload 18"
            fill
            className="object-cover" />
        </div>
      </section>

      {/* Project Details Section */}
      <section className="w-full bg-neutral-50 px-5 md:px-[55px] pt-[100px] md:pt-[150px] pb-[50px]">
        <div className="max-w-[1700px] mx-auto">
          {/* Mobile Layout - Stacked vertically */}
          <div className="block md:hidden space-y-6">
            <h3 className="text-[20px] font-medium text-gray-500">2022-2024</h3>
            <h1 className="text-[40px] font-medium text-black">Phynart</h1>
            <h3 className="text-[30px] font-medium text-black">Introducing a new range of smarthome IOT products</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
                  Phynart Technologies is a IoT startup making AI-powered, aesthetically sleek smart-home devices that retrofit into existing homes, giving mainstream users affordable automation, security, and predictive insights—all managed through a single app.
                </p>
                <p>This project is a compilation of a few devices that were designed and visualised by me during my tenure in the company.</p>
                <p>
                  While many of the products are yet to hit the market, all of them were approved POC. And one product did get manufactured and hit the market (smart switch controller).
                </p>
                <p>
                  One of the notable challenges, apart from the technical hurdles of product development, was maintaining a keen sense of the visual language established by the predecessor products — all while evolving a new-generation design language for the lineup.
                </p>
            </div>
            <div className="mt-8">
              <div className="mt-6 flex flex-wrap gap-2">
                {['Industrial Design', 'Research & Analysis', 'Sketching', 'CAD  Modelling', 'CMF Design', 'Product Visualization'].map((tag) =>
                <span key={tag} className="rounded-full border border-neutral-300 px-4 py-2 text-sm">{tag}</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid grid-cols-12 gap-8">
            {/* Client Section */}
            <div className="col-span-3">
              <h3 className="text-[20px] font-medium text-gray-500 mb-[1px]">2022-2024</h3>
              <p className="text-[40px] font-medium text-black">Phynart</p>
            </div>
            
            {/* Main Content */}
            <div className="col-span-8">
              <h2 className="text-4xl font-medium text-black mb-8">Introducing a new range of smarthome IOT products</h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-800">
                <p>
                  Phynart Technologies is a IoT startup making AI-powered, aesthetically sleek smart-home devices that retrofit into existing homes, giving mainstream users affordable automation, security, and predictive insights—all managed through a single app.
                </p>
                <p>This project is a compilation of a few devices that were designed and visualised by me during my tenure in the company.</p>
                <p>
                  While many of the products are yet to hit the market, all of them were approved POC. And one product did get manufactured and hit the market (smart switch controller).
                </p>
                <p>
                  One of the notable challenges, apart from the technical hurdles of product development, was maintaining a keen sense of the visual language established by the predecessor products — all while evolving a new-generation design language for the lineup.
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