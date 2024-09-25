import { useParams } from "react-router-dom";
import "./registration.css";

const Registration = () => {
    return (
        <>
            <h2 className="text">Event registration</h2>
            <form className="form">
                <label htmlFor="fullName">Full name</label>
                <input type="text" id="fullName" className="input-field" />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="input-field" />

                <label htmlFor="birthdate">Date of birth</label>
                <input type="text" id="birthdate" className="input-field" />

                
                <p className="text">Where did you hear about this event?</p>
                
                <div className="radio-input">
                    <input type="radio" id="social" name="event" value="social media" />
                    <label htmlFor="social">Social media</label>

                    <input type="radio" id="friends" name="event" value="friends" />
                    <label htmlFor="friends">Friends</label>

                    <input type="radio" id="myself" name="event" value="found myself" />
                    <label htmlFor="myself">Found myself</label>
                </div>

                <button type="submit" className="button">Submit</button>
            </form>
        </>
    )
}

export default Registration;