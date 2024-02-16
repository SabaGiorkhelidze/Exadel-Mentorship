import { useState } from "react";
import Button from "./Components/Buttons/Button";
import CategoryCard from "./Components/Cards/CategoryCard";
import CategoryLayout from "./Layouts/CategoryLayout";
import Banner from "./Components/Banner/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <div className=" ">
        <Banner />
        </div>
      </div>
    </>
  );
}

export default App;
