import Btn from "./components/Btn";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const afzayesh = () => {
    setCounter(counter + 1);
  };
  const kahesh = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-40">
      <span>{counter}</span>
      <div className="flex gap-5">
        <Btn title="afzayesh" onClick={afzayesh} />
        <Btn title="kahesh" onClick={kahesh} />
        <Btn title="reset" onClick={reset} />
      </div>
    </div>
  );
}

export default App;
