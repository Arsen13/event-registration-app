import { Link } from "react-router-dom";
import "./eventCard.css";

const EventCard = () => {
    return(
        <div className="card">
            <div class="desc-container">
                <h2>Title</h2>
                <p>description</p>
            </div>

            <div className="button-container">
                <Link to="/registration" className="link">Register</Link>
                <Link to="/participants" className="link">View</Link>
            </div>
        </div>
    )   
}

export default EventCard;