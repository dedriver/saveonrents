export default function MidleL ({val , change , def}){
    return<div className = "setMidle" ><input type="text" value={val} onChange={change} defaultValue={def} className = "MidleL" />
    <input type="text" value={val} onChange={change} defaultValue={def} className = "MidleL" /></div>
}