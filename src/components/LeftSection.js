import React from 'react';
import layoutDs from '../datasources/layoutDs';
import profileDavidChiu from '../styles/img/leftSection/profile-david-chiu.svg';


class LeftSection extends React.Component {
    render() {
        return (
            <div id='left-section' className='col sm-12-12 md-fix'>
                <div className='content-container'>
                    <div className='welcome-home-heading'>Welcome Home!</div>
                    <div className='user-name'>David Chiu</div>
                    <img className='avater' src={profileDavidChiu}/>
                    <div className='topic-heading'>Topic</div>
                    {
                        layoutDs.getMainMenuTopics() && layoutDs.getMainMenuTopics().map(function (topic) {
                            return <div key={topic} className='topic'>{topic}</div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default LeftSection;
