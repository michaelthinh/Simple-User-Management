import "./Wrapper.css";

const Wrapper = (props) => {
    return <div className="form-wrapper">{props.children}</div>;
};

export default Wrapper;
