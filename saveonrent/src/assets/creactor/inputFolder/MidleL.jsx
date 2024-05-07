export default function MidleL ({val , change1 ,change2 , def1 ,def2}){
    return<div className = "setMidle" ><input type="text" value={val} onChange={change1} defaultValue={def1} className = "MidleL" />
    <input type="text" value={val} onChange={change2} defaultValue={def2} className = "MidleL" /></div>
}