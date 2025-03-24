import React, { useState } from 'react';
import axios from 'axios';

const BugForm: React.FC<{ refreshBugs: () => void }> = ({ refreshBugs }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/bugs', { title, description });
            setTitle('');
            setDescription('');
            refreshBugs();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Bug title" required />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Bug description" />
            <button type="submit">Report Bug</button>
        </form>
    );
};

export default BugForm;
