"use client";

import Link from "next/link";

import { m } from "framer-motion";
import { MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const animation = {
  hide: {
    y: 8,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export function HomeContent() {
  return (
    <m.div
      initial="hide"
      animate="show"
      transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      className="flex flex-col gap-4 text-center"
    >
      <m.div variants={animation}>
        <h1 className="text-5xl max-w-3xl text-primary font-bold">
          PassForte: Where Passwords Find a Safe Haven
        </h1>
      </m.div>
      <m.div
        className="flex flex-col justify-center gap-2"
        variants={animation}
      >
        <p className="sm:text-sm md:text-md text-neutral-400 font-medium">
          Your All-in-One Password Management Solution for Keeping Your Digital
          World Secure
        </p>
      </m.div>
      <m.div className="flex items-center justify-center" variants={animation}>
        <Link href="/dashboard">
          <Button variant="ghost" className="group">
            Get Started
            <MoveRight
              className="group-hover:translate-x-0.5 duration-300 transition-transform"
              size={20}
            />
          </Button>
        </Link>
      </m.div>
    </m.div>
  );
}
