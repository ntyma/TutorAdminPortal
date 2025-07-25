import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TutorList() {
    const [names, setNames] = useState([]);

    useEffect(() => {
        axios.get('/tutors')
            .then(response => {
                const tutors = response.data;
                setNames(tutors.map(tutors => `${tutors.first_name} ${tutors.last_name}`));
            })
            .catch(error => {
                console.error('Error fetching tutors:', error);
            });
    }, []);

    return (
        <div>
            <h2>List of Tutors</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default TutorList;