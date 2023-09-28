import { cn } from "@/utils/cn";
type Props = {
  num: number;
  number: number;
};
export default function NumberRotationItem({ number, num }: Props) {
  const getClass = (num: number) => {
    if (number === num) return "opacity-100 transform-none";
    if (number > num) return "opacity-0 -translate-y-2";
    return "opacity-0 translate-y-2";
  };
  return (
    <div
      data-testid="NumberRotationItem"
      className={cn(
        "w-full h-full absolute transition-all duration-200",
        getClass(num)
      )}>
      {num}
    </div>
  );
}
