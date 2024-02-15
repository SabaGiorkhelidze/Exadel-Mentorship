import { useState } from "react";
import Button from "./Components/Buttons/Button";
import CategoryCard from "./Components/Cards/CategoryCard";
import CategoryLayout from "./Layouts/CategoryLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
          <CategoryLayout />
    
      {/* <div className="flex">
        <div className="flex flex-col w-full">
          <CategoryLayout />
        </div>
      </div> */}
    </>
  );
}

export default App;
