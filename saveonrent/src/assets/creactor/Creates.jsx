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
  const [submittedArea , setsubmittedStateArea] = useState("Area");
  const [stateArea , setStateArea] = useState();
  const [stateCitu , setStateCitu] = useState();
  const [submittedCitu , setsubmittedCitu] = useState("luboml");
  const [stateBudgetMin , setBudgetMin ] = useState();
  const [submittedBudgetMin , setSubmitteBudgetMin ] = useState("0000");
  const [stateBudgetMax , setBudgetMax] = useState();
  const [submittedBudgetMax , setSubmittedBudgetMax] = useState("0000" );
  const [stateRentalTerm ,setRentalTerm] =useState();
  const [submittedRentalTerm ,setSubmittedRentalTerm] =useState ();
  const [submittedPhone ,setSubmittedPhone] =useState();
  const [statePhone ,setPhone] =useState();
  const [stateGmail ,setGmail] =useState();
  const [submittedGmail ,setSubmittedGmail] =useState();

  function handlePhone(event){
      setPhone(event.target.value)
  }
  
  function handleGmail(event){
    setGmail(event.target.value)
  }
  
  function handleBudgetMax(event){
    setBudgetMax(event.target.value)
  }
  function handleBudgetMin(event){
    setBudgetMin(event.target.value)
  }

  function handleArea(event){
    setStateArea(event.target.value)
  }
  function handleCity(event){
    setStateCitu(event.target.value)
  }
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
    setsubmittedStateArea(stateArea);
    setsubmittedCitu(stateCitu);
    setSubmittedBudgetMax(stateBudgetMax);
    setSubmitteBudgetMin(stateBudgetMin);
    setSubmittedPhone(statePhone);
    setSubmittedGmail(stateGmail);
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
            <BigL def={"Desired areas (max 3)"} change={handleArea} />
            <BigL def={"City"} change={handleCity} />
            <LoveL def1={"Budget Min"} change1={handleBudgetMax} change2={handleBudgetMin} def2={"Budget Max"} />
            <MidleL def1={"Bedrooms"}  def2={"Bathrooms"} />
            <div class="parent">
              <SheckFurnished
              inputNames={"orangs"}
                chil={"Furnished"}
                checked={stateChange.state1}
                name={"state1"}
                onChange={handleClick}
              />
              <SheckFurnished
              inputNames={"yelows"}
                chil={"Pet Friendly"}
                checked={stateChange.state2}
                name={"state2"}
                onChange={handleClick}
              />
              <SheckFurnished
               inputNames={"hards"}
                chil={"Public Transportation"}
                checked={stateChange.state3}
                name={"state3"}
                onChange={handleClick}
              />
              <SheckFurnished
                inputNames={"grens"}
                chil={"Parking"}
                checked={stateChange.state4}
                name={"state4"}
                onChange={handleClick}
              />
              <SheckFurnished
                chil={"Washer dryer"}
                checked={stateChange.state5}
                name={"state5"}
                onChange={handleClick}
                inputNames={"pinks"}
              />
              <SheckFurnished
  inputNames={"blus"}
  chil={"Gym"}
  checked={stateChange.state6}
  name={"state6"}s
  onChange={handleClick}
/>
            </div>
            <BigL change={handlePhone} def={"phone"}/>
            <BigL change={handleGmail} def={"gmail"}/>
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
            <div className="aboytmytext"> {submittedAboutMYself} </div>
            <div className="Area-budget">
            <div className="Area">
            <p className="areaName">Area :</p>
            <p className="areaText">{submittedArea}</p>
            </div> 
            <div className="budget">
            <p className="areaName">Budget :</p>
            <p className="areaText">{submittedBudgetMax}+{submittedBudgetMin}</p>
            </div>
            </div> 

            <div className="Citu ">
            <p className="CituName">Citu :</p>
            <p className="CituText">{submittedCitu}</p>
            </div> 
            <div className="ChangeItem">
              {stateChange.state1 ? (
                <Change
                  colors={{ backgroundColor: "#FF8A00" }}
                  name={"furnished"}
                />
              ) : undefined}
              {stateChange.state2 ? (
                <Change
                  colors={{ backgroundColor: " #FDB932" }}
                  name={"Pet Friendly"}
                />
              ) : undefined}
              {stateChange.state3 ? (
                <Change
                  colors={{ backgroundColor: " #FF5F01" }}
                  name={"public transportation"}
                />
              ) : undefined}
              {stateChange.state4 ? (
                <Change
                  colors={{ backgroundColor: " #01A358" }}
                  name={"parking"}
                />
              ) : undefined}
              {stateChange.state5 ? (
                <Change
                  colors={{ backgroundColor: "#FE99C4" }}
                  name={"washer dryer"}
                />
              ) : undefined}
              {stateChange.state6 ? (
                <Change colors={{ backgroundColor: "#006DBA" }} name={"gym"} />
              ) : undefined}
            </div>
            <div className="phones_mail_madeWith">
                <div className="madeWith">
                <div className="madeLine"></div>
                  <div className="madeText">
                      <div className="With">MADE WITH</div>
                      <div className="save">SAVEONRENT.ORG</div>
                  </div>
                </div>
                <div className="mailPhone">
                  <div className="phone">email:{submittedPhone}</div>
                  <div className="mail">phone:{submittedGmail}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
