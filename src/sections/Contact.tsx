'use client'

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20  z-50 relative" id="contact">
      <div className="container">
        <motion.div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif font-bold text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <Link href="/contactinfo" className="cursor-pointer">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
