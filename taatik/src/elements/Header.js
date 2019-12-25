import React, { useState } from "react";

function Header() {
  const [title, swapTitle] = useState("תעתיק");

  return (
    <div className="headerContainer">
      {" "}
      <h
        onClick={() => {
          handleClick();
        }}
      >
        {" "}
        {title}
      </h>
    </div>
  );

  function handleClick() {
    let newTitle = "نقل حرفي";
    if (title === "نقل حرفي") newTitle = "תעתיק";

    swapTitle(newTitle);
  }
}
export default Header;
