import styles from '../styles/SelfIntroduction.module.css';

const SelfIntroduction = ({ selfIntroduction }) => {
    return (
        <div>
            <h2 className={styles.header}>About Me</h2>
            <p>
                {selfIntroduction}
            </p>
        </div>
    )
};

export default SelfIntroduction;