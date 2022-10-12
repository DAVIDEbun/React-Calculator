import { useState } from "react";

const operator = ["+", "*", "/", "."];
const operatorTwo = ["-"];

function App() {
  const [valueCalc, setvalueCalc] = useState("");

  const handleCalc = (value) => {
    if (
      (operator.includes(value) && valueCalc === "") ||
      (operator.includes(value) && operator.includes(valueCalc.slice(-1)))
    ) {
      return;
    }

    if (
      (value === "-" && valueCalc === "-") ||
      (operatorTwo.includes(value) && operatorTwo.includes(valueCalc.slice(-1)))
    ) {
      return;
    }

    if (value === "0" && valueCalc === "0") {
      return;
    }

    setvalueCalc(valueCalc + value);
  };

  const handleClear = () => {
    setvalueCalc("");
  };

  const handleDel = () => {
    setvalueCalc(valueCalc.slice(0, -1));
  };

  const equalTo = () => {
    setvalueCalc(eval(valueCalc).toString());
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <textarea placeholder="0" value={valueCalc}></textarea>
        </div>
        <div className="buttons">
          <button onClick={() => handleCalc("1")}>1</button>
          <button onClick={() => handleCalc("2")}>2</button>
          <button onClick={() => handleCalc("3")}>3</button>
          <button onClick={handleClear}>AC</button>
          <button onClick={() => handleCalc("4")}>4</button>
          <button onClick={() => handleCalc("5")}>5</button>
          <button onClick={() => handleCalc("6")}>6</button>
          <button onClick={() => handleCalc("+")}>+</button>
          <button onClick={() => handleCalc("7")}>7</button>
          <button onClick={() => handleCalc("8")}>8</button>
          <button onClick={() => handleCalc("9")}>9</button>
          <button onClick={() => handleCalc("-")}>-</button>
          <button onClick={() => handleCalc("0")}>0</button>
          <button onClick={() => handleCalc(".")}>.</button>
          <button onClick={() => handleCalc("/")}>/</button>
          <button onClick={() => handleCalc("*")}>x</button>
          <button onClick={equalTo}>=</button>
          <button onClick={handleDel}>&larr;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
