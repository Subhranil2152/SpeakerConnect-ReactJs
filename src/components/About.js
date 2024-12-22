import React, { Component } from "react";
import "./About.css";
import me from './me.png';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="about-left">
                    <h1>About Us</h1>
                    <p>
                        SpeakerConnect.com is a streamlined platform designed to manage and book speakers for events. Whether you’re planning a conference, seminar, or workshop, SpeakerConnect.com simplifies the process, ensuring you find the perfect speaker for your event.
                        <br /><br />
                        Created By:<br />
                        Subhranil Karmakar<br />
                        2365739@cognizant.com
                    </p>
                </div>
                <div className="about-right">
                    <img src={me} alt="Subhranil Karmakar" />
                </div>
            </div>
        );
    }
}

export default About;