export default function MidleL ({val , change , def1 ,def2}){
    return<div className = "setMidle" ><input type="text" value={val} onChange={change} defaultValue={def1} className = "MidleL" />
    <input type="text" value={val} onChange={change} defaultValue={def2} className = "MidleL" /></div>
}