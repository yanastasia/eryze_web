"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FlaskConical, Briefcase, Mail, User, ArrowUpRight, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.span
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background"
            >
              <ArrowUpRight size={18} />
            </motion.span>
            <span className="font-header text-lg font-semibold text-foreground">
              Eryze
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/#services" className="hover:text-primary inline-flex items-center gap-2">
              <Briefcase size={16} /> Studio
            </Link>
            <Link href="/labs" className="hover:text-primary inline-flex items-center gap-2">
              <FlaskConical size={16} /> Labs
            </Link>
            <Link href="/anastasia" className="hover:text-primary inline-flex items-center gap-2">
              <User size={16} /> Anastasia
            </Link>
            <Link href="/contact" className="hover:text-primary inline-flex items-center gap-2">
              <Mail size={16} /> Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild>
              <Link href="/contact">Collaborate</Link>
            </Button>
            <button
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <span className="block size-4">
                <Sun size={16} className="dark:hidden" />
                <Moon size={16} className="hidden dark:block" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
