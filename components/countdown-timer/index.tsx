import { countdown as countdownTime } from "@/utils/countdown";
import { useState, useEffect } from "react";
import { type Framework } from "@/constants/framework.constant";
import TimeUnit from "../time-unit";

export default function CountdownTimer({
  currentFramework,
}: {
  currentFramework: Framework;
}) {
  const [countdown, setCountdown] = useState(countdownTime());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(countdownTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex gap-[10px] text-center">
      <TimeUnit
        label="DAYS"
        value={countdown.days}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="HOURS"
        value={countdown.hours}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="MINUTES"
        value={countdown.minutes}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="SECONDS"
        value={countdown.seconds}
        currentFramework={currentFramework}
      />
    </div>
  );
}
