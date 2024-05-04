import "./Create.css";
import React, { useState } from "react";
import LoveL from "./inputFolder/LoveI";
import MidleL from "./inputFolder/MidleL";
import BigL from "./inputFolder/BigL";
import CreateLine from "./CreateLine";
import RendBtn from "./createBtn/RendButon"
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
             <RendBtn className={"RendBtn"} names={"looking for rent"}></RendBtn>
            <RendBtn className={"RendBtn"} names={"landlord"}></RendBtn> 
            </div> 
            <BigL/>
            <BigL def={"NAME"}/> 
            <MidleL def1={"job"} def2={"Age"}/>
            <input type="text" className="fat" defaultValue={"Additional Info"}/>
            <BigL def={"Desired areas (max 3)"}/>
            <BigL def={"City"}/>
            <LoveL def1={"Budget Min"} def2={"Budget Max"} />
            <MidleL def1 = {"Bedrooms"} def2={"Bathrooms"}/>
            <p>
</p>
            <button className="SubmitBTN" onClick={handleSubmit}>Submit</button>
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
