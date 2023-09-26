"use client";
import { useState, useEffect } from "react";
import { assets } from "@/constants/assets.constant";
import { type Framework, frameworks } from "@/constants/framework.constant";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworks[0]
  );

  useEffect(() => {
    let currentIndex = 0;
    const rotateFramework = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFramework, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed inset-0 transition-color delay-100 duration-700 opacity-25" />
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
    </main>
  );
}
