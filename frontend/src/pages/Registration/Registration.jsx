import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./registration.css";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const Registration = () => {

    const { state: eventId } = useLocation();
    const navigate = useNavigate();

    const [fullName, setFullname] = useState();
    const [email, setEmail] = useState();
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [eventSource, setEventSource] = useState();

    const handleChange = (e) => {
        const { value } = e.target;
        setEventSource(value);
    }

    const addParticipant = async (e) => {
        e.preventDefault();
        if (fullName && email && eventSource) {
            await axiosInstance.post(`/addParticipant/${eventId}`, { 
                fullName, 
                email, 
                dateOfBirth, 
                eventSource
            })
            navigate('/');
        }
    }

    return (
        <>
            <h2 className="text">Event registration</h2>

            <form className="form">
                <label htmlFor="fullName">Full name</label>
                <input 
                    type="text" 
                    id="fullName" 
                    className="input-field" 
                    onChange={(e) => setFullname(e.target.value)} 
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    className="input-field" 
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="birthdate">Date of birth</label>
                <input 
                    type="text" 
                    id="birthdate" 
                    className="input-field"
                    onChange={(e) => setDateOfBirth(e.target.value)} 
                />

                
                <p className="text">Where did you hear about this event?</p>
                
                <div className="radio-input" onChange={handleChange}>
                    <input type="radio" id="social" name="event" value="Social media" />
                    <label htmlFor="social">Social media</label>

                    <input type="radio" id="friends" name="event" value="Friends" />
                    <label htmlFor="friends">Friends</label>

                    <input type="radio" id="myself" name="event" value="Found myself" />
                    <label htmlFor="myself">Found myself</label>
                </div>

                <button type="submit" className="button" onClick={addParticipant}>Submit</button>
            </form>
        </>
    )
}

export default Registration;