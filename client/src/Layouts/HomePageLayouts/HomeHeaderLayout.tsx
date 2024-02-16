import Banner from "../../Components/Banner/Banner";
import SideNavbar from "../../Components/SideNavbar/SideNavbar";


const HomeHeaderLayout = () => {
  return (
    <div className="flex flex-row justify-between  my-4">
      <SideNavbar />
      <Banner />
    </div>
  );
};

export default HomeHeaderLayout;
