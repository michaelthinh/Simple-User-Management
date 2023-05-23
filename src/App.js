import { useState } from "react";
import Form from "./components/Form/Form";
import UserList from "./components/User/UserList";
import Modal from "./components/UI/Modal";

import "./App.css";

function App() {
    const [lists, setLists] = useState([]);

    const [message, setMessage] = useState("");
    const getDataHandler = (data) => {
        setLists((prev) => [...prev, data]);
    };
    const deleteDataHandler = (selector) => {
        setLists((prevList) => {
            const newList = prevList.filter((item) => item.id !== selector);
            return newList;
        });
    };
    const checkInvalidHandler = (value) => {
        setMessage(value);
    };
    const resetMessageHandler = () => {
        setMessage(null);
    };
    return (
        <div>
            <Form
                onGetData={getDataHandler}
                onCheckInvalid={checkInvalidHandler}
            />
            {lists.length > 0 ? (
                <UserList lists={lists} onDeleteData={deleteDataHandler} />
            ) : (
                <div className="error-message">"Have no user? Add one now"</div>
            )}
            {message && (
                <Modal message={message} onResetMessage={resetMessageHandler} />
            )}
        </div>
    );
}

export default App;
