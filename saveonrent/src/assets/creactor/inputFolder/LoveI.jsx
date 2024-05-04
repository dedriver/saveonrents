export default function LoveL({val , change, def1 , def2 }){
    return<div className="setLOve">
<input type="text" value={val} onChange={change} defaultValue={def1} className = "LoveL" />
<input type="text" value={val} onChange={change} defaultValue={def2} className = "LoveL" />
<select  className = "LoveL" name="unittype">
  <option value="1"> Miner </option>
  <option value="2"> Puffer </option>
  <option value="3" selected> Snipey </option>
  <option value="4"> Max </option>
  <option value="5"> Firebot </option>
 </select>
        </div>
}