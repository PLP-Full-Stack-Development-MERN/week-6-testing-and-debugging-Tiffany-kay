import React from 'react';

interface Bug {
    _id: string;
    title: string;
    description: string;
    status: string;
}

const BugList: React.FC<{ bugs: Bug[] }> = ({ bugs }) => {
    return (
        <ul>
            {bugs.map((bug) => (
                <li key={bug._id}>
                    {bug.title} - {bug.status}
                </li>
            ))}
        </ul>
    );
};

export default BugList;
