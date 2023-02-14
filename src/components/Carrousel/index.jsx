import '../../styles/Carrousel.scss';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';
//import image from '../../assets/illustration_grande.png';
import { useState, useEffect } from 'react';


function Carrousel(props) {
  var [imagesList, setImagesList] = useState([]);
  //var [imageCurrent, setImageCurrent] = useState("");
  var [imageCount, setImageCount] = useState(0);
  var [imageCurrentNumber, setimageCurrentNumber] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    setImagesList(props.lists);
    setImageCount(imagesList.length);
    if(imageCount <= 1){
      console.log("taille imageslist -> "+imageCount);
      setimageCurrentNumber(1);
      
    }else{
      console.log("taille imageslist -> "+imageCount);
      setimageCurrentNumber(1);
      setOpen(true);
    }
  },[imageCount, imagesList.length, props.lists])

  
  const carrousel = (choice) =>{
    
    if(choice === 1){
      
      if(imageCurrentNumber === 1){
        setimageCurrentNumber(imageCount);
  
      }else{
        setimageCurrentNumber(imageCurrentNumber-1);
        
      }
      
      console.log("choice -> "+choice);
      console.log("imageCurrentNumber -> "+imageCurrentNumber);
    }else if(choice === 2){
      
      if(imageCurrentNumber === imageCount){
        setimageCurrentNumber(1);
      }else{
        setimageCurrentNumber(imageCurrentNumber+1);
      }
      
      console.log("choice -> "+choice);
      console.log("imageCurrentNumber -> "+imageCurrentNumber);
    }
  }

  return (
      <div className='Carrousel'>
        {open && (
        <div className='Carrousel-container'>
          <img className='Carrousel-left-arrow' src={ Arrow } alt="fleche de gauche de la carrousel" onClick={ ()=> carrousel(1)}/>
          <p className='Carrousel-count'>{imageCurrentNumber+' / '+imageCount}</p>
          <img className='Carrousel-right-arrow' src={ Arrow } alt="fleche de droite de la carrousel " onClick={()=> carrousel(2)}/>
        </div>)}
        <img className='Carrousel-image' src={ imagesList[imageCurrentNumber-1]  } alt="description "/> 
      </div>
  );
}

export default Carrousel;