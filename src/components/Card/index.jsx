import '../../styles/Card.scss';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <Link className='Card' to={'logement/'+props.link} > 
            <div className='Card-img'> 
                <p className='Card-text'>{props.title}</p>
            </div>
        </Link>  
    )
}
<Link className='Header-nav-propos' to="/propos">A propos</Link>
export default Card