import ParticipantCard from "../../components/ParticipantCard/ParticipantCard";

const Participants = () => {
    return (
        <>
            <h1 className="header">"Event name" participants</h1>
            <div className="card-list">
                <ParticipantCard />
                <ParticipantCard />
                <ParticipantCard />
                <ParticipantCard />
                <ParticipantCard />
                <ParticipantCard />
                <ParticipantCard />
            </div>
        </>
    )
}

export default Participants;