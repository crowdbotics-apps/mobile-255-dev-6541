import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth6698Reducer from '../features/EmailAuth6698/redux/reducers';
import CalendarView6697Reducer from '../features/CalendarView6697/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth6698: EmailAuth6698Reducer,
CalendarView6697: CalendarView6697Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});