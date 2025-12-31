"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PreviewCard = ({ 
  platform, 
  children 
}: { 
  platform: string; 
  children: React.ReactNode;
}) => (
  <motion.div
    className="flex flex-col gap-3"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="jetbrains-mono text-xs text-muted-foreground tracking-tight uppercase">
      {platform}
    </div>
    {children}
  </motion.div>
);

export default function PreviewPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground">
      <div className="new-container relative !border-none sm:!border-dashed w-full">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-dashed px-4 sm:px-6">
          <Link className="flex flex-row items-center gap-2" href="/">
            <span className="instrument-serif text-xl font-semibold">Harsh Jadhav</span>
          </Link>
          <Link 
            href="/"
            className="jetbrains-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
        </div>

        {/* Hero */}
        <motion.section
          className="relative flex flex-col gap-4 border-b border-dashed px-4 sm:px-6 py-12 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 18% 25%, rgba(96, 125, 255, 0.12), transparent 38%), " +
                  "radial-gradient(circle at 82% 20%, rgba(96, 125, 255, 0.09), transparent 34%), " +
                  "linear-gradient(120deg, rgba(96, 125, 255, 0.06), transparent 65%)",
              }}
            />
          </div>
          <h1 className="instrument-serif text-4xl md:text-5xl font-normal tracking-tight relative z-10">
            Link Preview
          </h1>
          <p className="jetbrains-mono text-sm text-muted-foreground max-w-xl tracking-tight relative z-10">
            How this portfolio looks when shared on social platforms.
          </p>
        </motion.section>

        {/* Twitter/X Preview */}
        <motion.section
          className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <PreviewCard platform="Twitter / X">
            <div className="border border-border rounded-xl overflow-hidden max-w-lg bg-card">
              {/* OG Image Preview */}
              <div className="relative aspect-[1.91/1] bg-gradient-to-br from-background via-background to-muted overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(96, 125, 255, 0.15), transparent 50%), " +
                        "radial-gradient(circle at 70% 70%, rgba(96, 125, 255, 0.1), transparent 50%)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-muted/50 border border-dashed flex items-center justify-center">
                      <span className="instrument-serif text-2xl">HJ</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="instrument-serif text-2xl sm:text-3xl font-normal">Harsh Jadhav</span>
                      <span className="jetbrains-mono text-xs text-muted-foreground">@theharshjadhav</span>
                    </div>
                    <span className="jetbrains-mono text-xs text-muted-foreground max-w-xs">
                      Builder • Shipper • Learner
                    </span>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border border-dashed rounded-sm opacity-20" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border border-dashed rounded-sm opacity-20" />
                  <div className="absolute top-1/2 left-8 w-1 h-16 bg-muted/30" />
                  <div className="absolute top-1/2 right-8 w-1 h-16 bg-muted/30" />
                </div>
              </div>
              {/* Meta info */}
              <div className="p-3 border-t border-border">
                <div className="jetbrains-mono text-xs text-muted-foreground">harshjadhav.dev</div>
                <div className="jetbrains-mono text-sm font-medium mt-1">Harsh Jadhav — Builder, Shipper, Learner</div>
                <div className="jetbrains-mono text-xs text-muted-foreground mt-1 line-clamp-2">
                  Building things that people use. Shipping fast, learning faster. Currently neck-deep in Solana and Web3.
                </div>
              </div>
            </div>
          </PreviewCard>
        </motion.section>

        {/* LinkedIn Preview */}
        <motion.section
          className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PreviewCard platform="LinkedIn">
            <div className="border border-border rounded-lg overflow-hidden max-w-lg bg-card">
              {/* OG Image */}
              <div className="relative aspect-[1.91/1] bg-gradient-to-br from-[#0a66c2]/5 via-background to-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-between p-8">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 20% 50%, rgba(10, 102, 194, 0.1), transparent 40%), " +
                        "radial-gradient(circle at 80% 50%, rgba(96, 125, 255, 0.08), transparent 40%)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col gap-3">
                    <span className="jetbrains-mono text-[10px] text-muted-foreground uppercase tracking-wider">Portfolio</span>
                    <span className="instrument-serif text-2xl sm:text-3xl font-normal">Harsh Jadhav</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="jetbrains-mono text-xs text-muted-foreground">Available for hire</span>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col items-end gap-2">
                    <div className="flex flex-wrap gap-1.5 justify-end max-w-[140px]">
                      {["Solana", "Web3", "React", "Next.js"].map((tag) => (
                        <span 
                          key={tag}
                          className="jetbrains-mono text-[9px] px-2 py-0.5 border border-dashed rounded-sm bg-muted/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
              </div>
              {/* Meta */}
              <div className="p-3 border-t border-border">
                <div className="jetbrains-mono text-sm font-medium">Harsh Jadhav — Builder, Shipper, Learner</div>
                <div className="jetbrains-mono text-xs text-muted-foreground mt-1">harshjadhav.dev</div>
              </div>
            </div>
          </PreviewCard>
        </motion.section>

        {/* Discord Preview */}
        <motion.section
          className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <PreviewCard platform="Discord">
            <div className="border-l-4 border-[#5865F2] rounded-r bg-[#2f3136]/10 dark:bg-[#2f3136]/40 p-4 max-w-lg">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="jetbrains-mono text-xs text-[#5865F2] font-medium">harshjadhav.dev</div>
                  <div className="jetbrains-mono text-sm font-semibold text-foreground mt-1 hover:underline cursor-pointer">
                    Harsh Jadhav — Builder, Shipper, Learner
                  </div>
                  <div className="jetbrains-mono text-xs text-muted-foreground mt-2 line-clamp-3">
                    Building things that people use. Shipping fast, learning faster. Currently neck-deep in Solana and Web3, exploring AI, freelancing, and occasionally touching grass.
                  </div>
                </div>
              </div>
              {/* Thumbnail */}
              <div className="mt-3 rounded overflow-hidden aspect-[1.91/1] max-w-[300px] bg-gradient-to-br from-background to-muted relative">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(88, 101, 242, 0.15), transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-muted/50 border border-dashed flex items-center justify-center">
                      <span className="instrument-serif text-sm">HJ</span>
                    </div>
                    <span className="instrument-serif text-lg">Harsh Jadhav</span>
                  </div>
                </div>
              </div>
            </div>
          </PreviewCard>
        </motion.section>

        {/* Slack Preview */}
        <motion.section
          className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <PreviewCard platform="Slack">
            <div className="border border-border rounded-lg overflow-hidden max-w-lg bg-card">
              <div className="p-3 flex gap-3">
                <div className="w-9 h-9 rounded bg-gradient-to-br from-[#4A154B] to-[#611f69] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">HJ</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="jetbrains-mono text-sm font-semibold">harshjadhav.dev</span>
                  </div>
                  <div className="mt-2 border-l-4 border-muted pl-3">
                    <div className="jetbrains-mono text-sm font-medium text-foreground">
                      Harsh Jadhav — Builder, Shipper, Learner
                    </div>
                    <div className="jetbrains-mono text-xs text-muted-foreground mt-1 line-clamp-2">
                      Building things that people use. Shipping fast, learning faster.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PreviewCard>
        </motion.section>

        {/* iMessage Preview */}
        <motion.section
          className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <PreviewCard platform="iMessage">
            <div className="max-w-xs">
              <div className="bg-[#007AFF] text-white rounded-2xl rounded-br-sm p-3">
                <span className="text-sm">Check out my portfolio!</span>
              </div>
              <div className="mt-2 border border-border rounded-xl overflow-hidden bg-card">
                <div className="aspect-[1.91/1] bg-gradient-to-br from-background to-muted relative">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(96, 125, 255, 0.12), transparent 60%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-12 h-12 rounded-full bg-muted/50 border border-dashed flex items-center justify-center">
                        <span className="instrument-serif text-lg">HJ</span>
                      </div>
                      <span className="instrument-serif text-xl">Harsh Jadhav</span>
                      <span className="jetbrains-mono text-[10px] text-muted-foreground">Builder • Shipper • Learner</span>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 border-t border-border">
                  <div className="jetbrains-mono text-xs text-muted-foreground uppercase">harshjadhav.dev</div>
                  <div className="jetbrains-mono text-sm font-medium mt-0.5">Harsh Jadhav — Builder, Shipper, Learner</div>
                </div>
              </div>
            </div>
          </PreviewCard>
        </motion.section>

        {/* Raw Meta Tags */}
        <motion.section
          className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="jetbrains-mono text-xs text-muted-foreground tracking-tight uppercase">
            Open Graph Meta Tags
          </div>
          <div className="bg-muted/20 border border-dashed rounded-sm p-4 overflow-x-auto">
            <pre className="jetbrains-mono text-xs text-muted-foreground whitespace-pre-wrap break-all">
{`<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:url" content="https://harshjadhav.dev" />
<meta property="og:title" content="Harsh Jadhav — Builder, Shipper, Learner" />
<meta property="og:description" content="Building things that people use. Shipping fast, learning faster. Currently neck-deep in Solana and Web3." />
<meta property="og:site_name" content="Harsh Jadhav" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Harsh Jadhav — Builder, Shipper, Learner" />
<meta name="twitter:description" content="Building things that people use. Shipping fast, learning faster. Currently neck-deep in Solana and Web3." />
<meta name="twitter:creator" content="@theharshjadhav" />`}
            </pre>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.section
          className="flex flex-col gap-4 px-4 sm:px-6 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="jetbrains-mono text-xs text-muted-foreground tracking-tight text-center">
            © 2024 Harsh Jadhav. Built with Next.js
          </p>
        </motion.section>
      </div>
    </div>
  );
}
