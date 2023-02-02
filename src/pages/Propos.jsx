//import { useParams } from "react-router-dom";
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
const number = 2;
const message = " ";
const alt = "représentant un paysage de montagne rocheux et verdoyant";

function Propos() {
    //const { questionNumber } = useParams(); <h2>Question n° { questionNumber }</h2>
    return (
        <div>
            <Banner choice={number} description={alt} text={message}/>
            <Dropdown title={"Equipements"} text={"ceci est mon texte"}/>
            <Dropdown title={"a propos"} text={"cela n'est pas normal"}/>
        </div>
    )
}

export default Propos;