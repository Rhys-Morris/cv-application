import React from 'react';
import ResumeForm from "./ResumeForm"
import ResumeDisplay from "./ResumeDisplay"

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInformation: {},
            experience: [],
            experienceTabDisplayed: null,
            education: [],
            educationTabSiplayed: null
        };
        // Personal Information
        this.updatePersonalInformation = this.updatePersonalInformation.bind(this);

        // Experience
        this.addExperience = this.addExperience.bind(this);
        this.toggleExperienceTab = this.toggleExperienceTab.bind(this);
        this.updateExperience = this.updateExperience.bind(this);
        this.createNewExperience = this.createNewExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);

        // Education
        this.addEducation = this.addEducation.bind(this);
        this.toggleEducationTab = this.toggleEducationTab.bind(this);
        this.updateEducation = this.updateEducation.bind(this);
        this.createNewEducation = this.createNewEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
    };

    updatePersonalInformation(e) {
        this.setState((state) => ({
            personalInformation: {
                ...this.state.personalInformation,
                [e.target.id]: e.target.value
            }
        }));
    }

    getExperienceObject() {
        const jobTitle = document.getElementById("jobTitle");
        const company = document.getElementById("company");
        const startDate = document.getElementById("startDate");
        const endDate = document.getElementById("endDate");
        const description = document.getElementById("description");
        return {
            jobTitle: [jobTitle.value],
            company: [company.value],
            startDate: [startDate.value],
            endDate: [endDate.value],
            description: [description.value]
        };
    }

    getEducationObject() {
        const institution = document.getElementById("institution");
        const qualification = document.getElementById("qualification");
        const dateCompleted = document.getElementById("dateCompleted");
        return {
            institution: [institution.value],
            qualification: [qualification.value],
            dateCompleted: [dateCompleted.value]
        };
    }

    resetExperienceInput() {
        document.getElementById("jobTitle").value = "";
        document.getElementById("company").value = "";
        document.getElementById("startDate").value = "";
        document.getElementById("endDate").value = "";
        document.getElementById("description").value = "";
    }

    resetEducationInput() {
        document.getElementById("institution").value = "";
        document.getElementById("qualification").value = "";
        document.getElementById("dateCompleted").value = "";
    }

    updateExperienceInput(experienceObject) {
        document.getElementById("jobTitle").value = experienceObject.jobTitle;
        document.getElementById("company").value = experienceObject.company;
        document.getElementById("startDate").value = experienceObject.startDate;
        document.getElementById("endDate").value = experienceObject.endDate;
        document.getElementById("description").value = experienceObject.description;
    }

    updateEducationInput(educationObject) {
        document.getElementById("institution").value = educationObject.institution;
        document.getElementById("qualification").value = educationObject.qualification;
        document.getElementById("dateCompleted").value = educationObject.dateCompleted;
    }

    addExperience() {
        const newExperience = this.getExperienceObject();

        const joined = this.state.experience.concat(newExperience)
        this.setState({
            experience: joined
        });
        this.resetExperienceInput();
    }

    addEducation() {
        const newEducation = this.getEducationObject();

        const joined = this.state.education.concat(newEducation)
        this.setState({
            education: joined
        });
        this.resetEducationInput();
    }

    toggleExperienceTab(e) {
        // Return if non-tab clicked
        if (!e.target.classList.contains("experience__tabs__tab") || (e.target.classList.contains("experience__tabs__tab--new"))) return

        const selectedTab = this.state.experience[e.target.dataset.index]
        this.setState({
            experienceTabDisplayed: [e.target.dataset.index]
        })

        // Update values to selected tab
        document.getElementById("jobTitle").value = selectedTab.jobTitle;
        document.getElementById("company").value = selectedTab.company;
        document.getElementById("startDate").value = selectedTab.startDate;
        document.getElementById("endDate").value = selectedTab.endDate;
        document.getElementById("description").value = selectedTab.description;
    }

    toggleEducationTab(e) {
        // Return if non-tab clicked
        if (!e.target.classList.contains("education__tabs__tab") || (e.target.classList.contains("education__tabs__tab--new"))) return

        const selectedTab = this.state.education[e.target.dataset.index]
        this.setState({
            educationTabDisplayed: [e.target.dataset.index]
        })

        // Update values to selected tab
        document.getElementById("institution").value = selectedTab.institution;
        document.getElementById("qualification").value = selectedTab.qualification;
        document.getElementById("dateCompleted").value = selectedTab.dateCompleted;
    }

    updateExperience() {
        const newExperience = this.getExperienceObject()

        // Create new state array
        const updatedState = [...this.state.experience];
        updatedState.splice(this.state.experienceTabDisplayed, 1, newExperience)

        this.setState({
            experience: updatedState
        });

        this.updateExperienceInput(newExperience);
    }

    updateEducation() {
        const newEducation = this.getEducationObject()

        // Create new state array
        const updatedState = [...this.state.education];
        updatedState.splice(this.state.educationTabDisplayed, 1, newEducation)

        this.setState({
            education: updatedState
        });

        this.updateEducationInput(newEducation);
    }

    createNewExperience() {
        this.setState({
            experienceTabDisplayed: null
        })
        this.resetExperienceInput();
    }

    createNewEducation() {
        this.setState({
            educationTabDisplayed: null
        })
        this.resetEducationInput();
    }

    deleteExperience() {
        const updatedState = [...this.state.experience];
        updatedState.splice(this.state.experienceTabDisplayed, 1)

        this.setState({
            experience: updatedState,
            experienceTabDisplayed: null
        });

        this.resetExperienceInput();
    }

    deleteEducation() {
        const updatedState = [...this.state.education];
        updatedState.splice(this.state.educationTabDisplayed, 1)

        this.setState({
            education: updatedState,
            educationTabDisplayed: null
        });

        this.resetEducationInput();
    }

    render() {
        return (
            <div className="resume-main">
                <ResumeForm 
                    // Personal Information
                    updatePersonalInformation={this.updatePersonalInformation}

                    // Experience
                    addExperience={this.addExperience}
                    experienceTabCount={this.state.experience.length}
                    toggleExperienceTab={this.toggleExperienceTab}
                    experienceTabDisplayed={this.state.experienceTabDisplayed}
                    updateExperience={this.updateExperience}
                    createNewExperience={this.createNewExperience}
                    deleteExperience={this.deleteExperience}

                    // Education
                    addEducation={this.addEducation}
                    educationTabCount={this.state.education.length}
                    toggleEducationTab={this.toggleEducationTab}
                    educationTabDisplayed={this.state.educationTabDisplayed}
                    updateEducation={this.updateEducation}
                    createNewEducation={this.createNewEducation}
                    deleteEducation={this.deleteEducation}
                />
                <ResumeDisplay 
                    personalInformation={this.state.personalInformation}
                    experience={this.state.experience}
                    education={this.state.education}
                />
            </div>
        )
    }
}

export default Resume;