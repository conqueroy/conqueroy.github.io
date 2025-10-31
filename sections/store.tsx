import React from 'react';
import Image from 'next/image';

const templates = [
{
  title: "AI Images",
  tag: "Compilation",
  subtitle: 'Compilation',
  imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/AI-Images-1759264396480.png',
  link: '/experiments/remote-c'
},
{
  title: "Youtube",
  tag: "Podcasts",
  subtitle: 'videography',
  imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Youtube-1759264394875.png',
  link: 'https://youtube.com/@swarajitroyy?si=UPxem09oQZS4h4Gl'
},
{
  title: "Photography",
  tag: "General, Objects, Nature",
  subtitle: 'Objects',
  imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Photography-1759264396322.png',
  link: '/experiments/handle-r'
}];


const StoreSection = () => {
  return (
    <section>
      <div className="relative h-[65vh] md:h-[85vh] w-full overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Frame-253-1759861871015.png"
          alt="Store background"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          priority />


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h2 className="font-soehne-kraftig text-[clamp(2.5rem,12vw,9rem)] leading-none tracking-tighter mb-2.5 md:mb-5 max-w-full px-4">Store | Coming Soon</h2>
        </div>
      </div>
      <div className="bg-light-gray text-primary py-16 md:py-24 px-4 sm:px-8 lg:px-[60px]">
        <div className="max-w-[1728px] mx-auto">
          <div className="flex justify-between items-center mb-4">
            <p className="font-soehne-web-buch text-sm !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Finding Meaning In The Daily</p>
            <a
              href="/experiments"
              className="font-soehne-web-buch text-sm underline hover:no-underline">
              View all
            </a>
          </div>
          <h2 className="font-soehne-kraftig text-[clamp(2.5rem,12vw,9rem)] leading-none tracking-tighter mb-12 md:mb-16 !whitespace-pre-line">Experiments

          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {templates.map((template) =>
            <a
              key={template.title}
              href={template.link}
              target={template.link.startsWith('http') ? "_blank" : undefined}
              rel={template.link.startsWith('http') ? "noopener noreferrer" : undefined}
              className="group block">

                <div className="overflow-hidden rounded-lg mb-4 aspect-[1/1.1]">
                  <Image
                  src={template.imageUrl}
                  alt={template.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105" />

                </div>
                <div className="font-soehne-web-buch text-base md:text-lg">
                  <p className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{template.title}</p>
                  <p className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{template.tag}</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default StoreSection;