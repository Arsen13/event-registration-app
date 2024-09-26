import { Link } from "react-router-dom";
import "./eventCard.css";

const EventCard = ({ title, description, organizer, eventDate, viewParticipants, register }) => {
    return(
        <div className="card">
            <div className="desc-container">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Organizer: {organizer}</p>
                <p className="date">{eventDate.split("T")[0]}</p>
            </div>

            <div className="button-container">
                <button className="link" onClick={register}>Register</button>
                <button className="link" onClick={viewParticipants}>View</button>
            </div>
        </div>
    )   
}

export default EventCard;