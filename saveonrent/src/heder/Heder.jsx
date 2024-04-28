import './Heder.css';
import hederLogo from '../assets/hederLogo.png';
import { useState } from 'react';
import LinkItem from './LinkItem.jsx';
import { hederLiksName } from '../data.js';
export default function Header() {
    const [newColor , setNewColor] = useState(null);

    function hendleClickNewColor(id) {
        if (newColor === id) {
            setNewColor(null);
        } else {
            setNewColor(id);
        }
    }

    return(
    
            <section className="sectionHeder">
                <div className="logo"> <img src={hederLogo} alt="hederlogo"/></div>
                <div className="HederLinks">
                    <ul>
                        {hederLiksName.map((item, index) => (
                            <LinkItem
                                key={index}
                                child={item.name}
                                name={newColor  === index ? "grenLinks" : "HederA"}
                                click={() => hendleClickNewColor(index)}
                            />
                        ))}
                    </ul>
                </div>
            </section>
     
    );
}
