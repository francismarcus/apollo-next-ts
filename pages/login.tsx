import { NextPage } from 'next';
import MeQuery from 'graphql/Query/meQuery';

import Login from 'components/Login';
export default () => (
	<>
		<Login />
		<MeQuery>
			{({ me, loading }) => {
				if (loading) return <Loading />;
				console.log(me);
				return <h1> {me ? me.name : 'Hello, World' } </h1>;
			}}
		</MeQuery>
	</>
);

const Loading = () => <div></div>;
