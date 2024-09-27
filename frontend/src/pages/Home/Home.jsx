import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import "./home.css"
import axiosInstance from "../../utils/axiosInstance.js";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [sortType, setSortType] = useState('title');

    const getAllEvents = async () => {
        try {
            const response = await axiosInstance("/allEvents");

            if (response.data) {
                const sortedData = response.data.sort((a, b) => a.title.localeCompare(b.title));
                setEvents(sortedData);
            }
        } catch (error) {
            console.log("An unexpected error occured. Please try again");
        }
    }

    const viewParticipants = async (event) => {
        try {
            const response = await axiosInstance(`/allParticipants/${event._id}`);

            if (response.data) {
                response.data.eventTitle = event.title;
                navigate("/participants", {state: response.data});
            }
        } catch (error) {
            console.log("An unexpected error occured. Please try again");
        }
    }

    const registerParticipant = (eventId) => {
        navigate('/registration', {state: eventId});
    }

    useEffect(() => {
        if (events.length > 0) {
            const sortEvents = type => {
                const types = {
                    title: "title",
                    eventDate: "eventDate",
                    organizer: "organizer"
                };
                const sortProperty = types[type];
                const sorted = [...events].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
                setEvents(sorted);
            }

            sortEvents(sortType)
        }
    }, [sortType])

    useEffect(() => {
        getAllEvents();
        return () => {};
    }, []);

    return (
        <>
            <h1 className="header">Events</h1>

            
            <div className="sort-option">
                <p>Sort by</p>
                <select onChange={(e) => setSortType(e.target.value)} defaultValue={null}>
                    <option value="title">Title</option>
                    <option value="eventDate">Event Date</option>
                    <option value="organizer">Organizer</option>
                </select>
            </div>

            {events.length > 0 ? (
                <div className="card-list">
                    {events.map((item) => (
                        <EventCard 
                            key={item._id}
                            title={item.title}
                            description={item.description}
                            organizer={item.organizer}
                            eventDate={item.eventDate}
                            viewParticipants={() => viewParticipants(item)}
                            register={() => registerParticipant(item._id)}
                        />
                    ))}
                </div>
            ) : (
                <p className="header">Events not found</p>
            )}
        </>

    )
}

export default Home;