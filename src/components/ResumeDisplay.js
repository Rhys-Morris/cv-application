import React from 'react';
import uniqid from 'uniqid';

class ResumeDisplay extends React.Component {
    render() {
        const { personalInformation, experience } = this.props;
        return (
            <div className="display">
                <div className="display__header">
                    <img src="https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="profile-pic" className="display__header__image"/>
                    <div className="display__header__text">
                        <p className="display__header__name">{personalInformation.title} {personalInformation.fullName}</p>
                        <div>{personalInformation.address}</div>
                        <div className="display__header__contacts">
                            <p>Phone: {personalInformation.phone}</p>
                            <p>Email: {personalInformation.email}</p>
                        </div>
                    </div>
                </div>
                <div className="display__bio">
                    {personalInformation.bio}
                    <h3 className="display__heading">About Me</h3>
                </div>
                <div className="display__experience">
                    {experience && experience.map(exp => {
                        return (
                            <div key={uniqid()}>
                                <p>{exp.jobTitle}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ResumeDisplay;