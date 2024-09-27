const Input = ({ id, placeholder, onChange, labelName }) => {
    return (
        <>
            <label htmlFor={id}>{labelName}</label>

            <input 
                type="text"
                className="input-field"
                id={id}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export default Input;