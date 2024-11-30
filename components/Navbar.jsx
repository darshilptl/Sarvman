"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CustomCursor = ({ isHovered }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="w-8 h-8 bg-white rounded-full"
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 1 : 0.3,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default function Navbar() {
  const [active, setActive] = useState("work");
  const [isHovered, setIsHovered] = useState(false);

  const options = {
    work: { x: 4, width: 120 },
  };

  return (
    <div className="w-full bg-black bg-[url('/images/bg.png')] bg-center bg-cover sticky top-0 z-10 cursor-none">
      <CustomCursor isHovered={isHovered} />
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center">
            <Image
              src="/icons/Dlogo.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-white text-md font-medium">Darshil Patel</h1>
            <p className="text-zinc-500 text-sm">Developer</p>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center bg-white/[0.08] rounded-full p-1 px-3 ">
            <Image
              src={"/icons/sarvman-logo.png"}
              alt="Home"
              width={30}
              height={30}
              className="relative left-2"
            />
            <Link href="/" passHref className="z-20">
              <button
                onClick={() => setActive("work")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative px-4 py-1.5 text-base font-medium transition-colors duration-200 ${
                  active === "work" ? "text-white" : "text-zinc-400"
                }`}
              >
                Sarvman
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="https://github.com/darshilptl"
            className="text-zinc-400 hover:text-white text-md font-medium flex items-center gap-1 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            GitHub
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/darshil-patel-42307a257/"
            className="text-zinc-400 hover:text-white text-md font-medium flex items-center gap-1 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Mobile view: LinkedIn and Resume buttons */}
      <div className="flex sm:hidden justify-around mt-2">
        <Link
          href="https://github.com/darshilptl"
          className="text-zinc-400 hover:text-white text-md font-medium flex items-center gap-1 transition-colors"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          GitHub
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/darshil-patel-42307a257/"
          className="text-zinc-400 hover:text-white text-md font-medium flex items-center gap-1 transition-colors"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          LinkedIn
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
