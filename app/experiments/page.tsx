import Navigation from '@/components/sections/navigation';
import ContactFooter from '@/components/sections/contact-footer';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkPage() {
  // Local, independent experiments data (separate from work projects)
  const experiments = [
  {
    title: 'Remote-C',
    subtitle: 'Concept Design',
    imageUrl:
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/AI-Images-1759264396480.png',
    comingSoon: false,
    href: '/experiments/remote-c'
  },
  {
    title: 'Grind-R',
    subtitle: 'Concept Design',
    imageUrl:
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Youtube-1759264394875.png',
    comingSoon: true
  },
  {
    title: 'Handle-R',
    subtitle: 'Industrial Design',
    imageUrl:
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Photography-1759264396322.png',
    comingSoon: false,
    href: '/experiments/handle-r'
  },
  {
    title: "Project Basterdz",
    subtitle: 'Food Delivery',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Project-Basterdz-1759264396783.png',
    comingSoon: true
  },
  {
    title: 'Caffeine Exp.',
    subtitle: 'Discovery',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Caffeine-Exp-1759264397256.png',
    comingSoon: true
  },
  {
    title: 'Pinsperson',
    subtitle: 'Mini Business',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Pinsperson-1759264396929.png',
    comingSoon: true
  }];


  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero intro for Experiments page */}
      <section className="bg-white text-primary">
        <div className="mx-auto max-w-[1920px] px-5 md:px-10 pt-[100px] md:pt-[150px]">
          {/* Negative space container for Experiments title */}
          <div className="pt-[200px] md:pt-[250px] relative">
            {/* EXPERIMENTS text positioned in the negative space */}
            <div className="absolute top-[40px] left-0 right-0 h-[100px] flex items-center justify-center">
              <h1 className="text-[clamp(4rem,14vw,9rem)] -tracking-[0.04em] leading-none text-primary z-10 !whitespace-pre-line !font-normal !font-(family-name:--font-geist) !tracking-[-6px]">Experiments

              </h1>
            </div>
            
            <div className="aspect-[21/9] w-full overflow-hidden">
              <video
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Experiment-Intro-1759807686042.mov"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <div className="mt-10 md:mt-20 px-4 sm:px-8 lg:px-[60px]">
        <p className="max-w-[32ch] font-soehne-web-buch text-2xl leading-tight md:max-w-[45ch] md:text-3xl lg:text-[40px] lg:leading-[1.1] !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Experimentation is at the heart of my learning process. Every breakthrough and discovery I've made is rooted in trial, error, and iteration.


        </p>
        
        {/* Tags section */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["Gen AI for Design", "Podcasting", "Business Experiment", "Machine and more"].map((tag) =>
          <span
            key={tag}
            className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-soehne-web-buch">
              {tag}
            </span>
          )}
        </div>
      </div>
      
      {/* Independent Experiments Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-[60px]">
        <div className="mx-auto max-w-[1920px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {experiments.map((project, index) => {
              const isLinkable = project.href && !project.comingSoon;
              const cardClassName = `group relative block aspect-[1/1.1] w-full overflow-hidden rounded-2xl ${project.comingSoon ? 'cursor-not-allowed' : ''}`;

              const cardContent = (
                <>
                  {project.imageUrl ?
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} - ${project.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" /> :
                  <div className="absolute inset-0 bg-neutral-200 transition-transform duration-500 ease-in-out group-hover:scale-105" />
                  }

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Bottom overlay and interactions */}
                  {index === 0 &&
                  <a
                    href="https://youtube.com/@swarajitroyy?si=UPxem09oQZS4h4Gl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open YouTube channel"
                    className="absolute inset-0 z-10" />
                  }

                  {index === 1 &&
                  <a
                    href="https://youtube.com/@swarajitroyy?si=UPxem09oQZS4h4Gl"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open YouTube channel"
                    className="absolute inset-0 z-10 cursor-pointer" />
                  }

                  <div className="absolute bottom-5 left-5 right-5">
                    {index === 0 ?
                    <div className="flex flex-wrap items-end gap-2 text-white">
                        <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                          <p className="text-sm font-medium leading-tight text-white">AI Images</p>
                        </div>
                        <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                          <p className="text-xs leading-tight text-white !whitespace-pre-line">Compilation</p>
                        </div>
                      </div> :
                    index === 1 ?
                    <div className="flex flex-wrap items-end gap-2 text-white">
                          <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                            <p className="text-sm font-medium leading-tight text-white">podcasts</p>
                          </div>
                          <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                            <p className="text-xs leading-tight text-white">videography</p>
                          </div>
                        </div> :
                    index === 2 ?
                    <div className="flex flex-wrap items-end gap-2 text-white">
                            <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                              <p className="text-sm font-medium leading-tight text-white">Photography</p>
                            </div>
                            <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                              <p className="text-xs leading-tight text-white">Objects</p>
                            </div>
                            <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                              <p className="text-xs leading-tight text-white">General</p>
                            </div>
                          </div> :
                    index === 3 ?
                    <div className="flex flex-wrap items-end gap-2 text-white">
                              <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                                <p className="text-sm font-medium leading-tight text-white !whitespace-pre-line">Project Basterds</p>
                              </div>
                              <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md hidden md:block">
                                <p className="text-xs leading-tight text-white">Food Delivery</p>
                              </div>
                              <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                                <p className="text-xs leading-tight text-white">UX&gt;UI</p>
                              </div>
                            </div> :
                    index === 4 ?
                    <div className="flex flex-wrap items-end gap-2 text-white">
                                <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                                  <p className="text-sm font-medium leading-tight text-white">Caffeine Exp.</p>
                                </div>
                                <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                                  <p className="text-xs leading-tight text-white">Discovery</p>
                                </div>
                                <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md hidden md:block">
                                  <p className="text-xs leading-tight text-white">Indian Brews</p>
                                </div>
                              </div> :
                    index === 5 ?
                    <div className="flex flex-wrap items-end gap-2 text-white">
                                  <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                                    <p className="text-sm font-medium leading-tight text-white">Pinsperson</p>
                                  </div>
                                  <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md hidden md:block">
                                    <p className="text-xs leading-tight text-white">Mini Business</p>
                                  </div>
                                  <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
                                    <p className="text-xs leading-tight text-white">Brooches</p>
                                  </div>
                                </div> :
                    null}

                    <div className={`absolute bottom-0 right-0 transition-opacity duration-300 ${
                      project.comingSoon
                        ? "opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}>
                      <p className="text-sm font-medium text-white">
                        {index === 1 ? 'Watch now' : project.comingSoon ? 'Coming soon' : 'View'}
                      </p>
                    </div>
                  </div>
                </>
              );

              return isLinkable && project.href ? (
                <Link
                  key={project.title}
                  href={project.href}
                  className={cardClassName}
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={project.title}
                  className={cardClassName}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ContactFooter />
    </div>);

}