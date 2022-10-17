const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers:{
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    },
});

module.exports = {
    reducers: cakeSlice.reducer,
    cakeActions: cakeSlice.actions
}
// module.exports.cakeActions = cakeSlice.actions;