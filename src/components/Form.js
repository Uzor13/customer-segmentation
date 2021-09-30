import React, {useEffect, useState} from 'react';
import Monetary from "./Monetary";
import Frequency from "./Frequency";
import Recency from "./Recency";
import Data from "./Data";
import SegmentStats from "./SegmentStats";
import RfmStats from "./RfmStats";

import {Route, Switch} from "react-router-dom";
import {FlexContainer, FormContainer, PredictBtn} from "../style";
import Customer from "./Customer";


const Form = () => {

    const [result, setResult] = useState('');
    const [recency, setRecency] = useState('');
    const [customer, setCustomer] = useState();
    const [frequency, setFrequency] = useState('');
    const [monetary, setMonetary] = useState('');
    const [segment, setSegment] = useState([]);


    const postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }

    const getData = async (url = '') => {
        const response = await fetch(url)
        return await response.json()
    }

    useEffect(() => {
        getData('http://localhost:5000/api')
            .then(data => {
                setSegment(data.data)
            })
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        postData('http://localhost:5000/api/add-segment', {segment: result, recency, frequency, monetary})
            .then(data => {
                console.log(data)
            })
        rfm()
    }

    const rfm = () => {
        const rfmResult = parseInt(frequency) + parseInt(recency) + parseInt(monetary)
        if (rfmResult === 15 || rfmResult === 14) {
            setResult('Platinum')
        } else if (rfmResult === 13 || rfmResult === 12) {
            setResult('Gold')
        } else if (rfmResult === 11 || rfmResult === 10 || rfmResult === 9) {
            setResult('Silver')
        } else if (rfmResult === 8 || rfmResult === 7 || rfmResult === 6) {
            setResult('Bronze')
        } else if (rfmResult === 5 || rfmResult === 4 || rfmResult === 3) {
            setResult('Bad')
        } else if (rfmResult > 15) {
            setResult('A value is greater than 5')
        } else {
            setResult('Value less than 5')
        }
    }


    return (
        <div>
            <Route path='/' exact>
                <FlexContainer>
                    <FormContainer onSubmit={handleSubmit}>
                        <Customer value={customer} setValue={setCustomer}/>
                        <Recency value={recency} setValue={setRecency}/>
                        <Frequency value={frequency} setValue={setFrequency}/>
                        <Monetary value={monetary} setValue={setMonetary}/>
                        <PredictBtn  type='submit'>Segment Customers</PredictBtn>
                    </FormContainer>
                    <RfmStats recency={recency} frequency={frequency} monetary={monetary}/>
                </FlexContainer>
                <div className='d-flex justify-content-center align-items-center'>
                    {result === '' ? null :
                        <div className='card p-3 w-50 d-flex justify-content-center mt-3 shadow-lg rounded-3'>
                            <h2 className='result text-dark'>Segmentation Category: {result}</h2>
                        </div>
                    }
                </div>
            </Route>
            <Switch>
                <Route path='/data'>
                    <Data segment={segment}/>
                </Route>
                <Route path='/chart'>
                    <SegmentStats segment={segment}/>
                </Route>
            </Switch>
        </div>
    );
};

export default Form;
