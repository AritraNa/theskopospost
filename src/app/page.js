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
    <div className="relative h-screen w-screen overflow-hidden">
      <audio
        ref={audioRef}
        src="/fireCackle.mp3"
        loop
        preload="auto"
        playsInline
      />
      {/* Background Image – NO CROP */}
      <Image
        src="/skoposmainpage.jpeg"
        alt="Background"
        fill
        priority
        className="left-[50%] object-cover"
      />
      <Image
        src="/user-pfp.png"
        alt="profile"
        width={50}
        height={50}
        className="fixed z-5 right-5 top-5"
      />
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={3.4}
        particleDensity={5}
        className="absolute inset-0 w-full h-full"
        particleColor="#d5c9ae08"
        speed={2}
      />
      <Particles
        className="absolute inset-0 z-30 pointer-events-none"
        color="#cbc8c158"
        ease={10}
        quantity={40}
        refresh
      />
      <div className="websiteTitle">
        SKOPOS
      </div>
      <div className="
      fixed 
      top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      bg-center 
      "
        style={{
          width: '1550px',
          height: '800px',
          zIndex: 3
        }}
      >

        <div className="fire-place"></div>
        <div className="clip-lamp-light"></div>
      </div>

    </div>
  );
}
