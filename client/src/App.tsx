import Button from "./Components/Buttons/Button";
// import CategoryCard from "./Components/Cards/CategoryCard";
// import CategoryLayout from "./Layouts/CategoryLayout";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="">
          {/* <HomePage /> */}
          <LoginPage />
        </div>
      </div>
    </>
  );
}

export default App;
