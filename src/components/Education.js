import React from 'react';
import uniqid from 'uniqid';

class Education extends React.Component {
    render() {

        const educationTabs = []

        for (let i = 0; i < this.props.educationTabCount; i++) { 
            educationTabs.push(
                <div key={uniqid()} data-index={i} className="education__tabs__tab">
                    {i + 1}
                </div>
            )
        };

        return (
            <div>
                <h2 className="form__header">Education</h2>

                <div className="education__tabs" onClick={this.props.toggleEducationTab}>
                    {educationTabs}
                    <div className="education__tabs__tab education__tabs__tab--new" onClick={this.props.createNewEducation}>New</div>
                </div>

                <div className="form__field">
                    <input
                    id="institution"
                    placeholder="Institution"
                    className="form__input"
                    />
                </div>
                
                <div className="form__field">
                    <input
                    id="qualification"
                    placeholder="Qualification"
                    className="form__input"
                    />
                </div>

                <div className="form__field">
                <label className="form__label">Date Completed:</label>
                    <input
                    type="date"
                    id="dateCompleted"
                    className="form__date"
                    />
                </div>

                {this.props.educationTabDisplayed && <button className="form__update" onClick={this.props.updateEducation}>Update</button>}
                {this.props.educationTabDisplayed && <button className="form__delete" onClick={this.props.deleteEducation}>Delete</button>}
                {!this.props.educationTabDisplayed && <button className="form__add" onClick={this.props.addEducation}>Add</button>}
            </div>
        )
    }
}

export default Education;