
export default function LinkItem({name , click , child , }){
    return (<li><a className={name} onClick={click} href="#"><p>{child}</p></a></li>);
}