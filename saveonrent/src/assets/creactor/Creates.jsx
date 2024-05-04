import "./Create.css";
import React, { useState } from "react";
import LoveL from "./inputFolder/LoveI";
import MidleL from "./inputFolder/MidleL";
import BigL from "./inputFolder/BigL";
import CreateLine from "./CreateLine";
import RendBtn from "./createBtn/RendButon";
export default function Creates() {
  const [stateName, setNameState] = useState("name");
  const [stateNames, setNameStates] = useState();
  const [submittedName, setSubmittedName] = useState();
  const [submittedNames, setSubmittedNames] = useState();
  const [activeIndex , setActiveIndex] = useState(false);
    function handleLine(index){
        setActiveIndex(index)
    }
  function handleName(event) {
    setNameState(event.target.value);
  }

  function handleNames(event) {
    setNameStates(event.target.value);
  }

  function handleSubmit() {
    setSubmittedName(stateName);
    setSubmittedNames(stateNames);
  }



  return (
    <section className="sectionCreate">
      <div className="CreateBLOX">
        <div className="createRightSection">
          {/* Передаємо функцію handleLine у проп onClick для CreateLine */}
            <CreateLine index={1} click={handleLine} isActive={activeIndex === 1}/>
          <div className="inputName">
           <div className="rentBtnDiv">
            <RendBtn className={"rentBtn"} names={"looking for rent"}></RendBtn>
            <RendBtn className={"landBtn"} names={"landlord"}></RendBtn>
            </div> 
            <BigL/>
            <BigL/> 
            <MidleL/>
            <input type="text" className="fat" />
            <BigL/>
            <BigL/>
            <LoveL/>
            <MidleL/>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="createRightSection">
        <CreateLine index={2} click={handleLine} isActive={activeIndex === 2}/>
          <p>name : {submittedName}</p>
          <p>number : {submittedNames}</p>
        </div>
      </div>
    </section>
  );
}
