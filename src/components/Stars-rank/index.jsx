import '../../styles/Stars-rank.scss';
import star_empty from "../../assets/star_rate-24px 2.svg";
import star_full from "../../assets/star_rate-24px 5.svg";


var reference = (state) =>{
    if(state){
        return star_full;
    }else{
        return star_empty; 
    }
}
/**
 * Représente une notation sur cuinq sous forme d'étoile.
 * @param {*} props.one la première étoile peut être afficher par true sinon ne s'affiche pas avec false. 
 * @param {*} props.two la deuxième étoile peut être afficher par true sinon ne s'affiche pas avec false. 
 * @param {*} props.three la troisième étoile peut être afficher par true sinon ne s'affiche pas avec false. 
 * @param {*} props.four la quatrième étoile peut être afficher par true sinon ne s'affiche pas avec false. 
 * @param {*} props.five la cuinqième étoile peut être afficher par true sinon ne s'affiche pas avec false. 
 * @returns un ou plusieurs div. 
 */
function Stars_rank(props) {
   
    return (
        <div className='Stars-rank'>   
            <img src={reference(props.one)} alt="premier étoile" className='Stars-one'/>
            <img src={reference(props.two)} alt="deuxième étoile" className='Stars-two'/>
            <img src={reference(props.three)} alt="troisième étoile" className='Stars-three'/>
            <img src={reference(props.four)} alt="quatrième étoile" className='Stars-four'/>          
            <img src={reference(props.five)} alt="cuinquième étoile"  className='Stars-five'/>  
        </div>  
    )
}

export default Stars_rank