// Import `useState` to track the input field
import { useState } from "react"

// Import `useDispatch` to send the information to REDUX
import { useDispatch } from "react-redux"

// Import `useHistory` to handle automatic navigation to the next page
import { useHistory } from "react-router-dom"


// Function that handles the user input of their feelings
export default function Feeling() {

    // Track the input in STATE
    const [feelingInput, setFeelingInput] = useState("")
    const [isComplete, setIsComplete] = useState(false)

    // Set the `dispatch` method
    const dispatch = useDispatch()
    // Set the `history` method
    const history = useHistory()

    // Function that checks if input is entered and is valid
    const checkValidInput = (value) => {
        setIsComplete(
            value !== null &&
            value.trim() &&
            Number(value) >= 0 &&
            Number(value) <= 10
        )
    }

    // On submission, store the current input value to the REDUX store.
    // All submissions will be contained within a singular REDUX object.
    const onSubmitFeeling = () => {

        // Dipatch the local state value to be stored within REDUX
        dispatch({
            // Set the action call to be processed with REDUX
            type: "SET_FEEDBACK",
            // Pass the payload with the specific key name.
            // Key name matches the REDUX store value in the object.
            payload: {
                field: 'feeling',
                value: Number(feelingInput)
            },
        })

        history.push("/understanding")
    }

    // Handles the display of the form to the DOM
    return (
        <section>
            
            <h2>How are you feeling today?</h2>

            <form onSubmit={onSubmitFeeling}>
                <input
                    type="text"
                    placeholder="0 - 10"
                    value={feelingInput}
                    onChange={e => {
                        setFeelingInput(e.target.value)
                        checkValidInput(e.target.value)
                    }}
                    autoFocus
                />
                {isComplete ?
                    <button type="submit">Next</button>
                    :
                    <button type="submit" disabled>Fix Response</button>
                }
            </form>

        </section>
    )
}