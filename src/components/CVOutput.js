import styles from '../styles/CVOutput.module.css';
import SelfIntroduction from './SelfIntroduction';
import WorkExperience from './WorkExperience';
import Education from './Education';
import defaultImg from '../assets/blankProfile.png';

const CVOutput = ({
    selectedImage,
    selfIntroduction,
    generalInformation,
    educationalExperience,
    workExperience
}) => {
    console.log(selectedImage);
    return (
        <div className={styles["top-container"]}>
            <div className={styles["container"]}>
                <div className={styles["top-design"]}>
                    <p>
                        {generalInformation.Name}
                    </p>
                </div>
                <div className={styles["content-container"]}>
                    <div className={styles["main-content-container"]}>
                        <SelfIntroduction
                            selfIntroduction={selfIntroduction}
                        />
                        <WorkExperience
                            workExperience={workExperience}
                        />
                        <Education
                            education={educationalExperience}
                        />
                    </div>
                    <div className={styles["about-me-container"]}>
                        <h2>Personal Details</h2>
                        {
                            selectedImage === undefined
                                ? <img 
                                    src={defaultImg} 
                                    alt="profile"
                                    className={styles["profile-img"]}
                                  />
                                : <img 
                                    src={selectedImage} 
                                    alt="profile"
                                    className={styles["profile-img"]}
                                />
                        }
                        <div>
                            <h3 className={styles["description"]}>Name</h3>
                            <p className={styles["information"]}>
                                {generalInformation.Name}
                            </p>
                            <h3 className={styles["description"]}>Phone Number</h3>
                            <p className={styles["information"]}>
                                {generalInformation["Phone Number"]}
                            </p>
                            <h3 className={styles["description"]}>Email</h3>
                            <p className={styles["information"]}>
                                {generalInformation.Email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVOutput;