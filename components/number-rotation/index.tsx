import NumberRotationItem from "./number-rotation-item";
export default function NumberRotation({ number }: { number: number }) {
  const numbers = Array.from({ length: 60 }, (_, i) => i);
  return (
    <div className="relative h-10 w-10">
      {numbers.map((num) => (
        <NumberRotationItem key={num} num={num} number={number} />
      ))}
    </div>
  );
}