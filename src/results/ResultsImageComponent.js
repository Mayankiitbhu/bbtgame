import classes from './ResultsImageComponent.module.css';
import { optionList } from '../store/score-choice-slice';


const ResultsImageComponent = props => {
    const addStyle = classes[props.alt]
    const addTransition = props.addStyle ? classes[props.addStyle] : undefined;
    console.log("title " + props.title + " win " + props.win);
    return (
        <div className={classes['tile-container']}>
            <div>{props.title}</div>
            <div className={`${classes['image-container']} ${addStyle} ${addTransition}`}>
                <img src={optionList[props.id].image} alt={optionList[props.id].option} />
            </div>
        </div>
    );
};

export default ResultsImageComponent;