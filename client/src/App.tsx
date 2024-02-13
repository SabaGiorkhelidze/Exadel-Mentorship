import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemCard from "./Components/Cards/ItemCard";
import DiscountIcon from "./Components/Discount Icon/DiscountIcon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <div>
          <ItemCard />
        </div>
        <DiscountIcon />
      </div>
    </>
  );
}

export default App;
