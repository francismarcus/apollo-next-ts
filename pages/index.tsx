import { NextPage, NextPageContext, NextComponentType } from 'next';
import Hello from 'components/Hello';
import gql from 'graphql-tag';

interface Context extends NextPageContext {
	apolloClient: any;
}

interface Props {
	data: any;
}

const Home: NextPage<Props> = ({ data }) => {
	return <Hello name={data.name} />
};

Home.getInitialProps = async ({ apolloClient }: Context) => {
	const { loading, errors, data } = await apolloClient.query({ query: getMe });
	return { data: data.me };
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
