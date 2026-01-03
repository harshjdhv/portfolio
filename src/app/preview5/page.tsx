"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { CommandMenu } from "@/components/ui/command-menu"
import { 
  Home, 
  User, 
  FolderKanban, 
  Mail, 
  Brain, 
  Github, 
  Twitter, 
  Linkedin,
  Moon,
  Sun,
  Palette,
  Sparkles,
  Rocket,
  Coffee,
  Code2,
  Terminal,
  Zap
} from "lucide-react"

export default function Preview5Page() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)
  const [theme, setTheme] = useState<"default" | "hacker" | "sunset">("default")

  const themeClasses = {
    default: "",
    hacker: "bg-black text-green-400",
    sunset: "bg-gradient-to-br from-orange-900 via-purple-900 to-pink-900"
  }

  const groups = [
    {
      title: "Navigate",
      items: [
        { 
          id: "home", 
          title: "Home", 
          icon: <Home className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Navigating to Home... 🏠") 
        },
        { 
          id: "about", 
          title: "About Me", 
          icon: <User className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Loading About section... 👨‍💻") 
        },
        { 
          id: "projects", 
          title: "Projects", 
          icon: <FolderKanban className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Fetching cool projects... 🚀") 
        },
        { 
          id: "thoughts", 
          title: "Thoughts", 
          icon: <Brain className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Diving into thoughts... 💭") 
        },
        { 
          id: "contact", 
          title: "Contact", 
          icon: <Mail className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Opening contact form... 📧") 
        },
      ],
    },
    {
      title: "Social",
      items: [
        { 
          id: "github", 
          title: "GitHub", 
          icon: <Github className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Opening GitHub profile... 🐙") 
        },
        { 
          id: "twitter", 
          title: "Twitter / X", 
          icon: <Twitter className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Opening Twitter... 🐦") 
        },
        { 
          id: "linkedin", 
          title: "LinkedIn", 
          icon: <Linkedin className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Opening LinkedIn... 💼") 
        },
      ],
    },
    {
      title: "Theme",
      items: [
        { 
          id: "theme-default", 
          title: "Default Theme", 
          icon: <Sun className="h-4 w-4" />, 
          onSelect: () => { setTheme("default"); setSelectedAction("Theme: Default ✨") }
        },
        { 
          id: "theme-hacker", 
          title: "Hacker Mode", 
          icon: <Terminal className="h-4 w-4" />, 
          onSelect: () => { setTheme("hacker"); setSelectedAction("Theme: Hacker 🖥️") }
        },
        { 
          id: "theme-sunset", 
          title: "Sunset Vibes", 
          icon: <Palette className="h-4 w-4" />, 
          onSelect: () => { setTheme("sunset"); setSelectedAction("Theme: Sunset 🌅") }
        },
      ],
    },
    {
      title: "Actions",
      items: [
        { 
          id: "hire", 
          title: "Hire Me", 
          icon: <Rocket className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Let's build something amazing together! 🤝") 
        },
        { 
          id: "coffee", 
          title: "Buy Me Coffee", 
          icon: <Coffee className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Thanks for the caffeine boost! ☕") 
        },
        { 
          id: "collab", 
          title: "Collaborate", 
          icon: <Code2 className="h-4 w-4" />, 
          onSelect: () => setSelectedAction("Open to collaborations! 🎯") 
        },
      ],
    },
  ]

  return (
    <div className={`min-h-screen flex flex-col items-center text-foreground transition-all duration-500 ${themeClasses[theme]}`}>
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
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="jetbrains-mono text-xs text-muted-foreground uppercase tracking-wider">
              Component Preview
            </span>
          </div>
          <h1 className="instrument-serif text-4xl md:text-5xl font-normal tracking-tight relative z-10">
            Command Menu
          </h1>
          <p className="jetbrains-mono text-sm text-muted-foreground max-w-xl tracking-tight relative z-10">
            A beautiful, accessible command palette for quick navigation and actions.
            Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs mx-1">⌘K</kbd> or click the search button below.
          </p>
        </motion.section>

        {/* Command Menu Demo */}
        <motion.section
          className="flex flex-col gap-8 border-b border-dashed px-4 sm:px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col gap-2">
            <span className="jetbrains-mono text-xs text-muted-foreground uppercase tracking-wider">
              Interactive Demo
            </span>
            <p className="jetbrains-mono text-sm text-muted-foreground">
              Try it out - search for pages, socials, themes, or actions.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            {/* Command Menu Trigger */}
            <div className="flex justify-center w-full max-w-md">
              <CommandMenu 
                groups={groups}
                placeholder="Search pages, socials, themes..."
                brandName="Harsh's Portfolio"
                triggerLabel="Quick actions..."
                emptyMessage="No matching commands"
              />
            </div>

            {/* Selected Action Display */}
            {selectedAction && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="flex items-center gap-3 px-6 py-4 bg-primary/10 border border-primary/20 rounded-xl"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="jetbrains-mono text-sm">{selectedAction}</span>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="jetbrains-mono text-xs text-muted-foreground uppercase tracking-wider">
            Features
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Terminal className="h-4 w-4" />, title: "Keyboard First", desc: "⌘K to open, arrows to navigate, enter to select" },
              { icon: <Zap className="h-4 w-4" />, title: "Fuzzy Search", desc: "Smart filtering across all groups and items" },
              { icon: <Palette className="h-4 w-4" />, title: "Animated", desc: "Smooth framer-motion transitions" },
              { icon: <Code2 className="h-4 w-4" />, title: "Accessible", desc: "Full keyboard navigation support" },
              { icon: <Sparkles className="h-4 w-4" />, title: "Customizable", desc: "Groups, icons, and actions" },
              { icon: <Moon className="h-4 w-4" />, title: "Dark Mode Ready", desc: "Respects system preferences" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex flex-col gap-2 p-4 border border-dashed rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center gap-2 text-primary">
                  {feature.icon}
                  <span className="jetbrains-mono text-sm font-medium">{feature.title}</span>
                </div>
                <span className="jetbrains-mono text-xs text-muted-foreground">{feature.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Code Example */}
        <motion.section
          className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="jetbrains-mono text-xs text-muted-foreground uppercase tracking-wider">
            Usage
          </span>
          <div className="bg-muted/20 border border-dashed rounded-lg p-4 overflow-x-auto">
            <pre className="jetbrains-mono text-xs text-muted-foreground">
{`import { CommandMenu } from "@/components/ui/command-menu"
import { Home, Settings } from "lucide-react"

const groups = [
  {
    title: "Navigation",
    items: [
      { 
        id: "home", 
        title: "Home", 
        icon: <Home className="h-4 w-4" />,
        onSelect: () => router.push("/")
      },
    ],
  },
]

<CommandMenu 
  groups={groups}
  placeholder="Type a command..."
  brandName="My App"
/>`}
            </pre>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.section
          className="flex flex-col gap-4 px-4 sm:px-6 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="jetbrains-mono text-xs text-muted-foreground tracking-tight text-center">
            Built with cmdk, framer-motion, and shadcn/ui
          </p>
        </motion.section>
      </div>
    </div>
  )
}
