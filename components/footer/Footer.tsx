import { cn } from "@/utils/cn";
import { assets } from "@/constants/assets.constant";
import { Framework } from "@/constants/framework.constant";
import Image from "next/image";
import Link from "next/link";
import FrameworkRotation from "../framework-rotation";
import CountdownTimer from "../countdown-timer";
export default function Footer({
  currentFramework,
}: {
  currentFramework: Framework;
}) {
  return (
    <div>
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
            And <FrameworkRotation currentFramework={currentFramework} />
            <span
              className={cn("transition-colors duration-200", {
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
              {" "}
              Saying HELLO
            </span>
          </h1>
          <p className="mb-8">My Github Profile:</p>
          <div className="mb-8">
            <Link
              target="_blank"
              href="https://github.com/Mehdih77"
              prefetch={false}>
              <button
                className={cn(
                  "text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200",
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
                )}>
                Go To Gthub
              </button>
            </Link>
          </div>
          <CountdownTimer currentFramework={currentFramework} />
        </div>
      </div>
    </div>
  );
}