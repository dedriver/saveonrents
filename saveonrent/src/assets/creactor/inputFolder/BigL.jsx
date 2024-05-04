export default function BigL({val , change , def, id}){
    return<input type="text" value={val} onChange={change} defaultValue={def} className = "BigL" id={id}/>
}