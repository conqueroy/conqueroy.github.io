import Link from 'next/link';

const PillLink = ({ href, children, isExternal = true }: {href: string;children: React.ReactNode;isExternal?: boolean;}) =>
<Link
  href={href}
  target={isExternal ? "_blank" : undefined}
  rel={isExternal ? "noopener noreferrer" : undefined}
  className="inline-block border border-primary rounded-full px-5 py-2 font-buch text-sm hover:bg-primary hover:text-white transition-colors duration-300">

        {children}
    </Link>;


const SmallPillLink = ({ href, children }: {href: string;children: React.ReactNode;}) =>
<Link
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block border border-primary rounded-full px-4 py-1.5 font-buch text-xs hover:bg-primary hover:text-white transition-colors duration-300">

        {children}
    </Link>;


const ContactFooter = () => {
  return (
    <footer className="bg-neutral-50 pt-[30px] pb-4 md:pt-[100px] md:pb-6 px-4 sm:px-8 lg:px-[60px]">
            <div className="max-w-screen-2xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 border border-neutral-100">
                    <div className="flex justify-center items-center w-full mb-16 md:mb-24 lg:mb-32">
                        <div className="w-full max-w-4xl">
                            <h1 className="text-[clamp(3rem,12vw,9.375rem)] font-soehne-kraftig text-center text-primary leading-none transform translate-y-[50px] tracking-tight">
                                Swarajit Roy
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center font-buch text-sm gap-4">
                        <div className="flex flex-wrap items-center gap-2 order-2 md:order-1 mt-4 md:mt-0">
                            <SmallPillLink href="https://www.instagram.com/swarajit.royy/">Instagram</SmallPillLink>
                            <SmallPillLink href="https://www.linkedin.com/in/swarajit-roy-475448175/">Linkedin</SmallPillLink>
                            <SmallPillLink href="https://youtube.com/@swarajitroyy?si=mCJI96yixq0ZuIQE">YouTube</SmallPillLink>
                        </div>
                        <div className="order-1 md:order-2">
                            <a href="mailto:swarajitroy2000@gmail.com" className="hover:underline !whitespace-pre-line">swarajitroy2000@gmail.com

              </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>);

};

export default ContactFooter;