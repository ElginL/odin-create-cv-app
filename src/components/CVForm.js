import styles from '../styles/CVForm.module.css';
import SelfIntroductionInput from './SelfIntroductionInput';
import EducationFormSection from './EducationFormSection';
import GeneralInfoInput from './GeneralInfoInput';
import WorkExperienceFormSection from './WorkExperienceFormSection';

const CVForm = ({
    setSelfIntroduction,
    setGeneralInformation,
    educationalExperience,
    setEducationalExperience,
    workExperience,
    setWorkExperience
}) => {
    return (
        <div className={styles["container"]}>
            <div className={styles["top-card-design"]}></div>
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
            </div>
        </div>
    );
};

export default CVForm;