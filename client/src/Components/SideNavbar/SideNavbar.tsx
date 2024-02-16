import React from "react";
import SideNavItem from "./Items/SideNavItem";
const SideNavbar = () => {
  return (
    <div className="border-2 border-black flex flex-col">
      <SideNavItem title={"Graphics card"} dropdown={false}/>
      <SideNavItem title={"Graphics card"} dropdown={true}/>
      <SideNavItem title={"CPU"} dropdown={false}/>
      <SideNavItem title={"Graphics card"} dropdown={false}/>

    </div>
  );
};

export default SideNavbar;
