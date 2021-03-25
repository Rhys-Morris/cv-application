import React from 'react';
import uniqid from 'uniqid';

class ResumeDisplay extends React.Component {
    render() {
        const { personalInformation, education } = this.props;
        return (
            <div className="display">
                <div className="display__header">
                    <img src="https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="profile-pic" className="display__header__image"/>
                    <div className="display__header__text">
                        <p className="display__header__name">{personalInformation.title} {personalInformation.fullName}</p>
                    </div>
                </div>
                <div>
                    {education && education.map(ed => {
                        return (
                            <div key={uniqid()}>
                                <p>{ed.jobTitle}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ResumeDisplay;