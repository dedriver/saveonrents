import  flagmanMainfone from '../assets/flagmanMainfone.png'
import './Flagman.css'
export default function Flagman(){
    return<section className="flagmanSection">
        <div className="flagmanText">
            <div className="flagmanTextMain">
                <p>ABOUT OUR  <span className='yelow'>COMPANY </span><br/>SAY HELLO AND TELL<br/> A SHORT <span className='pink'> STORY ABOUT</span><br/> THE COMPANY</p>
            </div>
            <div className="flagmanTextSecond">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>  consequat. </p>
            </div>
        </div>
        <div className="flagmanImg">
            <img src={flagmanMainfone} alt="flagmanMainfone" />
        </div>
    </section>
}