// Import `useState` to track the input field
import { useState } from "react"

// Import `useDispatch` to send the information to REDUX
import { useDispatch } from "react-redux"

// Import `useHistory` to handle automatic navigation to the next page
import { useHistory } from "react-router-dom"


// Function that handles the user input of their supported value
export default function Support() {

    // Track the input in STATE
    const [supportInput, setSupportInput] = useState("")

    // Set the `dispatch` method
    const dispatch = useDispatch()
    // Set the `history` method
    const history = useHistory()


    // On submission, store the current input value to the REDUX store.
    // All submissions will be contained within a singular REDUX object.
    const onSubmitSupport = () => {

        // Dipatch the local state value to be stored within REDUX
        dispatch({
            // Set the action call to be processed with REDUX
            type: "SET_FEEDBACK",
            // Pass the payload with the specific key name.
            // Key name matches the REDUX store value in the object.
            payload: {
                field: 'support',
                value: Number(supportInput)
            },
        })

        history.push("/comments")
    }

    // Handles the display of the form to the DOM
    return (
        <section>
            
            <h2>How well are you being supported?</h2>

            <form onSubmit={onSubmitSupport}>
                <input
                    type="text"
                    placeholder="0 - 10"
                    value={supportInput}
                    onChange={e => setSupportInput(e.target.value)}
                    autoFocus
                />
                <button type="submit">Next</button>
            </form>

        </section>
    )
}