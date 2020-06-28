import React from 'react';
import * as _ from 'context/createProgram/actions';

const withCreateProgramCtxActions = <T extends object>(Component: React.FC<T>): React.ReactNode => {
	const addBase = _.useAddBaseAction();
	const addReps = _.useAddRepsAction();

	const actions = {
		addBase,
		addReps
	};

	return function WrappedComponent(props: T) {
		return <Component {...props} actions={actions} />;
	};
};

export default withCreateProgramCtxActions;
