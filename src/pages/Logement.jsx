import { useParams } from "react-router-dom";

function Logement() {
    const { questionNumber } = useParams()
    return (
        <div>
            <h1>Questionnaire logement 🧮</h1>
            <h2>Question n° { questionNumber }</h2>
        </div>
    )
}

export default Logement