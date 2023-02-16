import '../../styles/Card.scss';
import { Link } from 'react-router-dom';

/**
 * Affiche une carte avec l'image et le nom du logement.
 * @param { * } props.link  L'identifiant du logement.
 * @param { * } props.cover L'image du logement.
 * @param { * } props.title Le nom du logement.
 * @returns 
 */
function Card(props) {
    return (
        <Link className='Card' to={'logement/'+props.link} > 
            <div className='Card-img'> 
                <img src={props.cover} alt='représente le logement à louer' className='Card-img-size'/>
                <p className='Card-text'>{props.title}</p>
            </div>
        </Link>  
    )
}

export default Card