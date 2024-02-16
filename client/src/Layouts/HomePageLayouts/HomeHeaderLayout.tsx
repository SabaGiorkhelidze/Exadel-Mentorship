import Banner from "../../Components/Banner/Banner";
import VerticalDivider from "../../Components/Divider/VerticalDivider";
import SideNavbar from "../../Components/SideNavbar/SideNavbar";

const HomeHeaderLayout = () => {
  return (
    <div className="flex flex-row justify-evenly h-full ">
      <div className="my-4 ">
        <SideNavbar />
      </div>
      {/* divider */}
      <div className="">
        <VerticalDivider />
      </div>
      {/* end of divider */}
      <div className="my-4">
        <Banner />
      </div>
    </div>
  );
};

export default HomeHeaderLayout;
