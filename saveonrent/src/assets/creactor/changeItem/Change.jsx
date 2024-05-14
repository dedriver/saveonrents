import './change.css'

export default function Change({name , colors}){
    return(
        <div className="changeBox" style={colors}><p className='changeText' >{name}</p></div>
    );
}