import React from 'react';
import ResumeForm from "./ResumeForm"
import ResumeDisplay from "./ResumeDisplay"

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInformation: {},
            education: []
        }
        this.updatePersonalInformation = this.updatePersonalInformation.bind(this);
        this.addEducation = this.addEducation.bind(this)
    };

    updatePersonalInformation(e) {
        this.setState((state) => ({
            personalInformation: {
                ...this.state.personalInformation,
                [e.target.id]: e.target.value
            }
        }));
    }

    addEducation() {
        const jobTitle = document.getElementById("jobTitle");
        const company = document.getElementById("company");
        const startDate = document.getElementById("startDate");
        const endDate = document.getElementById("endDate");
        const description = document.getElementById("description");
        const newEducation = {
            jobTitle: [jobTitle.value],
            company: [company.value],
            startDate: [startDate.value],
            endDate: [endDate.value],
            description: [description.value]
        }
        const joined = this.state.education.concat(newEducation)
        this.setState({
            education: joined
        });
        this.resetInput([jobTitle, company, startDate, endDate, description])
    }

    resetInput(array) {
        array.forEach(input => input.value = "")
    }

    render() {
        return (
            <div className="resume-main">
                <ResumeForm 
                    updatePersonalInformation={this.updatePersonalInformation}
                    addEducation={this.addEducation}
                />
                <ResumeDisplay 
                    personalInformation={this.state.personalInformation}
                    education={this.state.education}
                />
            </div>
        )
    }
}

export default Resume;