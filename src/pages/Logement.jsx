//import { useParams } from "react-router-dom";
import '../styles/Logement.scss';
import Carrousel from "../components/Carrousel";


function Logement() {
    //const { id } = useParams()
    return (
        <div className="Logement">
            <Carrousel/>
            <div className="Logement-container">

            </div>
        </div>
    )
}

export default Logement