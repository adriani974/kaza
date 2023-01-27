import { useParams } from "react-router-dom";

function Second() {
    const { questionNumber } = useParams()
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question n° { questionNumber }</h2>
        </div>
    )
}

export default Second