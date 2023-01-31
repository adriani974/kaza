import '../../styles/banniere.scss';
import logo from '../../assets/acceuil.png';

function Banniere() {
  return (
      <div className='Banniere-acceuil'>
        <p className='Banniere-acceuil-text'>Chez vous, partout et ailleurs</p>
        <img className='Banniere-acceuil-logo' src={ logo } alt="représentant une falaise verdoyant prés de la mer"/>
      </div>
  );
}

export default Banniere;