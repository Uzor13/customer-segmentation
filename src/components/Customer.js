import React from 'react';
import {InputContainer} from "../style";


const Customer = ({value, setValue}) => {

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <InputContainer>
            <label htmlFor="frequency">Customer ID</label>
            <input type="text" placeholder='Customer ID' value={value} onChange={handleChange}/>
        </InputContainer>
    );
};

export default Customer;
