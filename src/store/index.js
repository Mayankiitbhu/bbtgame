import { configureStore } from "@reduxjs/toolkit";
import rulesSlice from "./rulesSlice";
import scoreChoiceSlice from "./score-choice-slice";


const store = configureStore({
    reducer : {
        rules : rulesSlice.reducer,
        game : scoreChoiceSlice.reducer
    }
});


export default store;