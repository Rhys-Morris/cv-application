import React from 'react';
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';
import Education from './Education';

class ResumeForm extends React.Component {
    render() {
        const { updatePersonalInformation,
                addExperience,
                experienceTabCount,
                toggleExperienceTab,
                experienceTabDisplayed,
                updateExperience,
                createNewExperience,
                deleteExperience,
                addEducation,
                educationTabCount,
                toggleEducationTab,
                educationTabDisplayed,
                updateEducation,
                createNewEducation,
                deleteEducation
        } = this.props;
        return (
            <div className="resume-form">
                <PersonalInformation update={updatePersonalInformation}/>
                <Experience 
                    addExperience={addExperience} 
                    experienceTabCount={experienceTabCount}
                    toggleExperienceTab={toggleExperienceTab}
                    experienceTabDisplayed={experienceTabDisplayed}
                    updateExperience={updateExperience}
                    createNewExperience={createNewExperience}
                    deleteExperience={deleteExperience}
                />
                <Education
                    addEducation={addEducation}
                    educationTabCount={educationTabCount}
                    toggleEducationTab={toggleEducationTab}
                    educationTabDisplayed={educationTabDisplayed}
                    updateEducation={updateEducation}
                    createNewEducation={createNewEducation}
                    deleteEducation={deleteEducation}
                />
            </div>
        )
    }
}

export default ResumeForm;