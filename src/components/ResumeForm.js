import React from 'react';
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';

class ResumeForm extends React.Component {
    render() {
        const { updatePersonalInformation,
                addExperience,
                experienceTabCount,
                toggleExperienceTab
        } = this.props;
        return (
            <div className="resume-form">
                <PersonalInformation update={updatePersonalInformation}/>
                <Experience 
                    addExperience={addExperience} 
                    experienceTabCount={experienceTabCount}
                    toggleExperienceTab={toggleExperienceTab}
                />
            </div>
        )
    }
}

export default ResumeForm;