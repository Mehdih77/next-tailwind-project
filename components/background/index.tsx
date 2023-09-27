import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
export default function Background() {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    setShowBackground(true);
  }, []);
  return (
    <div
      data-testid="background"
      className={cn(
        "bg-black fixed inset-0 transition-opacity duration-[1500ms]",
        !showBackground ? "opacity-100" : "opacity-0"
      )}
    />
  );
}
