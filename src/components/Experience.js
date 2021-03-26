import React from 'react';
import uniqid from 'uniqid';

class Experience extends React.Component {
    render() {

        const experienceTabs = []

        for (let i = 0; i < this.props.experienceTabCount; i++) { 
            experienceTabs.push(
                <div key={uniqid()} data-index={i} className="experience__tabs__tab">
                    {i + 1}
                </div>
            )
        };

        return (
            <div>
                <h2 className="form__header">Experience</h2>

                <div className="experience__tabs" onClick={this.props.toggleExperienceTab}>
                    {experienceTabs}
                </div>

                <div className="form__field">
                    <input
                    id="jobTitle"
                    placeholder="Job title"
                    className="form__input"
                    />
                </div>
                
                <div className="form__field">
                    <input
                    id="company"
                    placeholder="Company name"
                    className="form__input"
                    />
                </div>

                <div className="form__field">
                <label className="form__label">Start Date:</label>
                    <input
                    type="date"
                    id="startDate"
                    placeholder="Enter job title"
                    className="form__input"
                    />
                </div>

                <div className="form__field">
                    <label className="form__label">End Date:</label>
                    <input
                    type="date"
                    id="endDate"
                    placeholder="End Date"
                    className="form__input"
                    />
                </div>

                <div className="form__field">
                    <textarea
                    id="description"
                    placeholder="Tell us about this role. For example, your responsibilities, special skills etc."
                    onChange={this.props.update}
                    className="form__text"
                    />
                </div>

                <button className="form__add" onClick={this.props.addExperience}>Add</button>
            </div>
        )
    }
}

export default Experience;