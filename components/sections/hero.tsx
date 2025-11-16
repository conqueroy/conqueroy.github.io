import Link from 'next/link';

const navItems = [
  { name: 'Work', href: '/work' },
  { name: 'Experiments', href: '/experiments' },
  { name: 'Store', href: '/store' },
  { name: 'About', href: '/about' }
];
const tags = ["Design", "Art Direction", "Brand", "Front end development"];

const HeroSection = () => {
    return (
        <section className="bg-white text-primary">
            <div className="mx-auto max-w-[1920px] px-4 pt-5 md:px-10 md:pt-8">
                {/* Mobile Header */}
                <header className="w-full lg:hidden">
                    <h1 className="font-soehne-kraftig text-[18vw] leading-none tracking-tighter sm:text-[15vw] md:text-[12vw]">KEVIN</h1>
                    <h1 className="font-soehne-kraftig text-[18vw] leading-none tracking-tighter sm:text-[15vw] md:text-[12vw]">HIPKE</h1>
                </header>

                {/* Desktop Header */}
                <header className="hidden w-full items-center justify-between lg:flex">
                    <h1 className="font-soehne-kraftig text-[100px] leading-none tracking-tighter">
                        KEVIN
                    </h1>
                    <nav>
                        <ul className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="block rounded-full px-5 py-2.5 text-sm font-soehne-web-buch text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <h1 className="font-soehne-kraftig text-[100px] leading-none tracking-tighter">
                        HIPKE
                    </h1>
                </header>

                {/* Video section */}
                <div className="mt-4 w-full overflow-hidden rounded-lg md:rounded-xl lg:mt-6 lg:rounded-2xl">
                    <video
                        src="https://kevinhipke.com/wp-content/uploads/2025/06/kevinhipke04.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Philosophy section */}
                <div className="mt-10 md:mt-20">
                    <p className="max-w-[32ch] font-soehne-web-buch text-2xl leading-tight md:max-w-[45ch] md:text-3xl lg:text-[40px] lg:leading-[1.1]">
                        I believe in design rooted in clear thinking, built on systems that
                        adapt and challenge the status quo.
                    </p>
                </div>

                {/* Tags section */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <a
                            key={tag}
                            href="#"
                            className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-soehne-web-buch transition-colors hover:border-primary"
                        >
                            {tag}
                        </a>
                    ))}
                </div>

                {/* Separator / Year section */}
                <div className="mt-16 flex items-center justify-between md:mt-24">
                    <p className="font-soehne-web-buch text-xs uppercase tracking-widest text-neutral-500">
                        2025
                    </p>
                    <Link
                        href="#"
                        className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-soehne-web-buch transition-colors hover:border-primary"
                    >
                        View all
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;