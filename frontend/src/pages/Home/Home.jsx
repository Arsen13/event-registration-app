import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import "./home.css"
import axiosInstance from "../../utils/axiosInstance.js";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [eventParticipants, setEventParticipants] = useState([]);

    const getAllEvents = async () => {
        try {
            const response = await axiosInstance("/allEvents");

            if (response.data) {
                setEvents(response.data);
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
        getAllEvents();
        setEventParticipants([])
        return () => {};
    }, []);


    return (
        <>
            <h1 className="header">Events</h1>
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