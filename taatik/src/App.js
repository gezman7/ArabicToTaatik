import React, { useState, useImperativeHandle } from "react";
import arabicToTaatik from "./scripts/charChanger";
import Header from "./elements/Header";
import "./App.css";

function App() {
  const STARTING_MESSAGE = "הדבק כאן טקסט בערבית";
  const [textOutput, textUpdater] = useState("");
  const [textInput, textShower] = useState(STARTING_MESSAGE);

  return (
    <div>
      <Header></Header>

      <div className="mainFrame">
        <textarea
          className="textInputArea"
          placeholder={STARTING_MESSAGE}
          onChange={event => handleInput(event.target.value)}
        ></textarea>
        <textarea className="textOutputArea" value={textOutput}></textarea>
      </div>
    </div>
  );

  function handleInput(input) {
    textShower(input);
    let output = arabicToTaatik(input);
    textUpdater(output);
  }
}

export default App;
