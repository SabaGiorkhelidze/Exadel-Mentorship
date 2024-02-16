import Banner from "../Components/Banner/Banner"
import Header from "../Components/Header/Header"
import SideNavbar from "../Components/SideNavbar/SideNavbar"
import HomeHeaderLayout from "../Layouts/HomePageLayouts/HomeHeaderLayout"

const HomePage = () => {
  return (
    <div className="mx-10 border-2 border-black ">
        <HomeHeaderLayout />
        <Header title="Flashes" subTitle="red text"/>
    </div>
  )
}

export default HomePage