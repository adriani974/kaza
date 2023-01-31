import '../../styles/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-kaza-1.png';
//import styled from 'styled-components'

/*
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
`*/

function Header() {
    return (
        <div className='Header'>  
            <img className='Header-logo' src={ logo } alt="Logo Kaza"/>
            
            <nav className='Header-nav'>
                <Link className='Header-nav-acceuil' to="/">Accueil</Link>
                <Link className='Header-nav-propos' to="/propos/42">A propos</Link>
            </nav>
        </div>
        
    )
}

export default Header