import EventCard from "../../components/EventCard/EventCard";
import "./home.css"
const Home = () => {
    return (
        <>
            <h1 className="header">Events</h1>
            <div className="card-list">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </>

    )
}

export default Home;