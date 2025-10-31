import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Project {
  title: string;
  subtitle: string;
  imageUrl?: string;
  linkUrl?: string;
  comingSoon?: boolean;
  isExperiment?: boolean;
}

const projects: Project[] = [
{
  title: "Smart IOT Products",
  subtitle: "Industrial Design",
  imageUrl:
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Smart-IOT-products-1759059806631.png",
  linkUrl: "/work/kia-global-rebrand"
},
{
  title: "Starwatch",
  subtitle: "Concept Design",
  imageUrl:
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Starwatch-1759059807580.png",
  linkUrl: "/work/aston-martin-valour"
},
{
  title: "SWR Speakers",
  subtitle: "Concept Design",
  imageUrl:
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/SWR-speakers-1759059807516.png",
  linkUrl: "/work/rimowa-ingenieurskunst"
},
{
  title: "MOD-U",
  subtitle: "Concept Design",
  imageUrl:
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/MOD-U-1759059807347.png",
  linkUrl: "/work/gaggenau-book-design"
},
{
  title: "Grokia-M",
  subtitle: "Concept Design",
  imageUrl:
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Grokia-M-1759059807726.png",
  linkUrl: "/work/printed-by-parkinsons"
},
{
  title: "Animations",
  subtitle: "Products",
  imageUrl:
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Animation-1759944433174.png",
  linkUrl: "/work/animations",
  isExperiment: true
},
{
  title: "Period Pain Relief",
  subtitle: "Industrial Design",
  imageUrl:
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Period-Pain-Relief-1759076827600.png",
  comingSoon: true
},
{
  title: "Grind-R",
  subtitle: "Concept Design",
  imageUrl:
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Grind-R-1759076327637.png",
  comingSoon: true,
  isExperiment: true
},
{
  title: "Remote-C",
  subtitle: "Concept Design",
  imageUrl:
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Remote-C-1759076328368.png",
  comingSoon: true,
  isExperiment: true
}
];


const ProjectCard = ({ project }: {project: Project;}) => {
  const Inner = (
    <>
      {project.imageUrl ? (
        <Image
          src={project.imageUrl}
          alt={`${project.title} - ${project.subtitle}`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      ) : (
        <div className="absolute inset-0 bg-neutral-200 transition-transform duration-500 ease-in-out group-hover:scale-105" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex flex-wrap items-end gap-2 text-white">
          <div className="rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md">
            <p className="text-sm font-medium leading-tight text-white">
              {project.title}
            </p>
          </div>
          <div className={`rounded-full bg-black/30 backdrop-blur-sm px-4 py-1.5 shadow-md ${
            project.title === "Period Pain Relief" ? "hidden md:block" : ""
          }`}>
            <p className="text-xs leading-tight text-white">
              {project.subtitle}
            </p>
          </div>
        </div>
        <div className={`absolute bottom-0 right-0 transition-opacity duration-300 ${
          project.comingSoon 
            ? "opacity-100 md:opacity-0 md:group-hover:opacity-100" 
            : "opacity-0 group-hover:opacity-100"
        }`}>
          <p className="text-sm font-medium text-white">
            {project.comingSoon ? "Coming soon" : "View Project"}
          </p>
        </div>
      </div>
    </>
  );

  if (project.comingSoon || !project.linkUrl) {
    return (
      <div
        className="group relative block aspect-[1/1.1] w-full overflow-hidden rounded-2xl cursor-not-allowed select-none">
        {Inner}
      </div>
    );
  }

  return (
    <Link
      href={project.linkUrl}
      className="group relative block aspect-[1/1.1] w-full overflow-hidden rounded-2xl">
      {Inner}
    </Link>
  );
};

export default function SelectedWork({ title = "Selected Work", compact = false, aboveHeading, limit, experimentsOnly = false }: { title?: string; compact?: boolean; aboveHeading?: React.ReactNode; limit?: number; experimentsOnly?: boolean; }) {
  const filtered = experimentsOnly ? projects.filter(p => p.isExperiment) : projects;
  const items = typeof limit === "number" ? filtered.slice(0, limit) : filtered;

  return (
    <section className={`${compact ? "pt-8 md:pt-12 pb-16 md:pb-24" : "py-16 md:py-24"} px-4 sm:px-8 lg:px-[60px]`}>
      <div className="mx-auto max-w-[1920px]">
        {aboveHeading && (
          <div className="mb-3 md:mb-4 flex items-center justify-between">
            {aboveHeading}
          </div>
        )}
        <h2 className="text-[clamp(4rem,14vw,9rem)] leading-none tracking-tighter mb-12 md:mb-16 !whitespace-pre-line font-normal">{title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {items.map((project, index) =>
          <ProjectCard key={index} project={project} />
          )}
        </div>
      </div>
    </section>
  );
}