import '../../styles/Carrousel.scss';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';
import { useState, useEffect } from 'react';

/**
 * Affiche une ou plusieurs images du logement à louer.
 * @param {*} props.lists liste d'image à afficher. 
 * @returns un ou plusieurs div.
 */
function Carrousel(props) {
  var [imagesList, setImagesList] = useState([]);
  var [imageCount, setImageCount] = useState(0);
  var [imageCurrentNumber, setimageCurrentNumber] = useState(0);
  const [visibility, setVisibility] = useState(false);//Les flèches précedent et suivant sont invisible.

  useEffect(()=>{
    setImagesList(props.lists);
    setImageCount(imagesList.length);
    if(imageCount <= 1){
      setimageCurrentNumber(1);
      
    }else{//Les flèches précedent et suivant sont visible.
      setimageCurrentNumber(1);
      setVisibility(true);
    }
  },[imageCount, imagesList.length, props.lists])

  //Affiche l'image suivante ou précedente de la carrousel selon l'action de l'utilisateur.
  const carrousel = (choice) =>{ 
    if(choice === 1){//on affiche l'image précedent
      
      if(imageCurrentNumber === 1){
        setimageCurrentNumber(imageCount);
      }else{
        setimageCurrentNumber(imageCurrentNumber-1);
      }
      
    }else if(choice === 2){//on affiche l'image suivant
      
      if(imageCurrentNumber === imageCount){
        setimageCurrentNumber(1);
      }else{
        setimageCurrentNumber(imageCurrentNumber+1);
      }
    }
  }

  return (
      <div className='Carrousel'>
        {visibility && (
        <div className='Carrousel-container'>
          <img className='Carrousel-left-arrow' src={ Arrow } alt="fleche de gauche de la carrousel permet de revenir à l'illustration précedente" onClick={ ()=> carrousel(1)}/>
          <p className='Carrousel-count'>{imageCurrentNumber+' / '+imageCount}</p>
          <img className='Carrousel-right-arrow' src={ Arrow } alt="fleche de droite de la carrousel permet de passé à l'illustration suivante " onClick={()=> carrousel(2)}/>
        </div>)}
        <img className='Carrousel-image' src={ imagesList[imageCurrentNumber-1]  } alt="description "/> 
      </div>
  );
}

export default Carrousel;