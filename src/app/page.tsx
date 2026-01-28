import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { CopyEmail } from "@/components/copy-email";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      {/* 
        The Asymmetric Grid 
        12 Columns.
        Col 1-3: The "Anchor" (Identity). Fixed on Desktop.
        Col 4:   Gutter/Silence.
        Col 5-11:The "Stream" (Content).
      */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10 px-6 py-12 md:py-20">

        {/* -- BLock 1: Identity (The Anchor) -- */}
        <header className="md:col-span-3 md:col-start-1 md:sticky md:top-20 h-fit flex flex-col gap-8 select-none">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif-accent text-3xl md:text-3xl text-foreground leading-tight">
              Harsh Jadhav
            </h1>
            <span className="font-mono-meta text-[11px] text-neutral-400 font-medium uppercase tracking-widest pl-0.5">
              Software Engineer
            </span>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-3">
              <div className="font-mono-meta text-[10px] text-neutral-300 uppercase tracking-widest">
                Status
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
                Building on Solana. <br />
                Web interfaces. Crypto tooling.
                <br /><br />
                I build things from zero. If it's boring and reliable, it's good enough to ship.
                <div className="pt-3">
                  <CopyEmail />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <ModeToggle />
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Link href="https://github.com/harshjdhv" target="_blank" className="hover:text-foreground transition-colors">
                  <FaGithub size={16} />
                </Link>
                <Link href="https://x.com/harshjdhv" target="_blank" className="hover:text-foreground transition-colors">
                  <FaXTwitter size={16} />
                </Link>
                <Link href="https://linkedin.com/in/jadhavharsh" target="_blank" className="hover:text-foreground transition-colors">
                  <FaLinkedin size={16} />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* -- Block 2: The Stream (Content) -- */}
        <section className="md:col-span-7 md:col-start-5 flex flex-col gap-10 md:gap-14">



          {/* 01. EXPERIENCE */}
          <div className="flex flex-col gap-6 max-w-[55ch]">
            <div className="font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest border-b border-border pb-3 w-full">
              Experience
            </div>

            <div className="flex flex-col gap-8">
              {/* Role 1 */}
              <div className="group flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-foreground text-base">Software Engineer (Independent)</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">Independent</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                    <span className="font-mono-meta text-xs text-neutral-400">2023 — Present</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pl-0 md:pl-0">
                  <p className="text-sm text-muted-foreground max-w-[55ch] leading-relaxed">
                    Building web apps and crypto tooling for early-stage products. Work spans payment platforms, wallet integrations, and interface systems.
                  </p>
                </div>
              </div>

              {/* Role 2 */}
              <div className="group flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-foreground text-base">Frontend Intern</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">CSRBOX (IBM SkillsBuild)</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                    <span className="font-mono-meta text-xs text-neutral-400">2023</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pl-0 md:pl-0">
                  <p className="text-sm text-muted-foreground max-w-[55ch] leading-relaxed">
                    Built accessible, responsive frontend components. Worked on form handling and layout systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 02. SELECTED WORK */}
          <div className="flex flex-col gap-6 max-w-[55ch]">
            <div className="font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest border-b border-border pb-3 w-full">
              Selected Work
            </div>

            <div className="flex flex-col gap-8">
              {/* Project 1 - Componentry */}
              <Link
                href="https://componentry.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-between max-w-[55ch]">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground text-base group-hover:text-muted-foreground transition-colors">Componentry</h3>
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono-meta text-[10px] text-neutral-400 normal-case">React / TypeScript</span>
                </div>
                <p className="text-sm text-muted-foreground max-w-[55ch] leading-relaxed">
                  A UI component library. Includes accessible, customizable components for React applications. Published and maintained.
                </p>
              </Link>

              {/* Project 2 - GameSideVault */}
              <Link
                href="https://github.com/harshjdhv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-between max-w-[55ch]">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground text-base group-hover:text-muted-foreground transition-colors">GameSideVault</h3>
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono-meta text-[10px] text-neutral-400 normal-case">Next.js / Solana</span>
                </div>
                <p className="text-sm text-muted-foreground max-w-[55ch] leading-relaxed">
                  Crypto wallet infrastructure with multi-chain support. Implements fund locking and automated releases.
                </p>
              </Link>

              {/* Project 3 - Perpetual Trading Platform */}
              <Link
                href="https://github.com/harshjdhv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-between max-w-[55ch]">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground text-base group-hover:text-muted-foreground transition-colors">Perpetual Trading Platform</h3>
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono-meta text-[10px] text-neutral-400 normal-case">React / SEI</span>
                </div>
                <p className="text-sm text-muted-foreground max-w-[55ch] leading-relaxed">
                  Frontend for a perpetual futures trading interface. Includes wallet connection and real-time chart rendering.
                </p>
              </Link>

              {/* Project 4 - AnchorPay */}
              <Link
                href="https://github.com/harshjdhv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-between max-w-[55ch]">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground text-base group-hover:text-muted-foreground transition-colors">AnchorPay</h3>
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono-meta text-[10px] text-neutral-400 normal-case">Next.js / Node.js</span>
                </div>
                <p className="text-sm text-muted-foreground max-w-[55ch] leading-relaxed">
                  Escrow payment platform. Freelancers and clients can lock funds against milestones.
                </p>
              </Link>
            </div>
          </div>






          {/* 03. WRITING */}
          <div className="flex flex-col gap-6 max-w-[55ch]">
            <div className="font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest border-b border-border pb-3 w-full">
              Writing
            </div>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full group-hover:bg-neutral-500 transition-colors"></span>
                <span className="border-b border-transparent group-hover:border-foreground decoration-1 underline-offset-4">
                  On the fragility of complex UI
                </span>
              </li>
            </ul>
          </div>

          {/* Footer / Contact (Minimal) */}
          <footer className="pt-12 pb-12 flex flex-col gap-8 text-sm opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 font-mono-meta text-xs text-muted-foreground max-w-[55ch]">
              <span className="text-neutral-400">© {new Date().getFullYear()} Harsh Jadhav</span>
            </div>
          </footer>

        </section>
      </div>
    </main>
  );
}

