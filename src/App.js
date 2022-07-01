import React, { useState } from 'react';
import styles from './styles/App.module.css';
import CVForm from './components/CVForm';
import CVOutput from './components/CVOutput';

const App = () => {
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
        <div className={styles["container"]}>
            <CVForm
                setSelfIntroduction={setSelfIntroduction}
                setGeneralInformation={setGeneralInformation}
                educationalExperience={educationalExperience}
                setEducationalExperience={setEducationalExperience}
                workExperience={workExperience}
                setWorkExperience={setWorkExperience}
            />
            <CVOutput />
        </div>
    )
}

export default App;