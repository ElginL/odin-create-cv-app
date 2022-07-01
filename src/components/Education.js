import styles from '../styles/Education.module.css';

const Education = ({ education }) => {
    return (
        <div>
            <h2 className={styles["header"]}>
                Education
            </h2>
            {
                education.map(edu => (
                    <div
                        className={styles["education-container"]}
                        key={edu.id}>
                        <p className={styles["details"]}>
                            <strong>{edu.start} - {edu.end}</strong>
                        </p>
                        <div className={styles["information-container"]}>
                            <p className={styles["details"]}>
                                <strong>{edu.school}</strong>
                            </p>
                            <p className={styles["details"]}>
                                {edu.achievement}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default Education;