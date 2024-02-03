import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showRules : false
}

const rulesSlice = createSlice({
    name : 'rulesSlice',
    initialState,
    reducers : {
        toggleShowRules (state) {
            state.showRules = !state.showRules;
        }
    }
});

export const rulesAction = rulesSlice.actions;
export default rulesSlice;