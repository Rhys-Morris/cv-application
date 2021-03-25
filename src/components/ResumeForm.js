import React from 'react';
import PersonalInformation from './PersonalInformation';
import Education from './Education';

class ResumeForm extends React.Component {
    render() {
        const { updatePersonalInformation, addEducation } = this.props;
        return (
            <div className="resume-form">
                <PersonalInformation update={updatePersonalInformation}/>
                <Education addEducation={addEducation} />
            </div>
        )
    }
}

export default ResumeForm;