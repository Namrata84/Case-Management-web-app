import React, { useState } from 'react';
import axios from 'axios';

const CaseForm = ({ setCases }) => {
    const [caseData, setCaseData] = useState({ name: '', length: 0, width: 0, height: 0, weight: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCaseData({ ...caseData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/cases', caseData).then(response => setCases(prev => [...prev, response.data]));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="number" name="length" placeholder="Length" onChange={handleChange} />
            <input type="number" name="width" placeholder="Width" onChange={handleChange} />
            <input type="number" name="height" placeholder="Height" onChange={handleChange} />
            <input type="number" name="weight" placeholder="Weight" onChange={handleChange} />
            <button type="submit">Create Case</button>
        </form>
    );
};

export default CaseForm;