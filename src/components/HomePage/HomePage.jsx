// Import `Link` to handle the navigation through the site.
import { Link } from "react-router-dom"

// Function that displays the entry point to the webpage.
// Allow the user to either work through the submission form
// or navigate to the admin site.
export default function HomePage() {

    // Builds a welcome page to the site.
    return (
        <section>
            <h2>Welcome</h2>
            <div>
                <div>
                    <Link to="/feeling">
                        Submit Feedback
                    </Link>
                </div>
                <div>
                    <Link to="/admin">
                        [ADMIN] Review Input
                    </Link>
                </div>
            </div>
        </section>
    )
}