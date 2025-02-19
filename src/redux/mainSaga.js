import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth6698Saga from '../features/EmailAuth6698/redux/sagas';
import CalendarView6697Saga from '../features/CalendarView6697/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth6698Saga,
CalendarView6697Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}