import React from 'react';
import {InputContainer} from "../style";


const Frequency = ({value, setValue}) => {

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <InputContainer>
            <label htmlFor="frequency">Frequency</label>
            <input type="text" placeholder='Frequency Score' value={value} onChange={handleChange}/>
        </InputContainer>
    );
};

export default Frequency;
