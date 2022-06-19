// Import `useState` to track the input field
import { useState } from "react"

// Import `useDispatch` to send the information to REDUX
import { useDispatch } from "react-redux"


// Function that handles the user input of their feelings
export default function Feeling() {

    // Track the input in STATE
    const [feelingInput, setFeelingInput] = useState(0)

    // Set the disptch method
    const dispatch = useDispatch()

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
                    onChange={e => setFeelingInput(e.target.value)}
                />
                <button type="submit">Next</button>
            </form>

        </section>
    )
}