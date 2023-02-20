import '../../styles/Tags.scss';
const tag = (list) => {
    const autre = list.map((tag, index)=>
    <p key={index} className='Tags-text'>{tag}</p>
);
  return autre;
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