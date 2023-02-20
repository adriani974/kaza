import '../styles/Home.scss';
import Banner from '../components/Banner';
import Card from '../components/Card';

var data = require('../datas/logements.json');
const number = 1;
const message = "Chez vous, \n partout et ailleurs";
const alt = "représentant une falaise verdoyant prés de la mer";

//Je récupèrent les données issuent de data afin de les transmettres en tant que paramétre au composant card.
const listItems = data.map((card) =>
<Card key={card.id} title={card.title} link={card.id} cover={card.cover}/>
);

/**
 * Affiche la page d'acceuil.
 * @returns un ou plusieurs div.
 */
function Home() {
  return (
    <div className="Home">
      <Banner choice={number} description={alt} text={message}/>
      <div className='Home-gallery'>    
        {listItems}
      </div> 
    </div>
  );
}

export default Home;
