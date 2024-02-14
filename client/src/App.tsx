import { useState } from "react";
import Button from "./Components/Buttons/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
            <Button text="View All"/>
            <h1>hello</h1>
            <Button text="View All Product"/>
        </div>
      </div>
    </>
  );
}

export default App;
