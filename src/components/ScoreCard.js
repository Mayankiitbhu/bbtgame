import classes from './ScoreCard.module.css';
const ScoreCard = props => {
    return (
        <div className={classes['score-card']}>
            <span>SCORE</span>
            <h1>{props.score}</h1>
        </div>
    );
};

export default ScoreCard;