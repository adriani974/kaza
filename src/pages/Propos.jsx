//import { useParams } from "react-router-dom";
import '../styles/Propos.scss';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import Stars from '../components/Stars-rank';
import Tags from '../components/Tags';
var data = require('../datas/information.json');
const number = 2;
const message = " ";
const alt = "représentant un paysage de montagne rocheux et verdoyant";

const listItems = data.map((info) =>
<Dropdown key={info.id} title={info.title} text={info.description}/>
);
const rate = 4;
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

const test = [
    "Forêt",
    "Nature",
    "Grande maison"
]

function Propos() {
    //const { questionNumber } = useParams(); <h2>Question n° { questionNumber }</h2>
    return (
        <div className='Propos'>
            <Banner choice={number} description={alt} text={message}/>
            <div className='Propos-information'>
                {listItems}
            </div>
            {star_rank(rate)}
            <Tags list={test}/>
        </div>
    )
}

export default Propos;