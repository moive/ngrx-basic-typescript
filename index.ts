import {
	decreaseAction,
	divideAction,
	increaseAction,
	multipyAction,
	resetAction,
} from "./counter/counter.actions";
import { Action } from "./ngrx-fake/ngrx";

function reducer(state = 10, action: Action) {
	switch (action.type) {
		case "INCREMENT":
			return (state += 1);
		case "DECREMENT":
			return (state -= 1);
		case "MULTIPLY":
			return state * action.payload;
		case "DIVIDE":
			return state / action.payload;
		case "RESET":
			return (state = 0);
		default:
			return state;
	}
}

console.log("INCREASE: ", reducer(10, increaseAction));
console.log("DECREASE: ", reducer(10, decreaseAction));
console.log("MULTIPY: ", reducer(10, multipyAction));
console.log("DIVIDE: ", reducer(10, divideAction));
console.log("RESET: ", reducer(10, resetAction));
