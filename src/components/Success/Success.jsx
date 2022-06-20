// Import `useHistory` to handle automatic navigation to the next page
import { useHistory } from "react-router-dom"


// Function that shows a successful POST has been made.
export default function Success() {

    // Initialize the history function
    const history = useHistory()
    
    // Function to return the user to the home page
    const onClickReturnHome = () => {
        history.push("/")
    }

    return (
        <div>
            <p>Success!</p>
            <button onClick={onClickReturnHome}>Return Home</button>
        </div>
    )
}