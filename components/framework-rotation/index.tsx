import { assets } from "@/constants/assets.constant";
import { type Framework, frameworks } from "@/constants/framework.constant";
import { cn } from "@/utils/cn";
import Image from "next/image";
export default function FrameworkRotation({
  currentFramework,
}: {
  currentFramework: Framework;
}) {
  return (
    <div className="w-[80px] h-[80px] mx-2 -mt-2 inline-flex relative">
      {frameworks.map((name, index) => (
        <Image
          key={name}
          src={assets[name]}
          alt="Framework Logo"
          width={80}
          height={80}
          className={cn(
            "w-full h-full object-contain object-center absolute top-4 left-0 transition-all duration-300",
            currentFramework === name
              ? "opacity-100 transform-none"
              : index > frameworks.indexOf(currentFramework as Framework)
              ? "opacity-0 -translate-y-2"
              : "opacity-0 translate-y-2"
          )}
        />
      ))}
    </div>
  );
}