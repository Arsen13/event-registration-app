import "./ParticipantCard.css";

const ParticipantCard = ({ fullName, email, dateOfBirth, eventSource }) => {
    return (
        <div className="participant-card">
            <h3>{fullName}</h3>
            <h4 className="email">{email}</h4>
            <p className="date">{dateOfBirth.split("T")[0]}</p>
            <p>Event source: {eventSource}</p>
        </div>
    )
}

export default ParticipantCard;