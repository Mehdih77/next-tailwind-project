import { cn } from "@/utils/cn";
import { assets } from "@/constants/assets.constant";
import { Framework } from "@/constants/framework.constant";
import Image from "next/image";
export default function Main({
  currentFramework,
}: {
  currentFramework: Framework;
}) {
  return (
    <>
      <div
        data-testid="main-light"
        className={cn(
          "fixed inset-0 transition-colors delay-100 duration-700 opacity-25",
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
    </>
  );
}
