import styles from '../styles/WorkExperience.module.css';

const WorkExperience = ({ workExperience }) => {
    return (
        <div>
            <h2 className={styles["header"]}>Work Experience</h2>
            {
                workExperience.map(experience => (
                    <div 
                        className={styles["experience-container"]}
                        key={experience.id}>
                        <p className={styles["details-text"]}>
                            <strong>{experience.start} - {experience.end}</strong>
                        </p>
                        <div>
                            <p className={styles["details-text"]}>
                                <strong>{experience.company}</strong>
                            </p>
                            <p className={styles["details-text"]}>
                                {experience.position}
                            </p>
                            <p className={styles["details-text"]}>
                                {experience.task}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default WorkExperience;