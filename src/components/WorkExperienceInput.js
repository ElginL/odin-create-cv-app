import FieldInput from "./FieldInput";

const WorkExperienceInput = ({
    experience,
    setWorkExperience
}) => {
    const onChangeHandler = (e, header) => {
        setWorkExperience(initialExp => {
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
                header="Company"
                placeholder="Your past company"
                onChangeHandler={onChangeHandler}
            />
            <FieldInput
                header="Position"
                placeholder="Your position at this company"
                onChangeHandler={onChangeHandler}
            />
            <FieldInput
                header="Task"
                placeholder="Your main task"
                onChangeHandler={onChangeHandler}
            />
            <FieldInput
                header="Start"
                placeholder="Start date of work"
                onChangeHandler={onChangeHandler}
            />
            <FieldInput
                header="End"
                placeholder="End date of work"
                onChangeHandler={onChangeHandler}
            />
        </div>
    );
};

export default WorkExperienceInput;