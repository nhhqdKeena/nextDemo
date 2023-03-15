import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [answer, setAnswer] = useState(0);
  const [thm, setThm] = useState("");

  const notify = () => {
    if (answer == 25) {
      toast.success("Correct!");
    } else {
      toast.error("wrong!!");
    }
  };

  return (
    <div>
      <span>5 * 5 = </span>
      <input
        onChange={(e) => {
          setAnswer(+e.target.value);
        }}
      />

      <button className="border-2 border-black m-4 p-2" onClick={notify}>
        Send
      </button>
      <ToastContainer position="bottom-center" autoClose={10000} theme="dark" />
    </div>
  );
}
export default App;
