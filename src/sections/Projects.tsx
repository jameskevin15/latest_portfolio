import animatedPortfolio from "@/assets/images/animated-portfolio.png";
import myFirstPortfolio from "@/assets/images/first-portfolio.png";
import landingPage from "@/assets/images/landingpage.png";
import newPortfolio from "@/assets/images/latest-portfolio.png";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import checkCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
import sysmgmt from "@/assets/images/sysmgmt-6.png";

const portfolioProjects = [
  {
    company: "Example",
    year: "2022",
    title: "Simple Animated Portfolio",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://jamesportfolio-odevb6b9u-james-kevins-projects-01b5bdc6.vercel.app/",
    image: animatedPortfolio,
  },
  {
    company: "Example",
    year: "2022",
    title: "My First Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://jamili15.github.io/My-first-Portfolio/",
    image: myFirstPortfolio,
  },
  {
    company: "Example",
    year: "2022",
    title: "My First Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://jamili15.github.io/Landing-Page/",
    image: landingPage,
  },
  {
    company: "Example",
    year: "2024",
    title: "My New Portfolio",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://jamili15.github.io/Landing-Page/",
    image: newPortfolio,
  },
{
  company: "Rameses Systems Inc",
  year: "2023-2026",
  title: "Frontend / Web Developer",
  results: [
    { title: "Developed dynamic web systems with workflows and custom editors" },
    { title: "Enhanced user experience by 40%" },
    { title: "Improved site speed by 50%" },
    { title: "Increased mobile traffic by 35%" }
  ],
  link: "https://jamili15.github.io/Landing-Page/",
  image: sysmgmt,
}

];

export const ProjectsSection = ({ id = "mywork" }: { id?: string }) => {
  return (
    <section className="pb-16 lg:py-24" id={id}>
      <SectionHeader
        eyebrow="Real-world Results"
        title="Feaured Projects"
        description="See how I transformed concepts into engaging digital experience"
      />
      <div className="mt-10 md:mt-20 flex flex-col gap-20 container">
        {portfolioProjects.map((project: any, projectIndex) => (
          <Card
            key={project.title}
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 40}px`,
            }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result: any, index: number) => (
                    <li
                      key={index}
                      className="flex gap-2 text-sm md:text-base text-white/50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 md:size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <ArrowUpRightIcon className="size-4 " />
                    <span>Visit Live Site</span>
                  </button>
                </Link>
              </div>
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
