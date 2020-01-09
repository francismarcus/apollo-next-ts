import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import * as React from 'react';

export const meQuery = gql`
	query me {
		me {
			id
			name
			programs {
				name
				id
			}
		}
	}
`;

export interface Me {
	id: string;
	name: string;
}

interface WithMe {
	me: any;
	loading: boolean;
}

interface Props {
	children: (data: WithMe) => JSX.Element;
}

interface Data {
	me: Me;
}

interface Variables {}

export default class MeQuery extends React.PureComponent<Props> {
	public render() {
		return (
			<Query<Data> query={meQuery}>
				{({ data, loading }) => {
					let me = null;

					if (data && data.me) {
						me = data.me;
					}

					return this.props.children({
						me,
						loading
					});
				}}
			</Query>
		);
	}
}
