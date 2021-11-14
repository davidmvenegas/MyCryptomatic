import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="home-page">
            <div className="home-container">
                <div className="home-text-container">
                    <h1 className="home-header">CRYPTOMATIC</h1>
                    <h3 className="home-description">Track the Markets - Monitor your Portfolio - Trade Automaticly</h3>
                    <Link to="/markets"><button className="home-button">Get Started</button></Link>
                </div>
		        <ul class="floating-coins">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
		        </ul>
	        </div>
        </div>
    )
}

export default Home;