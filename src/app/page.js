// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.js file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Particles } from "../components/ui/shadcn-io/particles";
import { SparklesCore } from "../components/ui/shadcn-io/sparkles";
import { useEffect, useRef } from 'react';
export default function Home() {


  const router = useRouter();
  const audioRef = useRef(null);


  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.c urrent;

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
    <div className="relative h-screen w-screen bg-[#786d51] overflow-hidden">
      <audio
        ref={audioRef}
        src="/audio.mp3"
        loop
        preload="auto"
        playsInline
      />
      {/* Background Image – NO CROP */}
      <Image
        src="/skoposMainPageEmpty.png"
        alt="Background"
        fill
        priority
        className="left-[50%] object-cover grayscale brightness-60"
      />
      <div className="
      object-contain 
      w-[30rem] 
      h-[35rem] 
      relative 
      top-67 
      left-[50%] 
      -translate-x-1/2 
      z-40 
      clip-lamp-light 
      ">
        {/* Gradients  */}
        {/* 

      [mask-image:radial-gradient(circle,white_15%,transparent_0%)]

        [mask-image:radial-gradient(300px_200px_at_top_right,white_0%,transparent_80%)]

        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
        {/* Core component */}
        {/* <SparklesCore
          background="transparent"
          className="w-full h-full "
          maxSize={1.8}
          minSize={0.4}
          particleColor="#cbc8c1"
          particleDensity={30}
        /> */}
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-5 ">
          <div className="
          w-full 
          h-full
          bg-[#cbc8c1f3]
          blur-md
      animate-lampFlicker
          [mask-image:radial-gradient(8rem_20rem_at_top,white_0%,transparent_100)]
          " />
        </div>
      </div>
      <Image
        src="/manInChair.webp"
        alt="Background"
        fill
        priority
        className="object-cover z-30 brightness-55 scale-[0.8] translate-y-63 translate-x-39
        "
      />
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={2.4}
        particleDensity={20}
        className="absolute inset-0 w-full h-full"
        particleColor="#cbc8c172"
        speed={2}
      />
      <Particles
        className="absolute inset-0 z-30 pointer-events-none"
        color="#cbc8c158"
        ease={10}
        quantity={40}
        refresh
      />


    </div>
  );
}
