import { useState } from "react";
import Button from "./Components/Buttons/Button";
import CategoryCard from "./Components/Cards/CategoryCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
            <CategoryCard title="Monitor"/>
        </div>
      </div>
    </>
  );
}

export default App;
