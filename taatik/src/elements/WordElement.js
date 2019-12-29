import React, { useState } from "react";
import randomstring from "randomstring";

const WordElement = props => {
  const { taatik, arabic } = props;
  const [presentedWord, swapWord] = useState(taatik);

  return (
    <span className="wordElem" onClick={e => handleClick()}>
      {presentedWord}
    </span>
  );

  function handleClick() {
    let oldWord = presentedWord;
    let newWord = "";
    if (oldWord === taatik) newWord = arabic;
    else newWord = taatik;

    swapWord(newWord);
  }
};
export default WordElement;
