import React from 'react';
import uniqid from 'uniqid';

class ResumeDisplay extends React.Component {

    formatDate(date) {
        const formattedDate = new Date(date);
        return `${(formattedDate.getMonth() + 1)}/${formattedDate.getFullYear()}`
    }

    render() {
        const { personalInformation, experience, education } = this.props;
        return (
            <div className="display">
                <div className="display__header">
                    <img src="https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" alt="profile-pic" className="display__header__image"/>
                    <div className="display__header__text">
                        <p className="display__header__name">{personalInformation.title || "Dr."} {personalInformation.fullName || "John Doe"}</p>
                        <div>{personalInformation.address || "42 Earth Place, Milky Way"}</div>
                        <div className="display__header__contacts">
                            <p>Phone: {personalInformation.phone || "(03) 9999 666"}</p>
                            <p>Email: {personalInformation.email || "example@test.com"}</p>
                        </div>
                    </div>
                </div>
                <div className="display__bio">
                    <h3 className="display__heading">About Me</h3>
                    <p className="display__bio__text">{personalInformation.bio || "This section is for you to tell us a bit about yourself!"}</p>
                </div>
                <div className="display__experience">
                    <h3 className="display__heading"> Professional Experience</h3>
                    {experience && experience.map(exp => {
                        return (
                            <div key={uniqid()} className="display__experience__block">
                                <p className="display__experience__field display__experience__job-title">{exp.jobTitle}</p>
                                <p className="display__experience__field">{exp.company}</p>
                                <p className="display__experience__field">{this.formatDate(exp.startDate)} to {this.formatDate(exp.endDate)}</p>
                                <p className="display__experience__field display__experience__description">{exp.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="display__education">
                    <h3 className="display__heading">Education</h3>
                    {education && education.map(ed => {
                        return (
                            <div key={uniqid()} className="display__education__block">
                                <p className="display__education__qualification">{ed.qualification}</p>
                                <p className="display__education__institution">{ed.institution}  <span className="display__education__date">{new Date(ed.dateCompleted).getFullYear()}</span> </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ResumeDisplay;