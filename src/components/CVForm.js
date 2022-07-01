import styles from '../styles/CVForm.module.css';
import SelfIntroductionInput from './SelfIntroductionInput';
import EducationFormSection from './EducationFormSection';
import GeneralInfoInput from './GeneralInfoInput';
import WorkExperienceFormSection from './WorkExperienceFormSection';

const CVForm = ({
    setSelectedImage,
    setSelfIntroduction,
    setGeneralInformation,
    educationalExperience,
    setEducationalExperience,
    workExperience,
    setWorkExperience
}) => {
    return (
        <div className={styles["container"]}>
            <div className={styles["top-card-design"]}>
                <p>CV Form</p>
            </div>
            <div className={styles["form-container"]}>
                <SelfIntroductionInput
                    setSelfIntroduction={setSelfIntroduction}
                />
                <GeneralInfoInput
                    setGeneralInformation={setGeneralInformation}
                />
                <WorkExperienceFormSection
                    workExperience={workExperience}
                    setWorkExperience={setWorkExperience}
                />
                <EducationFormSection
                    educationalExperience={educationalExperience}
                    setEducationalExperience={setEducationalExperience}
                />
                <div className={styles["upload-btn-container"]}>
                    <input
                        type="file"
                        id="img"
                        className={styles["file-input"]}
                        onChange={e => {
                            setSelectedImage(URL.createObjectURL(e.target.files[0]));
                        }}
                    />
                    <label htmlFor="img" className={styles["upload-btn"]}>
                        <p className={styles["upload-btn-text"]}>
                            Upload Profile Image
                        </p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default CVForm;