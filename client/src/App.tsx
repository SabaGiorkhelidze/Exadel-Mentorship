import Button from "./Components/Buttons/Button";
// import CategoryCard from "./Components/Cards/CategoryCard";
// import CategoryLayout from "./Layouts/CategoryLayout";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
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
          {/* <HomePage /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
