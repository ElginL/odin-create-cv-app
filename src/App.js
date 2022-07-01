import React, { useState } from 'react';
import styles from './styles/App.module.css';
import CVForm from './components/CVForm';
import CVOutput from './components/CVOutput';
import githubLogo from './assets/githubLogo.png';

const App = () => {
    const [selectedImage, setSelectedImage] = useState();
    const [selfIntroduction, setSelfIntroduction] = useState("");
    const [generalInformation, setGeneralInformation] = useState({});
    const [educationalExperience, setEducationalExperience] = useState([{
        school: "",
        achievement: "",
        start: "",
        end: "",
        id: Math.random(1000)
    }]);
    const [workExperience, setWorkExperience] = useState([{
        company: "",
        position: "",
        task: "",
        start: "",
        end: "",
        id: Math.random(1000)
    }]);

    return (
        <div className={styles["page"]}>
            <header className={styles["top-bar"]}>
                <p>Create CV Application</p>
            </header>
            <div className={styles["container"]}>
                <CVForm
                    setSelectedImage={setSelectedImage}
                    setSelfIntroduction={setSelfIntroduction}
                    setGeneralInformation={setGeneralInformation}
                    educationalExperience={educationalExperience}
                    setEducationalExperience={setEducationalExperience}
                    workExperience={workExperience}
                    setWorkExperience={setWorkExperience}
                />
                <CVOutput
                    selectedImage={selectedImage}
                    selfIntroduction={selfIntroduction}
                    generalInformation={generalInformation}
                    educationalExperience={educationalExperience}
                    workExperience={workExperience}
                />
            </div>
            <footer>
                <p>Created By ElginL</p>
                <a href="https://github.com/ElginL" target="_blank">
                    <img 
                        src={githubLogo} 
                        alt="github"
                        className={styles["github-logo"]} 
                    />
                </a>
            </footer>
        </div>
    )
}

export default App;