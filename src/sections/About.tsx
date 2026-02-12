"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import TypeScript from "@/assets/icons/ts.svg";
import NextJS from "@/assets/icons/next.svg";
import TailwindCSS from "@/assets/icons/tailwind.svg";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import Prisma from "@/assets/icons/prisma.svg";
import MongoDB from "@/assets/icons/mongodb.svg";
import FinalForm from "@/assets/icons/finalform.svg";
import Mui from "@/assets/icons/mui.svg";
import animeBook from "@/assets/images/anime-book.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/maps.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindCSS,
  },
  {
    title: "Bootstrap",
    iconType: Bootstrap,
  },
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScript,
  },
  {
    title: "REACT",
    iconType: ReactIcon,
  },
  {
    title: "Next JS",
    iconType: NextJS,
  },
  {
    title: "Prisma",
    iconType: Prisma,
  },
  {
    title: "MongoDB",
    iconType: MongoDB,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Material UI",
    iconType: Mui,
  },
  {
    title: "React Final Form",
    iconType: FinalForm,
  },
];

const hobbies = [
  {
    title: "Cooking",
    emoji: "🍳",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🚶‍♂️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Riding",
    emoji: "🏍",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Front-End Developer & Problem Solver"
          description="I build scalable, user-friendly web applications with Next.js, React, TypeScript, and modern UI frameworks, and I enjoy turning complex requirements into simple, reliable experiences."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title={"My Reads"}
                description={
                  "I love anime and manga for their storytelling and world-buildingthe same attention to detail and creativity I bring into the products I build."
                }
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={animeBook}
                  alt="Book cover"
                  className="rounded-lg"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies I use daily: from React, Next.js, and TypeScript to Tailwind CSS, Material-UI, Prisma, and MongoDB for production-ready applications."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Eplore my iterests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              {/* <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              /> */}
          
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15689.899877238537!2d124.03072385000002!3d10.541955900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1770524257214!5m2!1sen!2sph"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
