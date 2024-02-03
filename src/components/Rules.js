import rule from "../images/image-rules-bonus.svg";
import classes from "./Rules.module.css";
import Modal from '../UI/Modal';
import { useDispatch } from 'react-redux';
import { rulesAction } from "../store/rulesSlice";


const Rules = props => {
    const dispatch = useDispatch();
    const onCloseHandler = () => {
        dispatch(rulesAction.toggleShowRules());
    }
    return (
        <Modal onClick={onCloseHandler}>
            <div className={classes['rules-container']}>
                <div className={classes['rules-header']}>
                    <h1>RULES</h1>
                    <button onClick={onCloseHandler}>X</button>
                </div>
                <img src={rule} alt="game-rules" />
            </div>
        </Modal>
    );
};

export default Rules;