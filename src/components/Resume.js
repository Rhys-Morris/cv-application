import React from 'react';
import ResumeForm from "./ResumeForm"
import ResumeDisplay from "./ResumeDisplay"

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInformation: {},
            experience: []
        }
        this.updatePersonalInformation = this.updatePersonalInformation.bind(this);
        this.addExperience = this.addExperience.bind(this)
        this.toggleExperienceTab = this.toggleExperienceTab.bind(this)
    };

    updatePersonalInformation(e) {
        this.setState((state) => ({
            personalInformation: {
                ...this.state.personalInformation,
                [e.target.id]: e.target.value
            }
        }));
    }

    addExperience() {
        const jobTitle = document.getElementById("jobTitle");
        const company = document.getElementById("company");
        const startDate = document.getElementById("startDate");
        const endDate = document.getElementById("endDate");
        const description = document.getElementById("description");
        const newExperience = {
            jobTitle: [jobTitle.value],
            company: [company.value],
            startDate: [startDate.value],
            endDate: [endDate.value],
            description: [description.value]
        }
        const joined = this.state.experience.concat(newExperience)
        this.setState({
            experience: joined
        });
        this.resetInput([jobTitle, company, startDate, endDate, description])
    }

    toggleExperienceTab(e) {
        if (!e.target.classList.contains("experience__tabs__tab")) return
        const selectedTab = this.state.experience[e.target.dataset.index]
    }

    resetInput(array) {
        array.forEach(input => input.value = "")
    }

    render() {
        return (
            <div className="resume-main">
                <ResumeForm 
                    updatePersonalInformation={this.updatePersonalInformation}
                    addExperience={this.addEducation}
                    experienceTabCount={this.state.experience.length}
                    toggleExperienceTab={this.toggleExperienceTab}
                />
                <ResumeDisplay 
                    personalInformation={this.state.personalInformation}
                    experience={this.state.experience}
                />
            </div>
        )
    }
}

export default Resume;