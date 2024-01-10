import React from "react";
import { useState } from "react";

const UsoBase = () => {
  const [title, setTitle] = useState("Titolo Banale")

  const changeTitle = () =>{
    if(title === "Titolo Banale") {
      setTitle("Titolo Magico")
    } else {
      setTitle("Titolo Banale")
    }
  }

  return (
    <>
      <h2>{title}</h2>
      <button className="btn btn-success shadow" onClick={changeTitle}>Cliccami</button>
    </>
  );
};

export default UsoBase;