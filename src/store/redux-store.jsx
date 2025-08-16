import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducer/homereducer.jsx';

const store = configureStore ({
    reducer: {
    homeReducerService: homeReducer,
    }
});

export default store;