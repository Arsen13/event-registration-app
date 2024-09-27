import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./registration.css";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Input from "../../components/Registration/Input";
import OptionContainer from "../../components/Registration/OptionContainer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Registration = () => {

    const { state: eventId } = useLocation();
    const navigate = useNavigate();

    const [fullName, setFullname] = useState();
    const [email, setEmail] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [eventSource, setEventSource] = useState();
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setEventSource(value);
    }

    const addParticipant = async (e) => {
        e.preventDefault();

        if (!fullName) {
            setError("Please enter your name!");
            return;
        }

        if (!email) {
            setError("Please enter a email address!");
            return;
        }
        
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const isValid = regex.test(email);

        if (!isValid) {
            setError("Please enter a valid email address!");
            return;
        }

        if (!dateOfBirth) {
            setError("Please enter your date of birth!");
            return;
        }

        if (!eventSource) {
            setError("Please choose where did you here about this event!");
            return;
        }

        setError('');

        if (error === '') {
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

            <form className="form" onSubmit={addParticipant}>
                <Input 
                    id={fullName} 
                    placeholder="John Doe" 
                    labelName="Full name"
                    onChange={e => setFullname(e.target.value)}
                />
                <Input 
                    id={email} 
                    placeholder="johndoe@gmail.com" 
                    labelName="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                
                <label>Date of birth</label>
                <DatePicker className="input-field" onChange={(date) => setDateOfBirth(date)} selected={dateOfBirth}/>

                <OptionContainer 
                    handleChange={handleChange} 
                    addParticipant={addParticipant}
                />
            </form>

            {error && <p className="error">{error}</p>}
        </>
    )
}

export default Registration;