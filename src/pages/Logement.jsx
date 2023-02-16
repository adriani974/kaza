import { useParams, useNavigate } from "react-router-dom";
import '../styles/Logement.scss';
import Carrousel from "../components/Carrousel";
import { useState, useEffect } from 'react';
import Stars from "../components/Stars-rank";
import Tags from '../components/Tags';
import Dropdown from '../components/Dropdown'
const logements = require('../datas/logements.json');



const star_rank = (key) => {
    switch (key) {
        case 0:
            return <Stars one= {false} two= {false} three= {false} four= {false} five= {false} />

        case 1:
            return <Stars one= {true} two= {false} three= {false} four= {false} five= {false} />

        case 2:
            return <Stars one= {true} two= {true} three= {false} four= {false} five= {false} />

        case 3:
            return <Stars one= {true} two= {true} three= {true} four= {false} five= {false} />

        case 4:
            return <Stars one= {true} two= {true} three= {true} four= {true} five= {false} />

        case 5:
            return <Stars one= {true} two= {true} three= {true} four= {true} five= {true} />
    
        default:
            break;
    }
}

function Logement() {
    const { id } = useParams();
    const [cardId, setCardId] = useState("");
    var [title, setTitle] = useState("titre");
    var [location, setLocation] = useState("location");
    var [tagsList, settagsList] = useState([]);
    var [stars, setStars] = useState(0);
    var [firstName, setFirstName] = useState("nom");
    var [lastName, setLastName] = useState("prenom");
    var [refUrl, setRefUrl] = useState("../assets/host.png");
    var [description, setDescription] = useState("descriptions");
    var [equipements, setEquipements] = useState("equipements");
    var [picturesList, setPicturesList] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        setCardId(id);
    
        const logement = logements.filter(
            function(data){ return data.id === id }
        );

        if(logement[0]){
            setTitle(logement[0].title);
            setLocation(logement[0].location);
            settagsList(logement[0].tags);
            setStars(Number(logement[0].rating));
            const name_separate = logement[0].host.name.split(' ');
            setFirstName(name_separate[0]);
            setLastName(name_separate[1]);
            setRefUrl(logement[0].host.picture);
            setDescription(logement[0].description);
            var equipement_texte = "";
            
            logement[0].equipments.forEach(element => {
                equipement_texte = equipement_texte + element + ' \n ' ;
            });
            setEquipements(equipement_texte);
            setPicturesList(logement[0].pictures)
           
        }else{
            navigate('/error');  
        }
        
    }, [id, cardId, navigate]);
   
    return (
        <div className="Logement">
            <Carrousel lists={picturesList}/>
            <div className="Logement-container">
                <div className="Logement-up-part">
                    <div className="Logement-left-part">
                        <h1 className="Logement-left-part-title">{title}</h1>
                        <p className="Logement-left-part-location">{location}</p>
                        <Tags list={tagsList}/>
                    </div>

                    <div className="Logement-right-part">    
                        <div className="Logement-right-part-profile">
                            <div className="Logement-right-part-profile-fullName">
                                <p className="Logement-right-part-profile-txt">{firstName}</p>
                                <p className="Logement-right-part-profile-txt">{lastName}</p>
                            </div>
                            <img className="Logement-right-part-profile-img" src={refUrl} alt="la personne qui loue l'appartement"/>
                        </div>
                        {star_rank(stars)}
                    </div>
                </div>
                
                <div className="Logement-down-part">
                    <div className="Logement-down-part-description">
                            <Dropdown key={0} title={"Description"} text={description}/>
                        </div>
                    <div className="Logement-down-part-equipement">
                        <Dropdown  key={0} title={"Equipements"} text={equipements}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logement