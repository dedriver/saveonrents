import "./Create.css";
import React, { useState } from "react";
import LoveL from "./inputFolder/LoveI";
import MidleL from "./inputFolder/MidleL";
import BigL from "./inputFolder/BigL";
import CreateLine from "./CreateLine";
import RendBtn from "./createBtn/RendButon";
import SheckFurnished from "./createSheck/SheckFurnished";
import Change from "./changeItem/Change";
export default function Creates() {
  const [stateName, setNameState] = useState("");
  const [stateJob, setNameJob] = useState();
  const [stateAge, setNameAge] = useState();
  const [stateAboutMYself, setAboutMYself] = useState();
  const [submittedName, setSubmittedName] = useState("Ashley zoe camille");
  const [submittedJob, setSubmittedJob] = useState("Smm manager");
  const [submittedAge, setSubmittedAge] = useState("23");
  const [submittedAboutMYself, setSubmittedAboutMYself] = useState();
  const [activeIndex, setActiveIndex] = useState(false);
  const [stateChange, setStateChange] = useState({ state1: false });

  function handleClick(event) {
    const { name, checked } = event.target;
    setStateChange((prevState) => ({ ...prevState, [name]: checked }));
  }
  function handleLine(index) {
    setActiveIndex(index);
  }
  function handleName(event) {
    setNameState(event.target.value);
  }

  function handleAboutMYself(event) {
    setAboutMYself(event.target.value);
  }

  function handleAge(event) {
    setNameAge(event.target.value);
  }

  function handleJob(event) {
    setNameJob(event.target.value);
  }

  function handleSubmit() {
    setSubmittedName(stateName);
    setSubmittedJob(stateJob);
    setSubmittedAge(stateAge);
    setSubmittedAboutMYself(stateAboutMYself);
  }

  return (
    <section className="sectionCreate">
      <div className="CreateBLOX">
        <div className="createRightSection">
          {/* Передаємо функцію handleLine у проп onClick для CreateLine */}
          <CreateLine
            index={1}
            click={handleLine}
            isActive={activeIndex === 1}
          />
          <div className="inputName">
            <div className="rentBtnDiv">
              <RendBtn
                className={"RendBtn"}
                names={"looking for rent"}
              ></RendBtn>
              <RendBtn className={"RendBtn"} names={"landlord"}></RendBtn>
            </div>
            <BigL />
            <BigL def={"NAME"} change={handleName} />
            <MidleL
              def1={"job"}
              change1={handleJob}
              change2={handleAge}
              def2={"Age"}
            />
            <input
              type="text"
              className="fat"
              onChange={handleAboutMYself}
              defaultValue={"Additional Info"}
            />
            <BigL def={"Desired areas (max 3)"} />
            <BigL def={"City"} />
            <LoveL def1={"Budget Min"} def2={"Budget Max"} />
            <MidleL def1={"Bedrooms"} def2={"Bathrooms"} />
            <div class="parent">
                <SheckFurnished chil={"Furnished"} checked={stateChange.state1} name={"state1"} onChange={handleClick}/>
                <SheckFurnished chil={"Pet Friendly"} checked={stateChange.state2} name={"state2"} onChange={handleClick}/> 
                <SheckFurnished chil={"Public Transportation"} checked={stateChange.state3} name={"state3"} onChange={handleClick}/>
                <SheckFurnished chil={"Parking"} checked={stateChange.state4} name={"state4"} onChange={handleClick}/>
                <SheckFurnished chil={"Washer dryer"} checked={stateChange.state5} name={"state5"} onChange={handleClick}/>
                <SheckFurnished chil  ={"Gym"} checked={stateChange.state6} name={"state6"} onChange={handleClick} />
            </div>
            <button className="SubmitBTN" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="createLeftSection">
          <CreateLine
            index={2}
            click={handleLine}
            isActive={activeIndex === 2}
          />
          <div className="LeftSection">
            <div className="NameJobAge">
              <div className="ava">{/* <img src="" alt="" />*/}</div>
              <div className="pib">
                <p className="namesPart">{submittedName}</p>
                <p className="jobPart">
                  job: <span>{submittedJob}</span>
                </p>
                <p className="agePart">ahe : {submittedAge}</p>
              </div>
            </div>
            <div className="loking">
              looking for an apartment
              <br />
              for rent in los angeles
            </div>
            <div className="aboutmy">about myself:</div>
            <div className="aboytmytext"></div>
            {submittedAboutMYself}
            {stateChange.state1 ?  <Change/> : undefined}
            {stateChange.state2 ?  <Change/> : undefined}
            {stateChange.state3 ?  <Change/> : undefined}
            {stateChange.state4 ?  <Change/> : undefined}
            {stateChange.state5 ?  <Change/> : undefined}
            {stateChange.state6 ?  <Change/> : undefined}
          </div>
        </div>
      </div>
    </section>
  );
}
