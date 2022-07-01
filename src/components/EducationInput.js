import FieldInput from "./FieldInput";

const EducationInput = ({
    experience,
    setEducationalExperience
}) => {
    const onChangeHandler = (e, header) => {
        setEducationalExperience(initialExp => {
            return (
                initialExp.map(exp => {
                    if (exp.id === experience.id) {
                        return {
                            ...exp,
                            [header.toLowerCase()]: e.target.value
                        };
                    }

                    return exp;
                })
            )
        })
    }

    return (
        <div>
            <FieldInput
                header="School"
                placeholder="Your past school"
                onChangeHandler={onChangeHandler}
            />
            <FieldInput
                header="Achievement"
                placeholder="Your main achievement in this school"
                onChangeHandler={onChangeHandler}
            />
            <FieldInput
                header="Start"
                placeholder="Start date at this school"
                onChangeHandler={onChangeHandler}
            />
            <FieldInput
                header="End"
                placeholder="End date of School"
                onChangeHandler={onChangeHandler}
            />
        </div>
    );
};

export default EducationInput;