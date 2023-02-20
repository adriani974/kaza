import '../../styles/Banner.scss';
import img_propos from '../../assets/propos2.png';
import img_acceuil from '../../assets/acceuil.png';
var image = null;
var nameBanner = null;

/**
 * Affiche une image diffèrente et un texte selon si l'on se trouve sur la page d'acceuil ou sur la page de propos.
 * @param {*} props.choice permet de choisir l'image à afficher. 
 * @param {*} props.text affiche un texte sur l'image. 
 * @param {*} props.description donne une description de l'image. 
 * @returns un ou plusieurs div.
 */
function Banner(props) {
  if(props.choice === 1){
    image = img_acceuil;
    nameBanner = 'Banner';
  }else{
    image = img_propos;
    nameBanner = 'Banner-propos';
  }

  return (
      <div className={nameBanner}>
        <p className='Banner-text'>{props.text}</p>
        <img className='Banner-logo' src={ image } alt={props.description}/>
      </div>
  );
}

export default Banner;