const OptionContainer = ({ handleChange }) => {
    return (
        <>
            <p className="text">Where did you hear about this event?</p>
                
            <div className="radio-input" onChange={handleChange}>
                <input type="radio" id="social" name="event" value="Social media" />
                <label htmlFor="social">Social media</label>

                <input type="radio" id="friends" name="event" value="Friends" />
                <label htmlFor="friends">Friends</label>

                <input type="radio" id="myself" name="event" value="Found myself" />
                <label htmlFor="myself">Found myself</label>
            </div>

            <button type="submit" className="button">Submit</button>
        </>
    )
}

export default OptionContainer;