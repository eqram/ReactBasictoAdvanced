import { combineReducers } from 'redux';

import factoryReducer from './factoryReducer';
const reducers = {
    factoryStore: factoryReducer
}

const rootReducer = combineReducers({
    ...reducers
});

export default rootReducer;