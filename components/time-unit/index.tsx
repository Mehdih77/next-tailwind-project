import { Framework } from "@/constants/framework.constant";
import { cn } from "@/utils/cn";
import React from "react";
import NumberRotation from "../number-rotation";
export default function TimeUnit({
  label,
  value,
  currentFramework,
}: {
  label: string;
  value: number;
  currentFramework: Framework;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-white text-3xl font-semibold">
        <NumberRotation number={value} />
      </div>
      <div
        className={cn("text-[8px] font-medium", {
          "text-purple-300": currentFramework === "qwik",
          "text-sky-300": currentFramework === "safari",
          "text-yellow-300": currentFramework === "chrome",
          "text-teal-300": currentFramework === "tailwind",
          "text-blue-300": currentFramework === "react",
          "text-green-300": currentFramework === "vue",
          "text-orange-300": currentFramework === "svelte",
          "text-red-300": currentFramework === "mobile",
          "text-neutral-300": currentFramework === "desktop",
        })}>
        {label}
      </div>
    </div>
  );
}