import React from 'react';
import {InputContainer} from "../style";


const Monetary = ({value, setValue}) => {

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <InputContainer>
            <label htmlFor="frequency">Monetary</label>
            <input type="text" placeholder='Monetary Score' value={value} onChange={handleChange}/>
        </InputContainer>
    );
};

export default Monetary;
