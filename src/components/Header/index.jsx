import '../../styles/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-kaza-1.png';

/**
 * 
 * Composant correspondant au header du site, contenant la navigation.
 * @returns 
 */
function Header() {
    return (
        <div className='Header'>  
            <img className='Header-logo' src={ logo } alt="Logo Kaza"/>
            
            <nav className='Header-nav'>
                <Link className='Header-nav-acceuil' to="/">Accueil</Link>
                <Link className='Header-nav-propos' to="/propos">A propos</Link>
            </nav>
        </div>
        
    )
}

export default Header;