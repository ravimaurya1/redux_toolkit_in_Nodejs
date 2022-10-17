const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../src/features/cake/index').reducers;

const store = configureStore({
    reducer:{
        cake: cakeReducer,
    }
});

module.exports = store