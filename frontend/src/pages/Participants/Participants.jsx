import { useLocation } from "react-router-dom";
import ParticipantCard from "../../components/ParticipantCard/ParticipantCard";
import "./participants.css";
import { useEffect, useState } from "react";

const Participants = () => {

    const { state } = useLocation();

    const [participants, setParticipants] = useState(state);
    const [sortType, setSortType] = useState("fullName");
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        let newParticipants = state;

        if (sortType === 'fullName') {
            newParticipants = newParticipants.filter(value => value.fullName.toLowerCase().includes(searchValue.toLowerCase()));
        }
        
        if (sortType === 'email') {
            newParticipants = newParticipants.filter(value => value.email.toLowerCase().includes(searchValue.toLowerCase()));
        }

        setParticipants(newParticipants);

        if (searchValue === '') {
            setParticipants(state);
        }
    }, [searchValue, sortType]);

    return (
        <>
            <h1 className="header">"{state.eventTitle}" participants</h1>

            <div className="sort-option">
                <p>Search by</p>
                <select onChange={(e) => setSortType(e.target.value)} defaultValue={null}>
                    <option value="fullName">Full name</option>
                    <option value="email">Email</option>
                </select>

                <input
                    type="text"
                    className="search-input"
                    placeholder="Type full name or email"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            {state.length > 0 ? (
                <div className="card-list">
                    {participants.map((participant) => (
                        <ParticipantCard 
                            key={participant._id}
                            fullName={participant.fullName}
                            email={participant.email}
                            dateOfBirth={participant.dateOfBirth}
                            eventSource={participant.eventSource}
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