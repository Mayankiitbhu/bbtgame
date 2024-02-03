import classes from './DescisionBar.module.css';
import { useDispatch } from 'react-redux';
import { gameActions } from '../store/score-choice-slice';

const DescisionBar = props => {
    const dispatch = useDispatch();
    const onPlayAgainHandler = () => {
        dispatch(gameActions.playToggle());
    }
    return (
        <div className={`${classes.descisionBar} ${classes['enter-from-bottom']}`}>
            <h1>{props.message}</h1>
            <button onClick={onPlayAgainHandler}>PLAY AGAIN</button>
        </div>
    );
};

export default DescisionBar;