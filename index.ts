import { configureStore } from "@reduxjs/toolkit";
import {
	decreaseAction,
	divideAction,
	increaseAction,
	multipyAction,
	resetAction,
} from "./counter/counter.actions";
import { counterReducer } from "./counter/counter.reducer";
// import { Store } from "./store";

/*const store = new Store(counterReducer, 10);

console.log("STATE INITIAL", store.getState());

store.dispatch(increaseAction);
console.log("INCREASE: ", store.getState());

store.dispatch(decreaseAction);
console.log("DECREASE: ", store.getState());

store.dispatch(multipyAction);
console.log("MULTIPY: ", store.getState());

store.dispatch(divideAction);
console.log("DIVIDE: ", store.getState());

store.dispatch(resetAction);
console.log("RESET: ", store.getState());
*/

const store = configureStore({
	reducer: counterReducer,
});
// const store: Store = createStore(counterReducer);

store.subscribe(() => {
	console.log("Subs: ", store.getState());
});

store.dispatch(increaseAction);
store.dispatch(decreaseAction);
store.dispatch(multipyAction);
store.dispatch(divideAction);
store.dispatch(resetAction);
