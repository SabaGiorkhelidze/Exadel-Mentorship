import React from "react";
import SideNavItem from "./Items/SideNavItem";
const SideNavbar = () => {
  return (
    <div className=" flex flex-col border-2 gap-2">
      <SideNavItem title={"Graphics card"} dropdown={false}/>
      <SideNavItem title={"Graphics card"} dropdown={true}/>
      <SideNavItem title={"CPU"} dropdown={false}/>
      <SideNavItem title={"Graphics card"} dropdown={false}/>
      <SideNavItem title={"Graphics card"} dropdown={false}/>
      <SideNavItem title={"Graphics card"} dropdown={false}/>
      <SideNavItem title={"Graphics card"} dropdown={false}/>
      <SideNavItem title={"Graphics card"} dropdown={false}/>
      <SideNavItem title={"Graphics card"} dropdown={false}/>

    </div>
  );
};

export default SideNavbar;
