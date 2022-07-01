import styles from '../styles/GeneralInfoInput.module.css'
import FieldInput from './FieldInput';

const GeneralInfoInput = ({ 
    setGeneralInformation
}) => {
    const onChangeHandler = (e, header) => {
        setGeneralInformation(initialInfo => {
            return {
                ...initialInfo,
                [header]: e.target.value
            };
        });
    };

    return (
        <div className={styles["container"]}>
            <h2>General Information</h2>
            <FieldInput
                header="Name"
                placeholder="Your Name"
                onChangeHandler={onChangeHandler}
            />
            <FieldInput
                header="Phone Number"
                placeholder="Your Phone Number"
                onChangeHandler={onChangeHandler}
            />
            <FieldInput
                header="Email"
                placeholder="Your Email"
                onChangeHandler={onChangeHandler}
            />
        </div>
    );
};

export default GeneralInfoInput;