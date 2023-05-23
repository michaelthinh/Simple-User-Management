import { useState } from "react";

import "./Form.css";
import Wrapper from "../UI/Wrapper";

const Form = (props) => {
    const [enteredName, setEnteredName] = useState("");

    const [enteredAge, setEnteredAge] = useState("");

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };
    const submitFormHandler = (e) => {
        e.preventDefault();

        if (enteredName.trim().length === 0) {
            props.onCheckInvalid("Name field cannot be empty!");
            return;
        }
        if (enteredAge < 0 || enteredAge === "") {
            props.onCheckInvalid("Age number has to be larger than 0");
            return;
        }
        props.onCheckInvalid("");
        const newUser = {
            id: Math.random(),
            name: enteredName,
            age: enteredAge,
        };
        props.onGetData(newUser);
        setEnteredAge("");
        setEnteredName("");
    };
    return (
        <Wrapper>
            <form onSubmit={submitFormHandler}>
                <div className="form-box">
                    <div className="form-item">
                        <label>Username</label>
                        <input
                            type="text"
                            value={enteredName}
                            onChange={nameChangeHandler}
                        ></input>
                    </div>
                    <div className="form-item">
                        <label>Age</label>
                        <input
                            type="number"
                            value={enteredAge}
                            step="1"
                            onChange={ageChangeHandler}
                        ></input>
                    </div>
                </div>

                <button type="submit" className="form-button">
                    Add User
                </button>
            </form>
        </Wrapper>
    );
};

export default Form;
