// Import `useState` to track the input field
import { useEffect, useState } from "react"

// Import `useDispatch` to send the information to REDUX
import { useDispatch, useSelector } from "react-redux"

// Import `useHistory` to handle automatic navigation to the next page
import { useHistory } from "react-router-dom"


// Function that handles the user input of their understanding
export default function Understanding() {

    // Track the input in STATE
    const [isComplete, setIsComplete] = useState(false)

    // Get the redux state of the variable
    let understandingInput = useSelector(store => store.feedback.understanding)
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

    const setUnderstandingInput = (value) => {

        // Dipatch the local state value to be stored within REDUX
        dispatch({
            // Set the action call to be processed with REDUX
            type: "SET_FEEDBACK",
            // Pass the payload with the specific key name.
            // Key name matches the REDUX store value in the object.
            payload: {
                field: 'understanding',
                value: Number(value)
            },
        })
    }

    // On submission, store the current input value to the REDUX store.
    // All submissions will be contained within a singular REDUX object.
    const onSubmitUnderstanding = () => {

        // Navigate to the next page
        history.push("/support")
    }

    // Handles the display of the form to the DOM
    return (
        <section>
            
            <h2>How well are you understanding the content?</h2>

            <form onSubmit={onSubmitUnderstanding}>
                <input
                    type="text"
                    placeholder="0 - 10"
                    value={understandingInput}
                    onChange={e => {
                        setUnderstandingInput(e.target.value)
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