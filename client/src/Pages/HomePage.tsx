import Banner from "../Components/Banner/Banner";
import ItemCard from "../Components/Cards/ItemCard";
import Countdown from "../Components/Countdown/Countdown";
import HorizontalDivider from "../Components/Divider/HorizontalDivider";
import Header from "../Components/Header/Header";
import NewArrival from "../Components/New Arrival/NewArrival";
import SideNavbar from "../Components/SideNavbar/SideNavbar";
import ItemCardLayout from "../Layouts/HomePageLayouts/CardLayouts/ItemCardLayout";
import HomeHeaderLayout from "../Layouts/HomePageLayouts/HomeHeaderLayout";
import TimerHeader from "../Layouts/HomePageLayouts/TimerHeader";

const HomePage = () => {
  return (
    <div className="mx-10">
      <div>
        <HomeHeaderLayout />
      </div>

      <HorizontalDivider />

      <div>
        <ItemCardLayout />
      </div>
      <div className="my-4">
        <TimerHeader />
      </div>

      <div>
        <NewArrival />
      </div>
    </div>
  );
};

export default HomePage;
