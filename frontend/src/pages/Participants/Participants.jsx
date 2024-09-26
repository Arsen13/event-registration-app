import { useLocation } from "react-router-dom";
import ParticipantCard from "../../components/ParticipantCard/ParticipantCard";

const Participants = () => {

    const { state } = useLocation();

    return (
        <>
            <h1 className="header">"{state.eventTitle}" participants</h1>
            {state.length > 0 ? (
                <div className="card-list">
                    {state.map((participant) => (
                        <ParticipantCard 
                            key={participant._id}
                            fullName={participant.fullName}
                            email={participant.email}
                        />
                    ))}
                </div>
            ) : (
                <p className="header">No participants found</p>
            )}
        </>
    )
}

export default Participants;