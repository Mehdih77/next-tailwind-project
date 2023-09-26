"use client";
import { useState, useEffect } from "react";
import { type Framework, frameworks } from "@/constants/framework.constant";
import Background from "@/components/background";
import Footer from "@/components/footer";
import Main from "@/components/main";

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
    <>
      <Main currentFramework={currentFramework} />
      <Background />
      <Footer currentFramework={currentFramework} />
    </>
  );
}
