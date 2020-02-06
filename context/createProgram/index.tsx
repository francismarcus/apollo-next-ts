import React, { createContext, Reducer, Dispatch, PropsWithChildren } from 'react';
import { useImmerReducer } from 'use-immer';
import { Draft } from 'immer';

function createCtx<StateType, ActionType>(
	reducer: Reducer<StateType, ActionType>,
	initialState: StateType
) {
	const defaultDispatch: Dispatch<ActionType> = () => initialState; // we never actually use this
	const ctx = createContext({
		state: initialState,
		dispatch: defaultDispatch // just to mock out the dispatch type and make it not optioanl
	});
	function Provider(props: PropsWithChildren<{}>) {
		const [state, dispatch] = useImmerReducer(reducer, initialState);
		return <ctx.Provider value={{ state, dispatch }} {...props} />;
	}
	return [ctx, Provider] as const;
}

const initialState = {
	base: {
		squat: '',
		bench: ''
	},
	reps: [],
	sessions: '',
	exercises: {
		legs: [],
		push: [],
		pull: [],
		deadlift: [],
		shoulders: []
	}
};

export enum ActionTypes {
	addBase,
	addReps,
	addSessions,
	addLegExercises,
	addPushExercises,
	addPullExercises,
	addDeadliftExercises,
	addShoulderExercises
}

type AppState = typeof initialState;
type Action = { type: ActionTypes; payload: any };

function reducer(draft: Draft<AppState>, { type, payload }: Action): Draft<AppState> {
	switch (type) {
		case ActionTypes.addBase:
			draft.base = payload;
			return;

		case ActionTypes.addReps:
			draft.reps = payload;
			return;

		case ActionTypes.addSessions:
			draft.sessions = payload;
			return;

		case ActionTypes.addLegExercises:
			draft.exercises.legs = payload;
			return;

		case ActionTypes.addPushExercises:
			draft.exercises.push = payload;
			return;

		case ActionTypes.addPullExercises:
			draft.exercises.pull = payload;
			return;

		case ActionTypes.addDeadliftExercises:
			draft.exercises.deadlift = payload;
			return;

		case ActionTypes.addShoulderExercises:
			draft.exercises.shoulders = payload;
			return;
		
		default:
			throw new Error('Cant use reducer without a actiontype')
	}
}

const [ctx, provider] = createCtx(reducer, initialState);
export const createProgramContext = ctx;
export const CreateProgramProvider = provider;
