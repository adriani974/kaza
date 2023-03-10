import '../styles/Error.scss';
import { Link } from 'react-router-dom';
const texte = "Oups ! la page que \n vous demandez n'existe pas.";

/**
 * Affiche une page d'erreur 404.
 * @returns un ou plusieurs div.
 */
function Error() {
    return (
        <div className='Error'>
            <div className='Error-div-text-404'>
                <h1 className='Error-text-404'>404</h1>
            </div>
            <h2 className='Error-text-existe-pas'>{texte}</h2>
            <Link className='Error-text-retour-accueil' to="/">Retounez sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error