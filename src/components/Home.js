import classes from './Home.module.css';
import ScoreCard from './ScoreCard';
import MainContent from './MainContent';
import Card from '../UI/Card';
import Rules from './Rules';
import Results from '../results/Results';

import { useSelector, useDispatch } from 'react-redux';
import { rulesAction } from '../store/rulesSlice';


const Home = props => {
    const dispatch = useDispatch();
    const isShowRules = useSelector(state => state.rules.showRules);
    const {score, playing} = useSelector(state => state.game);
    const onRulesHandler = () => {
        dispatch(rulesAction.toggleShowRules());
    }
    return (
        <>
            <Card>
                <header className={classes['header-border-dimensions']}>
                    <div className={classes['header-text']}>
                        <span>ROCK</span>
                        <span>PAPER</span>
                        <span>SCISSORS</span>
                        <span>LIZARD</span>
                        <span>SPOCK</span>
                    </div>
                    <ScoreCard score={score}/>
                </header>
            </Card>
            {!playing  && <MainContent/>}
            {playing && <Results/>}
            {isShowRules && <Rules />}
            <Card>
                <footer className={classes.footer}>
                    <button onClick={onRulesHandler}>RULES</button>
                </footer>
            </Card>
        </>
    );
};

export default Home;