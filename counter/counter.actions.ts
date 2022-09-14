import { Action } from "../ngrx-fake/ngrx";

export const increaseAction: Action = {
	type: "INCREMENT",
};
export const decreaseAction: Action = {
	type: "DECREMENT",
};
export const multipyAction: Action = {
	type: "MULTIPLY",
	payload: 2,
};
export const divideAction: Action = {
	type: "DIVIDE",
	payload: 2,
};

export const resetAction: Action = {
	type: "RESET",
};
