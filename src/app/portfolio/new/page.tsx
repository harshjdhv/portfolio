"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Social Icons - 18px
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6.53 12.07 6.9 19.25" />
    </svg>
  );
}

// Plus Icon
function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

// Instagram Icon
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Service Item Component
function ServiceItem({ title }: { title: string }) {
  return (
    <div className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">
      {title}
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, category, year, image, href }: {
  title: string;
  category: string;
  year: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      className="group block w-full"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        overflow: 'hidden'
      }}
    >
      {/* Project Image */}
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ aspectRatio: '1.5' }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
        {/* Arrow indicator */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#121212]" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {/* Project Info */}
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-1">
          <h3 className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212] group-hover:text-[#000] transition-colors">
            {title}
          </h3>
          <p className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">
            {category}
          </p>
        </div>
        <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">
          &apos;{year}
        </span>
      </div>
    </Link>
  );
}

// Local Time Component
function LocalTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }));
      setDate(now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-[8px]">
      <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">{date}</span>
      <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">,</span>
      <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">{time}</span>
    </div>
  );
}

// Projects data
const projects = [
  { title: "Componentry", category: "UI Component Library", year: "24", image: "/portfolio/assets/componentry-cover.jpg", href: "https://componentry.fun" },
  { title: "GameSideVault", category: "Crypto Wallet Infrastructure", year: "24", image: "/portfolio/assets/vault-cover.png", href: "https://gamesidevault.com" },
  { title: "Perpetual Trading", category: "SEI Blockchain Platform", year: "24", image: "/portfolio/assets/perpetual-cover.png", href: "https://perpetual-demo.com" },
  { title: "AnchorPay", category: "Escrow Payment Platform", year: "24", image: "/portfolio/assets/doperaider-cover.png", href: "https://anchorpay.app" },
];

const services = ["Web3 Development", "Full-Stack Engineering", "AI Integration"];
const navLinks = [
  { label: "Home,", href: "/", active: true },
  { label: "Info,", href: "/about", active: false },
  { label: "Work,", href: "/work", active: false },
  { label: "Contact", href: "/contact", active: false },
];

export default function Page() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    // Root container - full width, bg: #fff
    <div
      className="bg-white font-geist scroll-smooth selection:bg-[#121212] selection:text-white"
      style={{
        width: '100%',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      {/* HEADER WRAPPER - .framer-2awwzh: fixed, width: 100%, display: flex, gap: 20px */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 50,
          width: '100%',
          height: 'min-content',
          padding: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          overflow: 'hidden',
          backgroundColor: '#fff'
        }}
      >
        {/* NAV INNER - .framer-sv6vrp: flex: 1 0 0, width: 1px, gap: 32px, padding: 12px 20px */}
        <nav
          className="flex-1 w-px gap-8 lg:gap-8 px-5 py-3 flex flex-col lg:flex-row lg:justify-between lg:items-center"
          style={{
            height: 'min-content',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflow: 'visible',
            backgroundColor: '#fff',
            borderBottom: '1px solid #e3e3e3'
          }}
        >
          {/* Logo section - .framer-jmphyf: width: 25%, flex: none */}
          <div
            className="w-full lg:w-1/4 lg:flex-none"
            style={{
              height: 'min-content',
              padding: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 1,
              overflow: 'visible'
            }}
          >
            <Link href="/" className="flex items-center gap-[6px] rounded-[30px]">
              <div className="relative w-[67px] h-[19px]">
                <Image
                  src="/portfolio/assets/img_1.svg"
                  alt="Maelle"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Mobile Menu Button - Only visible on small screens */}
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="lg:hidden flex items-center justify-center w-8 h-8 text-[#757575] hover:text-[#121212] transition-colors"
              aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
            >
              {isMobileNavOpen ? (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 8h16M4 16h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>

          {/* Pages - .framer-zi14v7: flex: 1 0 0, width: 1px, gap: 4px, padding-left: 16px */}
          {/* Hidden on mobile, visible on lg and up */}
          <div
            className="hidden lg:flex flex-1 w-px gap-1 pl-4 flex-row justify-start items-center"
            style={{
              height: 'min-content',
              padding: '0 0 0 16px',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              overflow: 'visible'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] font-medium tracking-[-0.03em] leading-[1.4em] whitespace-nowrap transition-colors hover:text-[#121212] ${link.active ? "text-[#121212]" : "text-[#5e5e5e]"
                  }`}
                style={{ flex: 'none', width: 'auto', height: 'auto' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section - Local time and Book a Call */}
          {/* Hidden on mobile, visible on lg and up */}
          <div
            className="hidden lg:flex w-full lg:w-1/4 lg:flex-none"
            style={{
              height: 'min-content',
              padding: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              overflow: 'visible'
            }}
          >
            <LocalTime />
            <Link
              href="https://cal.com/"
              target="_blank"
              rel="noopener"
              className="text-[14px] font-semibold tracking-[-0.03em] leading-[1.4em] text-black hover:text-[#757575] transition-colors ml-auto"
            >
              Book a Call
            </Link>
          </div>
        </nav>
      </header>

      <main
        className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0 px-5 lg:px-5"
        style={{
          padding: '0 20px',
          overflow: 'visible'
        }}
      >

        {/* LEFT COLUMN - .framer-sn780o: width: 25%, flex: none, height: 100vh, sticky */}
        <section
          className="w-full lg:w-1/4 lg:flex-none lg:h-screen lg:sticky lg:top-0 lg:z-3"
          style={{
            padding: '140px 0 8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            overflow: 'visible'
          }}
        >
          {/* Intro - gap: 6px */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '6px', overflow: 'hidden' }}>
            <h1 className="text-[52px] font-semibold tracking-[-0.05em] leading-[1em] text-[#121212]">
              Hello!<br />I&apos;m Harsh.
            </h1>
          </div>

          {/* Socials - gap: 8px, max-width: 400px */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', gap: '8px', marginTop: '24px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://x.com/harshjdhv" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-300 hover:scale-110">
                <XIcon />
              </a>
              <a href="https://github.com/jadhavharshh" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/harshjdhv" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Available for work and Profile Photo - after socials (mobile only) */}
          <div className="block lg:hidden flex flex-row w-full min-h-min gap-2 mt-8 overflow-visible">
            {/* Available badge - flex: 1 0 0 */}
            <div className="flex-1 w-px min-h-min flex flex-row justify-start items-center gap-2 overflow-visible">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212] whitespace-nowrap">Available for work</span>
            </div>

            {/* Profile column - flex: 1 0 0, gap: 32px */}
            <div className="flex-1 w-px min-h-min flex flex-col justify-center items-center gap-8 overflow-hidden">
              {/* Profile Image - aspect-ratio: 0.758065 */}
              <div
                className="relative w-full overflow-hidden rounded-xl"
                style={{ aspectRatio: '0.758065' }}
              >
                <Image
                  src="/portfolio/assets/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
              {/* Info - gap: 2px */}
              <div className="flex flex-col w-full min-h-min gap-0.5 text-right overflow-hidden">
                <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">Full Stack Developer</p>
                <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">Based in India</p>
                <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">Building since 2020</p>
              </div>
            </div>
          </div>

          {/* Services - gap: 4px, at bottom */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '4px', marginTop: 'auto' }}>
            {services.map((service) => (
              <ServiceItem key={service} title={service} />
            ))}
          </div>
        </section>

        {/* MIDDLE COLUMN - .framer-19s0btu: flex: 1 0 0, width: 1px, border-left/right */}
        <section
          className="w-full lg:flex-1 lg:max-w-4xl lg:mx-auto lg:border-l lg:border-r border-gray-200 px-0 lg:px-5"
          style={{
            height: 'min-content',
            paddingTop: '140px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 0,
            backgroundColor: '#fff',
            position: 'relative',
            overflow: 'visible'
          }}
        >

          {/* Description - sticky top: 140px on desktop only */}
          <div
            className="lg:sticky lg:top-[140px] lg:z-1 lg:bg-white px-3 lg:px-4 pb-2"
            style={{
              width: '100%',
              height: 'min-content',
              padding: '0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '8px',
              overflow: 'visible'
            }}
          >
            <h2
              className="text-[24px] font-medium tracking-[-0.04em] leading-[1.2em] text-left"
              style={{ width: '100%', maxWidth: '600px' }}
            >
              <span className="text-[#121212]">A full-stack developer building production-ready applications </span>
              <span className="text-[#121212]">— </span>
              <span className="text-[#757575]">specializing in Web3 infrastructure, AI-powered tools, and modern web experiences that scale.</span>
            </h2>

            {/* Experience - within intro */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginTop: '32px', width: '100%' }}>

              {/* Full Stack Developer */}
              <div className="py-6 border-b border-[#e3e3e3]" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Title Row */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-[18px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">
                    Freelance Full Stack Developer
                  </h4>
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">
                      India & International
                    </span>
                    <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">
                      &apos;22 - present
                    </span>
                  </div>
                </div>
                {/* Description */}
                <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.6em] text-[#757575]">
                  Working with startups and clients worldwide to build production-ready web applications, crypto wallet infrastructure, and AI-powered tools. Projects range from DeFi platforms to modern SaaS products.
                </p>
              </div>

              {/* IBM SkillsBuild Intern */}
              <div className="py-6" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Title Row */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-[18px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">
                    IBM SkillsBuild Intern
                  </h4>
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">
                      CSRBOX
                    </span>
                    <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">
                      &apos;23
                    </span>
                  </div>
                </div>
                {/* Description */}
                <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.6em] text-[#757575]">
                  Front-end development focused on accessibility and responsive design. Built interfaces that prioritize user experience and work seamlessly across all devices.
                </p>
              </div>

            </div>
          </div>

          {/* Spacer - height: 30vh, opacity: 0 */}
          <div style={{ width: '100%', height: '10vh', opacity: 0, overflow: 'hidden' }} />

          {/* Projects container - centered in viewport on mobile */}
          <div
            className="min-h-screen flex items-center justify-center"
            style={{
              width: '100%',
              padding: '40px 0 80px 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '12px',
              zIndex: 2,
              backgroundColor: '#fff',
              overflow: 'hidden'
            }}
          >
            {/* Projects Header */}
            <div className="w-full pb-6">
              <h2 className="text-[24px] font-medium tracking-[-0.04em] leading-[1.2em] text-[#121212]">
                Selected Projects
              </h2>
            </div>
            {/* Projects list - gap: 20px */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>

          {/* Let's Talk CTA */}
          <Link
            href="/portfolio/new/contact"
            className="group block w-full py-24 lg:py-32 border-t border-[#e3e3e3] bg-white relative z-10 hover:bg-[#fafafa] transition-colors duration-500"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575] uppercase">
                Get in touch
              </span>
              <h2 className="text-[48px] lg:text-[72px] font-semibold tracking-[-0.05em] leading-[1em] text-[#121212] group-hover:tracking-[-0.03em] transition-all duration-500">
                Let&apos;s Talk
              </h2>
              <div className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center mt-4 group-hover:scale-110 group-hover:bg-[#000] transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Link>
        </section>

        {/* RIGHT COLUMN - .framer-r4o7r6: width: 25%, flex: none, height: 100vh, sticky */}
        <section
          className="w-full lg:w-1/4 lg:flex-none lg:h-screen lg:sticky lg:top-0 lg:z-3 lg:pl-5"
          style={{
            paddingTop: '140px',
            paddingBottom: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'visible'
          }}
        >

          {/* About section - gap: 32px (desktop only) */}
          <div className="hidden lg:flex flex-col w-full min-h-min gap-8 overflow-visible">
            {/* Photo row - gap: 8px */}
            <div className="flex flex-row w-full min-h-min gap-2 overflow-visible">
              {/* Available badge - flex: 1 0 0 */}
              <div className="flex-1 w-px min-h-min flex flex-row justify-start items-center gap-2 overflow-visible">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212] whitespace-nowrap">Available for work</span>
              </div>

              {/* Profile column - flex: 1 0 0, gap: 32px */}
              <div className="flex-1 w-px min-h-min flex flex-col justify-center items-center gap-8 overflow-hidden">
                {/* Profile Image - aspect-ratio: 0.758065 */}
                <div
                  className="relative w-full overflow-hidden rounded-xl"
                  style={{ aspectRatio: '0.758065' }}
                >
                  <Image
                    src="/portfolio/assets/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
                {/* Info - gap: 2px */}
                <div className="flex flex-col w-full min-h-min gap-0.5 text-right overflow-hidden">
                  <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">Full Stack Developer</p>
                  <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">Based in India</p>
                  <p className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575]">Building since 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact section - at bottom */}
          <div
            style={{
              width: '100%',
              height: 'min-content',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              gap: '8px',
              overflow: 'visible'
            }}
          >
            {/* Buttons column - flex: 1 0 0, gap: 4px */}
            <div
              style={{
                flex: '1 0 0',
                width: '1px',
                height: 'min-content',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                overflow: 'hidden'
              }}
            >
              <span className="text-[16px] font-bold tracking-[-0.03em] leading-[1.4em] text-[#121212]">
                hey@harshjdhv.com
              </span>

            </div>
            {/* Copyright */}
            <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575] whitespace-nowrap">© 2025</span>
          </div>
        </section>
      </main>

      {/* Mobile Navigation Dropdown - Opens from top */}
      <div
        className={`fixed left-0 right-0 top-0 z-40 lg:hidden bg-white border-b border-[#e3e3e3] shadow-sm transition-all duration-300 ease-out ${isMobileNavOpen
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
          }`}
        style={{ paddingTop: '52px' }}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          {/* Nav Links - all in one row */}
          <div className="flex flex-row flex-wrap items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileNavOpen(false)}
                className={`text-[14px] font-medium tracking-[-0.03em] leading-[1.4em] transition-colors hover:text-[#121212] ${link.active ? "text-[#121212]" : "text-[#5e5e5e]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Book a Call */}
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noopener"
            onClick={() => setIsMobileNavOpen(false)}
            className="text-[14px] font-semibold tracking-[-0.03em] leading-[1.4em] text-black hover:text-[#757575] transition-colors"
          >
            Book a Call
          </a>

          {/* Local Time */}
          <LocalTime />
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}

    </div>
  );
}
