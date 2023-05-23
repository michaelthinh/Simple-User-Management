import "./User.css";

const User = (props) => {
    const deleteHandler = () => {
        props.onDeleteData(props.user.id);
    };
    return (
        <div className="user">
            <div className="user__info">
                {props.user.name} ({props.user.age} years old)
            </div>
            <button className="user__control" onClick={deleteHandler}>
                Delete
            </button>
        </div>
    );
};

export default User;
