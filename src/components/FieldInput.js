import styles from '../styles/FieldInput.module.css'

const FieldInput = ({
    header,
    placeholder,
    onChangeHandler
}) => {
    return (
        <div className={styles["form-field"]}>
            <h3 className={styles["form-field-header"]}>{header}</h3>
            <input 
                type="text" 
                placeholder={placeholder}
                className={styles["form-field-input"]} 
                onChange={e => onChangeHandler(e, header)}
            />
        </div>
    );
};

export default FieldInput;