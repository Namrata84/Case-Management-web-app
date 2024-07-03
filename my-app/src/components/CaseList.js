import React from 'react';

const CaseList = ({ cases, updateCase, deleteCase }) => {
    return (
        <ul>
            {cases.map(c => (
                <li key={c.id}>
                    {c.name} - {c.length} x {c.width} x {c.height} - {c.weight}g
                    <button onClick={() => deleteCase(c.id)}>Delete</button>
                    {/* Add functionality to update the case */}
                </li>
            ))}
        </ul>
    );
};

export default CaseList;