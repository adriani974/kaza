import '../../styles/banner.scss';
import img_propos from '../../assets/propos.png';
import img_acceuil from '../../assets/acceuil.png';
var image = null;

function Banner(props) {
  if(props.choice === 1){
    image = img_acceuil;
  }else{
    image = img_propos;
  }
  return (
      <div className='Banner'>
        <p className='Banner-text'>{props.text}</p>
        <img className='Banner-logo' src={ image } alt={props.description}/>
      </div>
  );
}

export default Banner;