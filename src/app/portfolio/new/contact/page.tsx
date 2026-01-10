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

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

const navLinks = [
    { label: "Home,", href: "/portfolio/new", active: false },
    { label: "Info,", href: "/about", active: false },
    { label: "Work,", href: "/work", active: false },
    { label: "Contact", href: "/portfolio/new/contact", active: true },
];

export default function ContactPage() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
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
            {/* HEADER */}
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
                    {/* Logo section */}
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
                        <Link href="/portfolio/new" className="flex items-center gap-[6px] rounded-[30px]">
                            <div className="relative w-[67px] h-[19px]">
                                <Image
                                    src="/portfolio/assets/img_1.svg"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>

                        {/* Mobile Menu Button */}
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

                    {/* Pages */}
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

                    {/* Right section */}
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

                {/* LEFT COLUMN */}
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
                    {/* Intro */}
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '6px', overflow: 'hidden' }}>
                        <h1 className="text-[52px] font-semibold tracking-[-0.05em] leading-[1em] text-[#121212]">
                            Let&apos;s<br />Connect.
                        </h1>
                    </div>

                    {/* Back to Home */}
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', gap: '8px', marginTop: '24px' }}>
                        <Link
                            href="/portfolio/new"
                            className="inline-flex items-center gap-2 text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575] hover:text-[#121212] transition-colors"
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>

                    {/* Contact methods at bottom */}
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '4px', marginTop: 'auto' }}>
                        <div className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">Email</div>
                        <div className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">Twitter / X</div>
                        <div className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">LinkedIn</div>
                    </div>
                </section>

                {/* MIDDLE COLUMN */}
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

                    {/* Main Content Area */}
                    <div
                        className="w-full flex flex-col gap-8"
                        style={{
                            margin: '0 auto',
                            paddingBottom: '120px'
                        }}
                    >
                        {/* Header Section */}
                        <div className="flex flex-col gap-3">
                            <h1 className="text-[64px] font-semibold tracking-[-0.04em] leading-[0.9em] text-[#121212]">
                                Reach out.
                            </h1>
                            <p className="text-[18px] font-medium tracking-[-0.02em] leading-[1.5em] text-[#757575] max-w-[500px]">
                                I&apos;d love to hear from you. Whether you&apos;re looking to collaborate on a new project, discuss a commission, or simply say hello.
                            </p>
                        </div>

                        {/* Contact Info & Socials Row */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-[#e3e3e3]">
                            <div className="flex flex-col gap-1">
                                <a href="mailto:hey@harshjdhv.com" className="text-[16px] font-medium tracking-[-0.02em] text-[#121212] hover:text-[#757575] transition-colors">
                                    hey@harshjdhv.com
                                </a>
                                <span className="text-[16px] font-medium tracking-[-0.02em] text-[#121212]">
                                    +91 99999 99999
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <a href="https://x.com/harshjdhv" target="_blank" rel="noopener" className="w-8 h-8 flex items-center justify-center text-[#121212] hover:text-[#757575] transition-colors">
                                    <XIcon />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener" className="w-8 h-8 flex items-center justify-center text-[#121212] hover:text-[#757575] transition-colors">
                                    <InstagramIcon />
                                </a>
                                <a href="https://dribbble.com" target="_blank" rel="noopener" className="w-8 h-8 flex items-center justify-center text-[#121212] hover:text-[#757575] transition-colors">
                                    <DribbbleIcon />
                                </a>
                            </div>
                        </div>

                        {/* Form Section */}
                        <form className="flex flex-col gap-6">

                            {/* Name Input */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-[15px] font-medium tracking-[-0.02em] text-[#121212]">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John" // Placeholder from screenshot
                                    className="w-full pb-3 bg-transparent border-b border-[#e3e3e3] text-[16px] font-medium text-[#121212] placeholder:text-[#a3a3a3] outline-none focus:border-[#121212] transition-colors"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-[15px] font-medium tracking-[-0.02em] text-[#121212]">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="contact@gmail.com" // Placeholder from screenshot
                                    className="w-full pb-3 bg-transparent border-b border-[#e3e3e3] text-[16px] font-medium text-[#121212] placeholder:text-[#a3a3a3] outline-none focus:border-[#121212] transition-colors"
                                    required
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-[15px] font-medium tracking-[-0.02em] text-[#121212]">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+1 (123) 456-7890" // Placeholder from screenshot
                                    className="w-full pb-3 bg-transparent border-b border-[#e3e3e3] text-[16px] font-medium text-[#121212] placeholder:text-[#a3a3a3] outline-none focus:border-[#121212] transition-colors"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-[15px] font-medium tracking-[-0.02em] text-[#121212]">
                                    Message*
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Project inquiry..." // Placeholder from screenshot
                                    className="w-full pb-3 bg-transparent border-b border-[#e3e3e3] text-[16px] font-medium text-[#121212] placeholder:text-[#a3a3a3] outline-none focus:border-[#121212] transition-colors resize-y min-h-[100px]"
                                    required
                                />
                            </div>

                            {/* Divider above button */}
                            <div className="w-full h-px bg-[#e3e3e3] mt-2" />

                            {/* Submit Button */}
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="text-[16px] font-semibold tracking-[-0.02em] text-[#121212] hover:text-[#757575] transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* RIGHT COLUMN */}
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

                    {/* Profile section */}
                    <div className="hidden lg:flex flex-col w-full min-h-min gap-8 overflow-visible">
                        <div className="flex flex-row w-full min-h-min gap-2 overflow-visible">
                            {/* Available badge */}
                            <div className="flex-1 w-px min-h-min flex flex-row justify-start items-center gap-2 overflow-visible">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212] whitespace-nowrap">Available for work</span>
                            </div>

                            {/* Profile column */}
                            <div className="flex-1 w-px min-h-min flex flex-col justify-center items-center gap-8 overflow-hidden">
                                {/* Profile Image */}
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
                                {/* Info */}
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
                        <span className="text-[16px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#757575] whitespace-nowrap">© 2025</span>
                    </div>
                </section>
            </main>

            {/* Mobile Navigation Dropdown */}
            <div
                className={`fixed left-0 right-0 top-0 z-40 lg:hidden bg-white border-b border-[#e3e3e3] shadow-sm transition-all duration-300 ease-out ${isMobileNavOpen
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
                style={{ paddingTop: '52px' }}
            >
                <div className="px-5 py-4 flex flex-col gap-4">
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

                    <a
                        href="https://cal.com/"
                        target="_blank"
                        rel="noopener"
                        onClick={() => setIsMobileNavOpen(false)}
                        className="text-[14px] font-semibold tracking-[-0.03em] leading-[1.4em] text-black hover:text-[#757575] transition-colors"
                    >
                        Book a Call
                    </a>

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
