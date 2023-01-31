import '../../styles/Footer.scss';
import logo from '../../assets/logo-kaza-2.png';

function Footer() {
    return (
        <div className='Footer'>  
            <img className='Footer-logo' src={ logo } alt="Logo Kaza"/>  
            <p className='Footer-text'> © 2020 Kasa. All rights reserved </p>
        </div>
        
    )
}

export default Footer