import Banner from "../Components/Banner/Banner"
import Countdown from "../Components/Countdown/Countdown"
import Header from "../Components/Header/Header"
import SideNavbar from "../Components/SideNavbar/SideNavbar"
import HomeHeaderLayout from "../Layouts/HomePageLayouts/HomeHeaderLayout"

const HomePage = () => {
  return (
    <div className="mx-10 border-2 border-black ">
        <HomeHeaderLayout />
        <Header title="Flashes" subTitle="red text"/>
        <Countdown targetDate={new Date("2024-02-17T00:00:00")}/>
    </div>
  )
}

export default HomePage