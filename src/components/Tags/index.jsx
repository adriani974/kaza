import '../../styles/Tags.scss';
const tag = (list) => {
    const autre = list.map((tag, index)=>
    <p key={index} className='Tags-text'>{tag}</p>
);
  return autre;
}


function Tags(props) {
    return (
        <div className='Tags'>  
            {tag(props.list)}
        </div>
        
    )
}

export default Tags