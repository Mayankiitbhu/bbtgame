import classes from './MainContent.module.css';
import ImageComponent from './image-components/ImageComponent';
import Card from '../UI/Card';
import { optionList } from '../store/score-choice-slice';




const MainContent = props => {
    

    return (
        <Card>
            <div className={classes['main-content']}>
                {optionList.map(option => <ImageComponent key={option.index} image={option.image} alt={option.option} id={option.index} />)}
            </div>
        </Card>
    );
};


export default MainContent;