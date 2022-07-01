import styles from '../styles/SelfIntroductionInput.module.css';

const SelfIntroductionInput = ({ setSelfIntroduction }) => {
    const textAreaHandler = e => {
        setSelfIntroduction(e.target.value);
    }
    
    return (
        <div className={styles["container"]}>
            <h2>About Me</h2>
            <textarea
                onChange={textAreaHandler}
                placeholder="Give a short introduction about yourself"
                className={styles["textarea"]}
            />
        </div>
    );
};

export default SelfIntroductionInput;