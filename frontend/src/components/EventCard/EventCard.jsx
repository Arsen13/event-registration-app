import { Link } from "react-router-dom";
import "./eventCard.css";

const EventCard = ({ title, description, viewParticipants, register }) => {
    return(
        <div className="card">
            <div className="desc-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="button-container">
                <button className="link" onClick={register}>Register</button>
                <button className="link" onClick={viewParticipants}>View</button>
            </div>
        </div>
    )   
}

export default EventCard;