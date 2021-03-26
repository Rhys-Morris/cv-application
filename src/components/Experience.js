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
                    <div className="experience__tabs__tab experience__tabs__tab--new" onClick={this.props.createNewExperience}>New</div>
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
                    className="form__date"
                    />
                </div>

                <div className="form__field">
                    <label className="form__label">End Date:</label>
                    <input
                    type="date"
                    id="endDate"
                    className="form__date"
                    />
                </div>

                <div className="form__field">
                    <textarea
                    id="description"
                    placeholder="Tell us about this role. For example, your responsibilities, special skills etc."
                    className="form__text"
                    />
                </div>
                {this.props.experienceTabDisplayed && <button className="form__update" onClick={this.props.updateExperience}>Update</button>}
                {this.props.experienceTabDisplayed && <button className="form__delete" onClick={this.props.deleteExperience}>Delete</button>}
                {!this.props.experienceTabDisplayed && <button className="form__add" onClick={this.props.addExperience}>Add</button>}
            </div>
        )
    }
}

export default Experience;