import classes from './Results.module.css';
import ResultsImageComponent from './ResultsImageComponent';
import DescisionBar from './DescisionBar';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../store/score-choice-slice';

const Results = props => {
    const {userChoiceId, systemChoiceId, userChoice, systemChoice, draw, playerWin} = useSelector(state => state.game);
    const dispatch = useDispatch();
    const showDescision = draw === true || playerWin === true || playerWin === false;
    console.log(showDescision);
    const renderFunc = () => {
        setTimeout(() => {
            dispatch(gameActions.gameResult());
        }, 1500);
    };
    renderFunc();
    const message = draw === true ? 'DRAW' : playerWin === true ? 'YOU WIN' : 'YOU LOSE';
    
    return (
        <div className={classes['results-container']}>
            {!showDescision && <div className={classes.holder}></div>}
            <ResultsImageComponent title='YOU PICKED' id={userChoiceId} alt={userChoice}/>
            {showDescision && <DescisionBar message={message}/>}
            <ResultsImageComponent title='THE HOUSE PICKED' id={systemChoiceId} alt={systemChoice} addStyle='enter-from-right'/>
        </div>
    );
};


export default Results;
