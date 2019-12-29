import React, { useState } from "react";
import randomstring from "randomstring";
import WordElement from "./WordElement";

const WordBox = props => {
  const { wordList } = props;

  return (
    <div className="wordBox">
      {wordList.map(word => {
        return (
          <WordElement
            key={randomstring.generate(16)}
            taatik={word.taatik}
            arabic={word.arabic}
          />
        );
      })}
    </div>
  );
};
export default WordBox;
