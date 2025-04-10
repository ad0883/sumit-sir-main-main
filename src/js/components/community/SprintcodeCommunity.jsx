import React from 'react';
import '../../../css/components/community/SprintcodeCommunity.css';

import person1Image from '../../assets/team-photo/sloth.jpeg';
import person2Image from '../../assets/team-photo/sloth.jpeg';
// import person3Image from '../../assets/team-photo/sloth.jpeg';

const SprintcodeCommunity = () => {
    return (
        <div className="sprintcode-container">

            <div className="sprintcode-header-container">
                <div className="sprintcode-header">
                    <h1>Community for Connection, <br />Creativity & Collaboration</h1>
                </div>
            </div>

            <div className="sprintcode-community-wrapper">
                <div className="sprintcode-community-row">
                    <div className="sprintcode-community-pill sprintcode-dark">
                        <span>COM</span>
                    </div>
                    <div
                        className="sprintcode-community-circle sprintcode-teal"
                        style={{ backgroundImage: `url(${person1Image})` }}
                    ></div>
                    <div className="sprintcode-community-pill sprintcode-light">
                        <span>MUN</span>
                    </div>
                </div>

                {/* Merged ITY + image + BY into one row */}
                <div className="sprintcode-community-row">
                    <div className="sprintcode-community-pill sprintcode-dark">
                        <span>ITY</span>
                    </div>
                    <div
                        className="sprintcode-community-circle sprintcode-teal"
                        style={{ backgroundImage: `url(${person2Image})` }}
                    ></div>
                    <div className="sprintcode-community-pill sprintcode-dark">
                        <span>BY</span>
                    </div>
                </div>

                <div className="sprintcode-community-row">
                    <div className="sprintcode-community-pill sprintcode-light sprintcode-wide">
                        <span>SPRINTCODE</span>
                    </div>
                </div>
            </div>

            <div className="sprintcode-cta-button">
                <a href="https://chat.whatsapp.com/CUaHJArukwsEZM3Ez6hQtn" target="_blank" rel="noopener noreferrer">
                    Join Sprintcode Community!
                </a>
            </div>
        </div>
    );
};

export default SprintcodeCommunity;
