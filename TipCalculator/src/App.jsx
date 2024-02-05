import "./App.css";
import { RenderTipList } from "./components/RenderTipList.jsx";
import { RenderInput } from "./components/RenderInput.jsx";
import { useState } from "react";

function App() {
  const [tip, setTip] = useState(null);

  const handleSetTip = (newTip) => {
    setTip(newTip);
    console.log(newTip);
  };

  return (
    <>
      <header>
        <img src="src/assets/images/logo.svg" />
      </header>
      <div className="card">
        <RenderInput
          icon={{ src: "icons/icon-dollar.svg", alt: "dollar icon" }}
          type="number" min="0"
          title="Bill"
        />
        <RenderTipList setTip={handleSetTip} />
        <RenderInput
          icon={{ src: "icons/icon-person.svg", alt: "person icon" }}
          type="number" min="1"
          title="Number of People"
        />
        <div></div>
      </div>
    </>
  );
}

export default App;