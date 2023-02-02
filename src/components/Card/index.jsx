import '../../styles/Card.scss';

function Card(props) {
    return (
        <a className='Card' href={'logement/'+props.link} > 
            <div className='Card-img'> 
                <p className='Card-text'>{props.title}</p>
            </div>
        </a>  
    )
}

export default Card