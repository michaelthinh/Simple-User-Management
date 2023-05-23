import "./UserList.css";
import User from "./User";
import Wrapper from "../UI/Wrapper";

const UserList = (props) => {
    const deleteDataHandler = (selector) => {
        props.onDeleteData(selector);
    };

    return (
        <Wrapper>
            {props.lists.map((user) => (
                <User
                    key={user.id}
                    user={user}
                    onDeleteData={deleteDataHandler}
                />
            ))}
        </Wrapper>
    );
};

export default UserList;
