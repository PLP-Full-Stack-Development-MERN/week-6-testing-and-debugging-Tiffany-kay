import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BugForm from './components/BugForm';
import BugList from './components/BugList';

const App: React.FC = () => {
    const [bugs, setBugs] = useState([]);

    const fetchBugs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/bugs');
            setBugs(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBugs();
    }, []);

    return (
        <div>
            <h1>Bug Tracker</h1>
            <BugForm refreshBugs={fetchBugs} />
            <BugList bugs={bugs} />
        </div>
    );
};

export default App;
