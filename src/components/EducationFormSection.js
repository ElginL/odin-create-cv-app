import EducationalInput from './EducationInput';
import styles from '../styles/ExperienceFormSection.module.css'

const EducationFormSection = ({
    educationalExperience,
    setEducationalExperience
}) => {
    const addExperienceHandler = e => {
        e.preventDefault();
        
        setEducationalExperience([
            ...educationalExperience,
            {
                school: "",
                achievement: "",
                start: "",
                end: "",
                id: Math.random(1000)
            }
        ])
    };

    const deleteExperienceHandler = (e, id) => {
        e.preventDefault();

        if (educationalExperience.length === 1) {
            alert("Cannot delete this! Minimum 1 experience field");
            return;
        }

        setEducationalExperience(educationalExperience.filter(exp => {
            return exp.id !== id;
        }))
    }

    return (
        <div>
            <h2>Education</h2>
            {
                educationalExperience.map(experience => {
                    return (
                        <div
                            className={styles["experience-container"]} 
                            key={experience.id}>
                            <EducationalInput
                                experience={experience}
                                setEducationalExperience={setEducationalExperience}
                            />
                            <div className={styles["btns-container"]}>
                                <button 
                                    className={styles["add-btn"]}
                                    onClick={addExperienceHandler}>
                                    Add More Experience
                                </button>
                                <button
                                    className={styles["delete-btn"]}
                                    onClick={e => deleteExperienceHandler(e, experience.id)}>
                                    Delete Experience
                                </button>
                            </div>
                        </div>
                    ) 
                })
            }
        </div>
    );
};

export default EducationFormSection;