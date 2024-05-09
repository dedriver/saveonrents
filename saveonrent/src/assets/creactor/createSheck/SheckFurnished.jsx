import "./Sheck.css"

export default function SheckFurnished({name , chil , onChange  ,checked}){
    return ( <div className="checkbox"><input type="checkbox" onChange={onChange} checked={checked} name={name} className="rasr"/><p className="shecktext">{chil}</p></div>);
}