import styles from '../styles/ExperienceFormSection.module.css';
import WorkExperienceInput from './WorkExperienceInput';

const WorkExperienceFormSection = ({ workExperience, setWorkExperience }) => {
    const addExperienceHandler = e => {
        e.preventDefault();
        
        setWorkExperience([
            ...workExperience,
            {
                company: "",
                position: "",
                task: "",
                start: "",
                end: "",
                id: Math.random(1000)
            }
        ]);
    };

    const deleteExperienceHandler = (e, id) => {
        e.preventDefault();

        if (workExperience.length === 1) {
            alert("Cannot delete this! Minimum 1 experience field");
            return;
        }

        setWorkExperience(workExperience.filter(exp => {
            return exp.id !== id;
        }));
    };

    return (
        <div>
            <h2>Work Experience</h2>
            {
                workExperience.map(experience => (
                    <div 
                        className={styles["experience-container"]} 
                        key={experience.id}>
                        <WorkExperienceInput
                            experience={experience}
                            setWorkExperience={setWorkExperience}
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
                ))
            }
        </div>
    );
};

export default WorkExperienceFormSection;