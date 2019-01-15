import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import factoryReducer from './factoryReducer';
import boxTypeReducer from './setup/orderSetup/boxTypeReducer';
import studentReducer from './studentReducer';
const reducers = {
    factoryStore: factoryReducer,
    boxTypeStore: boxTypeReducer,
    studentStore:studentReducer,
    form: formReducer
}

const rootReducer = combineReducers({
    ...reducers
});

export default rootReducer;