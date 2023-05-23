import "./Modal.css";

const Modal = (props) => {
    const closeOverlayHandler = (e) => {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
        props.onResetMessage();
    };

    return (
        <div id="modal" className="overlay">
            <div className="overlay-box">
                <div className="overlay-box__title">Invalid input</div>
                <div className="overlay-box__content">
                    <p>{props.message}</p>
                    <button
                        className="close-modal"
                        onClick={closeOverlayHandler}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
