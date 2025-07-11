import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';


function HomePage() {

    const pages = [
    {label: 'Schedule', path: '/schedule'},
    {label: 'Tutors', path: '/tutor-list'},
    {label: 'New Tutor', path: '/new-tutor'}
    ];

    return (
        <div className="button-grid">
            {pages.map((page, index) => (
                <Link to={page.path} key={index} className="grid-button">
                    {page.label}
                </Link> 
            ))}
        </div>
    )
}

export default HomePage;