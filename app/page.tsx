"use client";
import { useState, useEffect } from "react";
import { assets } from "@/constants/assets.constant";
import { type Framework, frameworks } from "@/constants/framework.constant";
import { cn } from "@/utils/cn";
import Image from "next/image";
import FrameworkRotation from "@/components/framework-rotation";

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworks[0]
  );
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const rotateFramework = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFramework, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className={cn(
          "fixed inset-0 transition-color delay-100 duration-700 opacity-25",
          {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-300": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop",
          }
        )}
      />
      <Image
        src={assets.gradient}
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient"
        className="fixed inset-0 w-screen h-screen object-cover"
      />
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      />
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-[1500ms]",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          <h1 className="text-5xl text-center leading-snug mb-12">
            <Image
              src={assets.figma}
              alt="Figma Logo"
              className="inline-block mr-8 -mt-2"
              width={50}
              height={50}
            />
            to <FrameworkRotation currentFramework={currentFramework} /> will{" "}
            <span>never</span> be the same again
          </h1>
        </div>
      </div>
    </main>
  );
}
