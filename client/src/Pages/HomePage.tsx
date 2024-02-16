import Banner from "../Components/Banner/Banner";
import Countdown from "../Components/Countdown/Countdown";
import Header from "../Components/Header/Header";
import SideNavbar from "../Components/SideNavbar/SideNavbar";
import HomeHeaderLayout from "../Layouts/HomePageLayouts/HomeHeaderLayout";
import TimerHeader from "../Layouts/HomePageLayouts/TimerHeader";

const HomePage = () => {
  return (
    <div className="mx-10 ">
      <HomeHeaderLayout />
      <div className="my-4">
        <TimerHeader />
      </div>
    </div>
  );
};

export default HomePage;
