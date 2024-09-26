import "./ParticipantCard.css";

const ParticipantCard = ({ fullName, email }) => {
    return (
        <div className="participant-card">
            <p>{fullName}</p>
            <p>{email}</p>
        </div>
    )
}

export default ParticipantCard;