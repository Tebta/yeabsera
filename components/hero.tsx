"use client";
import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";
import { ImagesSlider } from "./ui/images-slider";
import gsap from "gsap";
import { Button } from "./ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";
// import { Calendar } from "./ui/calendar";

export function ImagesSliderDemo() {
  const images = [
    // "https://images.unsplash.com/photo-1698276504446-7dfdaf53d254?q=100&w=2177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1604881991108-a3a35673b7c4?q=100&w=3456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, []);
  return (
    <section className='relative h-screen bg-hero bg-cover bg-center text-white'>
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p> */}
          <h1 ref={titleRef} className="text-4xl text-center font-bold lg:text-6xl font-bold text-gray-200 mb-6">
                Your Mental Health Matters.
                <div className="text-emerald-200"> Healing Begins Here.</div>
              </h1>
              <div className="flex  mt-4 flex-col justify-center items-center sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button className="px-4 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative ">
          <span>Learn More About Me →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Button>
                {/* <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Me</Link>
                </Button> */}
              </div>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider></section>
  );
}
