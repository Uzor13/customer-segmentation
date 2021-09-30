import React from 'react';
import Table from "react-bootstrap/Table";
import {TableContainer} from "../style";

const Data = ({segment}) => {
    return (
        <TableContainer className='container'>
            <Table className='text-white' bordered>
                <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Segment</th>
                    <th>Recency</th>
                    <th>Frequency</th>
                    <th>Monetary</th>
                </tr>
                </thead>
                <tbody>
                {segment?.map(data => (
                    <tr>
                        <td>{data.customerID}</td>
                        <td>{data.segment}</td>
                        <td>{data.recency}</td>
                        <td>{data.frequency}</td>
                        <td>{data.monetary}</td>
                    </tr>
                ))}
                </tbody>

            </Table>
        </TableContainer>

    );
};

export default Data;
