import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setIsOpen(false);
    }
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <Button toShow={handleClick} text={"Open Form"} />
      {isOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;
