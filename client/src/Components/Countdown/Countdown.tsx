import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-wrap gap-4 font-bold">
        <div className="flex flex-col items-center">
          <span className="text-black-500 text-md font-medium">Days</span>
          <span className="text-4xl">{days}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-black-500 text-md font-medium">Hours</span>

          <span className="text-4xl">{hours.toString().padStart(2, "0")}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-black-500 text-md font-medium">Minutes</span>

          <span className="text-4xl">{minutes.toString().padStart(2, "0")}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-black-500 text-md font-medium">Seconds</span>

          <span className="text-4xl">{seconds.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
