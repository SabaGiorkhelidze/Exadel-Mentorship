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
      setScrollPosition(scrollPosition - cardsPerPage);
    }
  };

  const handleRightScroll = () => {
    if (scrollPosition < cardsRef.current?.scrollWidth - cardsPerPage * cardsRef.current?.clientWidth) {
      setScrollPosition(scrollPosition + cardsPerPage);
    }
  };
  return (
    <div>
      <div className="flex flex-row space-x-4 overflow-x-auto scrollbar-smooth">
        {categoryCardData.map((item, index) => (
          <CategoryCard Icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryLayout;
