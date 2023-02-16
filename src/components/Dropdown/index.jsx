import '../../styles/Dropdown.scss';
import logo from '../../assets/arrow_back_ios-24px 2.png';
import { useState } from "react";

/**
 * Un composant déroulant contenant du texte.
 * @param {*} props.title Nom du composant déroulant. 
 * @param {*} props.text Texte contenue par le composant déroulant. 
 * @returns 
 */
function Dropdown(props) {
    const [open, setOpen] = useState(false);
    const dropdown = () =>{
        setOpen(!open);
    }
    
    return (
        <div className='Dropdown' > 
            <div className='Dropdown-container'>
                <p className='Dropdown-label'>{ props.title }</p>  
                <img className='Dropdown-icon' src={ logo } alt="icon pour un dropdown" style={{transform: open ? 'rotate(180deg)' : ''}} onClick={dropdown}/> 
            </div>
            {open && (<div className='Dropdown-container-text'><p className='Dropdown-text'>{ props.text }</p></div>)}
           
            
        </div>  
    )
}

export default Dropdown