import { combineReducers } from 'redux';

import factoryReducer from './factoryReducer';
import boxTypeReducer from './setup/orderSetup/boxTypeReducer'
const reducers = {
    factoryStore: factoryReducer,
    boxTypeStore: boxTypeReducer
}

const rootReducer = combineReducers({
    ...reducers
});

export default rootReducer;