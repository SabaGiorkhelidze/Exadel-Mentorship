import React, { useState, useRef } from "react";
import CategoryCard from "../Components/Cards/CategoryCard";
import { CiMonitor } from "react-icons/ci";
import { CiMicrochip } from "react-icons/ci";
import { CiDesktopMouse1 } from "react-icons/ci";
import { CiFloppyDisk } from "react-icons/ci";
import { IconType } from "react-icons";

interface CategoryCardDataProps {
  title: string;
  icon: IconType;
}

const categoryCardData: CategoryCardDataProps[] = [
  {
    title: "Monitors",
    icon: CiMonitor,
  },
  {
    title: "CPU",
    icon: CiMicrochip,
  },
  {
    title: "Mouses",
    icon: CiDesktopMouse1,
  },
  {
    title: "Storage",
    icon: CiFloppyDisk,
  },
  {
    title: "Monitors",
    icon: CiMonitor,
  },
  {
    title: "CPU",
    icon: CiMicrochip,
  },
  {
    title: "Mouses",
    icon: CiDesktopMouse1,
  },
  {
    title: "Storage",
    icon: CiFloppyDisk,
  },
  {
    title: "Monitors",
    icon: CiMonitor,
  },
  {
    title: "CPU",
    icon: CiMicrochip,
  },
  {
    title: "Mouses",
    icon: CiDesktopMouse1,
  },
  {
    title: "Storage",
    icon: CiFloppyDisk,
  },
];

const CategoryLayout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const cardsPerPage = 3;

  const handleLeftScroll = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - cardsPerPage * getCardWidth());
    }
  };

  const handleRightScroll = () => {
    if (
      cardsRef.current &&
      scrollPosition < cardsRef.current.scrollWidth - cardsRef.current.clientWidth
    ) {
      setScrollPosition(scrollPosition + cardsPerPage * getCardWidth());
    }
  };

  const getCardWidth = () => {
    return 235; 
  };

  return (
    <div className="flex flex-row space-x-4">
      {/* Scroll buttons (optional) */}
      <button
        className="bg-gray-200 px-2 rounded-l-md hover:bg-gray-300 disabled:opacity-50"
        onClick={handleLeftScroll}
        disabled={scrollPosition === 0}
      >
        &#8592;
      </button>
      <div className="overflow-x-hidden relative" ref={cardsRef}>
        <div
          className="flex transition-all duration-200 ease-in-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {categoryCardData.map((item, index) => (
            <CategoryCard key={index} Icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
      <button
        className="bg-gray-200 px-2 rounded-r-md hover:bg-gray-300 disabled:opacity-50"
        onClick={handleRightScroll}
        disabled={
          !cardsRef.current ||
          scrollPosition >=
            cardsRef.current.scrollWidth - cardsRef.current.clientWidth
        }
      >
        &#8594;
      </button>
    </div>
  );
};

export default CategoryLayout;
