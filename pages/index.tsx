import { NextPage, NextPageContext, NextComponentType } from 'next';
import Hello from 'components/Hello';
import gql from 'graphql-tag';
import Router from 'next/router';
import { getMyToken } from '../apollo'
import {MeComponent} from 'graphql/generated'

interface Context extends NextPageContext {
	apolloClient: any;
}

interface Props {
	Me: any;
}

const Home: NextPage<Props> = ({ Me }) => {

	return (
		<>
			<Hello name={Me.name} />
			<button onClick={() => Router.push('/login')}> login </button>
		</>
	);
};

Home.getInitialProps = async ({ apolloClient }: Context) => {
	let Me = {
		name: ''
	}
	const store = await apolloClient.cache.readQuery({
		query: getMyToken
	});
	console.log(store)
	const { myToken } = store;
	if (myToken) {
	const { loading, error, data } = await apolloClient.query({ query: getMe });

	if (data) Me = data.me
	}
	return { Me }
};

const getMe = gql`
	query {
		me {
			name
			id
		}
	}
`;

export default Home;
