import { cn } from "@/utils/cn";
export default function NumberRotation({ number }: { number: number }) {
  const numbers = Array.from({ length: 60 }, (_, i) => i);
  const getClass = (num: number) => {
    if (number === num) return "opacity-100 transform-none";
    if (number > num) return "opacity-0 -translate-y-2";
    return "opacity-0 translate-y-2";
  };
  return (
    <div className="relative h-10 w-10">
      {numbers.map((num) => (
        <div
          key={num}
          className={cn(
            "w-full h-full absolute transition-all duration-200",
            getClass(num)
          )}>
          {num}
        </div>
      ))}
    </div>
  );
}