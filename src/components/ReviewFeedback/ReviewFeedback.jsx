// Import core libraries
import axios from "axios";

// Import the `useSelector` to get fields from REDUX
import { useSelector } from "react-redux";

// Import `useHistory` to handle automatic navigation to the next page
import { useHistory } from "react-router-dom"

// Import localized stylesheet (module)
import styles from './ReviewFeedback.module.css'


// Function that gets the feedback values from the REDUX store/
// and displays them to the DOM. Allows users to review their
// scores before submission.
export default function ReviewFeedback() {

    // Get the feedback values from the REDUX store, and deconstruct
    // those values
    const {
        feeling,
        understanding,
        support,
        comments,
    } = useSelector(store => store.feedback)

    // Initialize the history function
    const history = useHistory()

    // Track if any field has an error
    const noError = {
        // Check the range of the numbers as valid
        feeling: (
            feeling !== null && feeling >= 0 && feeling <= 10
        ),
        understanding: (
            understanding !== null && understanding >= 0 && understanding <= 10
        ),
        support: (
            support !== null && support >= 0 && support <= 10
        ),
        // Ensure an entry has been made
        comments: (
            comments.trim()
        ),
    }

    // REF: https://stackoverflow.com/a/53897696
    const fullyComplete = () => Object
        // Get an array of values from object
        .values(noError)
        // See link above
        .every(Boolean)

    // Handle the click submission to the database
    const onClickSaveFeedback = () => {
        console.log("Ye")
        axios.post(
            "/api/feedback", {
                feeling,
                understanding,
                support,
                comments,
            }
        )
        .then(response => {
            history.push("/success")
        })
        .catch(err => console.log(`Error occured on POST with ${err}`))
    }


    // Show all the input values to the DOM
    return (
        <section>
            <h2>Review Your Feedback</h2>
            <div className="review-feedback-container">
                <p className={noError.feeling ? null : styles.missing}>
                    Feelings: <span>{feeling}</span>
                </p>
                <p className={noError.understanding ? null : styles.missing}>
                    Understanding: <span>{understanding}</span>
                </p>
                <p className={noError.support ? null : styles.missing}>
                    Support: <span>{support}</span>
                </p>
                <p className={noError.comments ? null : styles.missing}>
                    Comments: <span>{comments}</span>
                </p>
            </div>

            {fullyComplete() ?
                <button onClick={onClickSaveFeedback}>Submit</button>
                :
                <button disabled>Incomplete</button>
            }

        </section>
    )
}