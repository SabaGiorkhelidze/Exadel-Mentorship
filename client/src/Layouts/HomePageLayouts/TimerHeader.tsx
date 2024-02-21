import React from "react";
import Header from "../../Components/Header/Header";
import Countdown from "../../Components/Countdown/Countdown";

const TimerHeader = () => {
  return (
    <div className="flex flex-row gap-10 items-center">
      <Header title="Very Big Text" subTitle="red text" />
      <Countdown targetDate={new Date("2024-02-17T00:00:00")} />
    </div>
  );
};

export default TimerHeader;
