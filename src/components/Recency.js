import React from 'react';
import {InputContainer} from "../style";


const Recency = ({value, setValue}) => {

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <InputContainer>
            <label htmlFor="frequency">Recency</label>
            <input type="text" placeholder='Recency Score' value={value} onChange={handleChange}/>
        </InputContainer>
    );
};

export default Recency;
