"use client";

import Link from "next/link";
import React from "react";

const ContactInfoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl relative">
        <div
          className="absolute -inset-px rounded-3xl bg-gradient-to-r from-emerald-300/40 to-sky-400/40 blur-lg"
          aria-hidden="true"
        />
        <div className="relative rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-md px-6 py-8 md:px-10 md:py-10 shadow-2xl">
          <div className="mb-6 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80 mb-2">
              Get in touch
            </p>
            <h1 className="font-serif text-3xl md:text-4xl">
              Contact Information
            </h1>
            <p className="mt-2 text-sm md:text-base text-white/60">
              I&apos;m always open to discussing new projects, collaborations,
              or opportunities.
            </p>
          </div>

          <div className="space-y-4 md:space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40 mb-1">
                Mobile
              </p>
              <p className="text-sm md:text-base text-white/80">
                0956 147 3853
                <span className="mx-1 text-white/30">/</span>
                0993 468 2656
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40 mb-1">
                Email
              </p>
              <p className="text-sm md:text-base text-white/80 break-all">
                kevinjamili161@gmail.com
              </p>
            </div>

            <form
              action="https://formspree.io/f/mwvnlkrp"
              method="POST"
              className="mt-4 space-y-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="New message from portfolio contact form"
              />
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl bg-gray-900/80 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400/60"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-gray-900/80 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400/60"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  Message
                </label>
                <textarea
                  placeholder="Write your message here..."
                  name="message"
                  rows={4}
                  className="w-full rounded-xl bg-gray-900/80 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400/60 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 text-gray-950 px-4 h-11 text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-300 transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="pt-4 flex flex-col md:flex-row gap-3 md:gap-4">
              <a
                href="tel:09561473853"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 text-gray-950 px-4 h-11 text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-300 transition-colors w-full md:w-auto"
              >
                <span>Call Me</span>
              </a>
              <a
                href="mailto:kevinjamili161@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 h-11 text-sm font-semibold hover:bg-white/10 transition-colors w-full md:w-auto"
              >
                <span>Send Email</span>
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 h-11 text-sm font-semibold text-white/80 hover:bg-white/5 transition-colors w-full md:w-auto"
              >
                <span>← Back to Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoPage;
