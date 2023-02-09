import '../styles/Propos.scss';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
var data = require('../datas/information.json');
const number = 2;
const message = " ";
const alt = "représentant un paysage de montagne rocheux et verdoyant";

const listItems = data.map((info) =>
<Dropdown key={info.id} title={info.title} text={info.description}/>
);

function Propos() {
    return (
        <div className='Propos'>
            <Banner choice={number} description={alt} text={message}/>
            <div className='Propos-information'>
                {listItems}
            </div>
        </div>
    )
}

export default Propos;