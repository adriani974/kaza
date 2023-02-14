import '../../styles/Card.scss';
import { Link } from 'react-router-dom';

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
<Link className='Header-nav-propos' to="/propos">A propos</Link>
export default Card