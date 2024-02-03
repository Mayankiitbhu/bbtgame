import ReactDOM from "react-dom";
import classes from "./Modal.module.css";


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}/>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        {props.children}
    </div>
};


const overlay = document.getElementById('overlays');

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, overlay)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
        </>
    );
};

export default Modal;