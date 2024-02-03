import classes from './ImageComponent.module.css';
import { gameActions } from '../../store/score-choice-slice';
import { useDispatch } from 'react-redux';


const ImageComponent = props => {
    const {image, alt, id} = props;
    const dispatch = useDispatch();
    const onClickHandler= () => {
        dispatch(gameActions.playToggle(id))
    };

    const addStyle = classes[alt];

    return (
        <button className={`${classes['image-container']} ${addStyle}`} onClick={onClickHandler}>
            <img src={image} alt={alt} />
        </button>
    );
};

export default ImageComponent;