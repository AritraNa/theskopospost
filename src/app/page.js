/* eslint-disable @next/next/no-img-element */


"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Particles } from "../components/ui/shadcn-io/particles";
import { SparklesCore } from "../components/ui/shadcn-io/sparkles";
import { useEffect, useRef, useState } from 'react';
export default function Home() {


  const router = useRouter();
  const audioRef = useRef(null);


  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const tryPlay = () => {
      audio.play().catch(() => { });
      document.removeEventListener('click', tryPlay);
    };

    tryPlay();
    document.addEventListener('click', tryPlay);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener('click', tryPlay);
    };
  }, []);


  return (
    <div
      className="front-page relative w-full h-screen overflow-hidden"

    >
      <audio
        ref={audioRef}
        src="/fireCackle.mp3"
        loop
        preload="auto"
        playsInline
      />

      <div className="relative inline-block">
        <img
          src="/skoposmainpage.jpeg"
          alt="background"
          className="block w-auto h-auto"
        />
        <Particles
          className="absolute inset-0 z-30 pointer-events-none"
          color="#cbc8c158"
          ease={10}
          quantity={40}
          refresh
        />
        <SparklesCore
          background="transparent"
          className="absolute inset-0 w-full h-full pointer-events-none"
          maxSize={1.8}
          minSize={0.4}
          particleColor="#cbc8c1"
          particleDensity={30}
        />
        <div className="absolute inset-0 w-full h-full fire-place-red">
          <SparklesCore
            background="transparent"
            className="w-full h-full "
            maxSize={4.8}
            minSize={0.4}
            particleColor="#d18e6f"
            particleDensity={10}
          />
        </div>
        <div className="absolute inset-0 w-full h-full fire-place-yellow">
          <SparklesCore
            background="transparent"
            className="w-full h-full "
            maxSize={2.8}
            minSize={0.4}
            particleColor="#deaa27"
            particleDensity={10}
          />
        </div>
        <div className="absolute inset-0 w-full h-full clip-lamp-light">
          <SparklesCore
            background="transparent"
            className="w-full h-full "
            maxSize={4.8}
            minSize={0.4}
            particleColor="#b1ab9b"
            particleDensity={60}
          />

        </div>
        <img
          src="/skoposwhitelogo.png"
          alt="logo"
          width={90}
          height={90}
          className="fixed z-5 left-5 top-5"
        />
        <img
          src="/user-pfp.png"
          alt="profile"
          width={40}
          height={40}
          className="fixed z-5 right-5 top-5"
        />
      </div>

    </div >

  );
}
