import { createSlice } from "@reduxjs/toolkit";
import scissors from '../images/icon-scissors.svg';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import lizard from '../images/icon-lizard.svg';
import spock from '../images/icon-spock.svg';


const winMap = new Map([
    [
        'scissors',
        {
            option : 'scissors',
            winsAgainsts : ['paper', 'lizard']
        }
    ],
    [
        'paper',
        {
            option : 'paper',
            winsAgainsts : ['rock', 'spock']
        }
    ],
    [
        'rock',
        {
            option : 'rock',
            winsAgainsts : ['scissors', 'lizard']
        }
    ],
    [
        'lizard',
        {
            option : 'lizard',
            winsAgainsts : ['paper', 'spock']
        }
    ],
    [
        'spock',
        {
            option : 'spock',
            winsAgainsts : ['rock', 'scissors']
        }
    ]
    
])
export const optionList = [
    {
        option : 'scissors',
        index : 0,
        path : '../images/icon-scissors.svg',
        image : scissors
    },
    {
        option : 'paper',
        index : 1,
        path : '../images/icon-paper.svg',
        image : paper
    },
    {
        option : 'rock',
        index : 2,
        path : '../images/icon-rock.svg',
        image : rock
    },
    {
        option : 'lizard',
        index : 3,
        path : '../images/icon-lizard.svg',
        image : lizard
    },
    {
        option : 'spock',
        index : 4,
        path : '../images/icon-spock.svg',
        image : spock
    },
];

const getNameForChoice = id => {
    return optionList.find(item => item.index === id).option
}

const scoreChoiceSlice = createSlice({
    name : 'scoreChoiceSlice',
    initialState : {
        userChoice : undefined,
        score : 0,
        playing : false,
        systemChoice : undefined,
        playerWin : undefined,
        draw : undefined,
        userChoiceId : undefined,
        systemChoiceId : undefined
    },
    reducers : {
        togglePlaying(state) {
            state.playing = !state.playing;
        },
        gameResult(state) {
    
            if (!(state.draw == null) || !(state.playerWin == null)) {
                return;
            }
            if (state.userChoice === state.systemChoice) {
                state.draw = true;
            } else if (winMap.get(state.userChoice).winsAgainsts.includes(state.systemChoice)) {
                state.score = state.score + 1;
                state.playerWin = true;
            } else {
                state.score = state.score - 1;
                state.playerWin = false;
            }
            
        },
        playToggle(state, action) {
            state.playing = !state.playing;
            state.playerWin = undefined;
            state.systemChoice = undefined;
            state.userChoice = undefined;
            state.draw = undefined;
            state.userChoiceId = undefined;
            state.systemChoiceId = undefined;
            if (state.playing) {
                state.userChoiceId = action.payload;
                state.userChoice = getNameForChoice(action.payload);
                const randomNumber = Math.floor(Math.random() * 5); 
                state.systemChoiceId = randomNumber;
                state.systemChoice = getNameForChoice(randomNumber);
            }
        }
    }
});

export const gameActions = scoreChoiceSlice.actions;
export default scoreChoiceSlice;