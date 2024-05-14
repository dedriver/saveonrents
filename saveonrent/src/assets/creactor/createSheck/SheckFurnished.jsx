import "./Sheck.css"

export default function SheckFurnished({name , chil,inputNames , onChange ,checked}){
    return ( <div className="checkbox"><input className={inputNames} type="checkbox" onChange={onChange} checked={checked} name={name} /><p className="shecktext">{chil}</p></div>);
}