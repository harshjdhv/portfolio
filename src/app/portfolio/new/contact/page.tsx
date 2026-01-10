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

                    {/* Description */}
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
                            <span className="text-[#121212]">Have a project in mind? Looking to collaborate? </span>
                            <span className="text-[#121212]">— </span>
                            <span className="text-[#757575]">I&apos;m always open to discussing new opportunities and interesting ideas.</span>
                        </h2>
                    </div>

                    {/* Contact Cards */}
                    <div
                        className="min-h-[60vh] flex items-start justify-center pt-20"
                        style={{
                            width: '100%',
                            padding: '80px 0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '16px',
                            backgroundColor: '#fff'
                        }}
                    >
                        {/* Email */}
                        <a
                            href="mailto:hey@harshjdhv.com"
                            className="group w-full max-w-[600px] p-6 rounded-xl border border-[#e3e3e3] hover:border-[#121212] hover:bg-[#fafafa] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">
                                        Email
                                    </span>
                                    <span className="text-[20px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">
                                        hey@harshjdhv.com
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] group-hover:bg-[#121212] flex items-center justify-center transition-all duration-300">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#757575] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </a>

                        {/* Twitter */}
                        <a
                            href="https://x.com/harshjdhv"
                            target="_blank"
                            rel="noopener"
                            className="group w-full max-w-[600px] p-6 rounded-xl border border-[#e3e3e3] hover:border-[#121212] hover:bg-[#fafafa] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">
                                        Twitter / X
                                    </span>
                                    <span className="text-[20px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">
                                        @harshjdhv
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] group-hover:bg-[#121212] flex items-center justify-center transition-all duration-300">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#757575] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/harshjdhv"
                            target="_blank"
                            rel="noopener"
                            className="group w-full max-w-[600px] p-6 rounded-xl border border-[#e3e3e3] hover:border-[#121212] hover:bg-[#fafafa] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">
                                        LinkedIn
                                    </span>
                                    <span className="text-[20px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">
                                        Harsh Jadhav
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] group-hover:bg-[#121212] flex items-center justify-center transition-all duration-300">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#757575] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/jadhavharshh"
                            target="_blank"
                            rel="noopener"
                            className="group w-full max-w-[600px] p-6 rounded-xl border border-[#e3e3e3] hover:border-[#121212] hover:bg-[#fafafa] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">
                                        GitHub
                                    </span>
                                    <span className="text-[20px] font-medium tracking-[-0.03em] leading-[1.4em] text-[#121212]">
                                        jadhavharshh
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] group-hover:bg-[#121212] flex items-center justify-center transition-all duration-300">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#757575] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </a>

                        {/* Book a Call */}
                        <a
                            href="https://cal.com/"
                            target="_blank"
                            rel="noopener"
                            className="group w-full max-w-[600px] p-6 rounded-xl bg-[#121212] hover:bg-[#000] transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[14px] font-medium tracking-[-0.02em] leading-[1em] text-[#757575]">
                                        Schedule a meeting
                                    </span>
                                    <span className="text-[20px] font-medium tracking-[-0.03em] leading-[1.4em] text-white">
                                        Book a Call
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-all duration-300">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </a>
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
