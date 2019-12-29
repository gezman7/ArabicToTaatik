import React, { useState, useImperativeHandle } from "react";
import arabicToTaatik from "./scripts/charChanger";
import wordArabicToTaatik from "./scripts/wordArabicToTaatik";
import Header from "./elements/Header";
import WordBox from "./elements/WordBox";
import "./App.css";

function App() {
  const STARTING_MESSAGE = "הדבק כאן טקסט בערבית";
  const [textOutput, textUpdater] = useState("");
  const [textInput, textShower] = useState(STARTING_MESSAGE);
  const [doubleList, updateList] = useState();

  return (
    <div>
      <Header></Header>

      <div className="mainFrame">
        <textarea
          className="textInputArea"
          placeholder={STARTING_MESSAGE}
          onChange={event => handleInput(event.target.value)}
        ></textarea>
        {doubleList ? <WordBox wordList={doubleList}></WordBox> : <div></div>}
      </div>

      {/* <textarea className="textOutputArea" value={textOutput}></textarea> */}
    </div>
  );

  function handleInput(input) {
    textShower(input);
    let output = arabicToTaatik(input);
    textUpdater(output);

    /* new feature tryout:
     */
    let doubleListOutput = wordArabicToTaatik(input);
    updateList(doubleListOutput);
  }
}

export default App;
