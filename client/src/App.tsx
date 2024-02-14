import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemCard from "./Components/Cards/ItemCard";
import DiscountIcon from "./Components/Discount Icon/DiscountIcon";
import StarRating from "./Components/StarRating/StarRating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
            <ItemCard />
            {/* <StarRating /> */}
            {/* <DiscountIcon /> */}
        </div>
      </div>
    </>
  );
}

export default App;
