import '../../styles/Carrousel.scss';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';
import image from '../../assets/illustration_grande.png';

function Carrousel(props) {
  
  return (
      <div className='Carrousel'>
        <div className='Carrousel-container'>
          <img className='Carrousel-left-arrow' src={ Arrow } alt="description "/>
          <img className='Carrousel-right-arrow' src={ Arrow } alt="description "/>
        </div>
        <img className='Carrousel-image' src={ image } alt="description "/> 
      </div>
  );
}

export default Carrousel;