import '../../styles/Tags.scss';

// Retourne un tag à partir du paramétre list.
const tag = (list) => {
    const oneTag = list.map((tag, index)=>
    <p key={index} className='Tags-text'>{tag}</p>
);
  return oneTag;
}

/**
 * Affiche une liste de tags.
 * @param {*} props.list liste de tags à afficher. 
 * @returns un ou plusieurs div.
 */
function Tags(props) {
    return (
        <div className='Tags'>  
            {tag(props.list)}
        </div>   
    )
}

export default Tags