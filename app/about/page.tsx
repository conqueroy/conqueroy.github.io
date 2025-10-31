import Navigation from '@/components/sections/navigation';
import ContactFooter from '@/components/sections/contact-footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero intro for About page */}
      <section className="bg-white text-primary">
        <div className="mx-auto max-w-[1920px] px-4 pt-[100px] md:px-10 md:pt-[150px]">
          {/* Negative space container for About title */}
          <div className="pt-[200px] md:pt-[250px] relative">
            {/* ABOUT text positioned in the negative space */}
            <div className="absolute top-[40px] left-0 right-0 h-[100px] flex items-center justify-center">
              <h1 className="text-[clamp(4rem,14vw,9rem)] -tracking-[0.04em] leading-none text-primary z-10 !whitespace-pre-line !font-(family-name:--font-geist) !font-normal !tracking-[-6px]">About

              </h1>
            </div>
            
            <video
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/About-Intro-Video-1760203625449.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover" />

          </div>
        </div>
      </section>

      {/* About Roy Details Section */}
      <section className="w-full bg-neutral-50 px-4 md:px-10 py-[75px]">
        <div className="max-w-[1700px] mx-auto grid grid-cols-12 gap-8">
          {/* About Roy Section */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-[40px] font-medium text-gray-500 mb-[5px]">About Roy</h3>
          </div>
          
          {/* Main Content */}
          <div className="col-span-12 md:col-span-8">
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
                I'm an industrial designer driven by curiosity, culture, and craft. My work bridges the physical and digital — from consumer electronics and IoT systems to everyday lifestyle products. I believe design isn't just about solving problems, but about creating experiences that feel human, intentional, and timeless. 
              </p>
              
              <p>
                Always inspired by quiet functionality, emotional form, and the subtle poetry of how people interact with objects. Whether I'm designing a watch, a photobooth, or a smart home device, my goal is to make things 1% better every day — through empathy, precision, and experimentation.
              </p>
              
              <p>
                Over the past few years, I've had the opportunity to work across diverse projects and environments — from designing connected smart home devices and product ecosystems at Phynart, to designing photo booths for Chalkak Studio, and making concept designs. I've also had the opportunity to work on Gen-AI workflows for industrial design, event exhibition experiences, and visual storytelling projects that explore how design interacts with people and context.
              </p>
            
            </div>
          </div>
        </div>
      </section>

      {/* 1px medium grey divider line */}
      <div className="w-full border-t border-gray-400"></div>

      {/* Beliefs Section */}
      <section className="w-full bg-neutral-50 px-4 md:px-10 py-[75px]">
        <div className="max-w-[1700px] mx-auto grid grid-cols-12 gap-8">
          {/* Beliefs Section */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-[40px] font-medium text-gray-500 mb-[5px]">Outside Design</h3>
          </div>
          
          {/* Main Content */}
          <div className="col-span-12 md:col-span-8">
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
               <p>
                At heart, I'm driven by curiosity and connection. I love observing how people live — the unspoken rituals that shape our everyday lives. My camera often follows me through travels and festivals, capturing moments of authenticity and imperfection.
              </p>
              
              <p>
                Those experiences constantly remind me why design matters — because it begins and ends with people. I'm also deeply drawn to dogs — to their honesty, patience, and companionship. These everyday moments of empathy and stillness influence my work more than I realize.
              </p>
              
              
              <p>
                Whether it's entrepreneurship or design, I'm guided by the same principle: build things that make life feel a little warmer, a little more human. 
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* 1px medium grey divider line */}
      <div className="w-full border-t border-gray-400"></div>

      {/* Experience Section */}
      <section className="w-full bg-neutral-50 px-4 md:px-10 py-[75px]">
        <div className="max-w-[1700px] mx-auto grid grid-cols-12 gap-8">
          {/* Experience Section */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-[40px] font-medium text-gray-500 mb-[5px]">Experience</h3>
          </div>
          
          {/* Main Content */}
          <div className="col-span-12 md:col-span-8">
            <div className="flex flex-wrap gap-2">
              {["Chalkak Studio", "Phynart Technologies", "Cereble Technologies", "Wipeband", "Oro Innovations", "Zira", "ClimateX", "Vetrinex Labs", "Spoyl"].map((tag) =>
                <span
                  key={tag}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm">
                  {tag}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 1px medium grey divider line */}
      <div className="w-full border-t border-gray-400"></div>

      {/* Misc Interests Section */}
      <section className="w-full bg-neutral-50 px-4 md:px-10 py-[75px]">
        <div className="max-w-[1700px] mx-auto grid grid-cols-12 gap-8">
          {/* Misc Interests Section */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-[40px] font-medium text-gray-500 mb-[5px]">Misc Interests</h3>
          </div>
          
          {/* Main Content */}
          <div className="col-span-12 md:col-span-8">
            <div className="flex flex-wrap gap-2">
              {["Photography", "Travel", "Music", "Art", "Technology", "Reading", "Boxing", "Callisthenics", "Movies", "Running"].map((tag) =>
                <span
                  key={tag}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm">
                  {tag}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <ContactFooter />
    </div>);

}