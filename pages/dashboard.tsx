import { NextPage, NextPageContext, NextComponentType } from 'next';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { getMyToken } from 'apollo';
import { withApolloContext } from 'interfaces';
import { useEffect } from 'react';
import Loading from 'components/Loading';
import Hello from 'components/Hello';

const LoginPage = dynamic(() => import('./login'));
const MeQuery = dynamic(() => import('graphql/Query/meQuery'));

const Page: NextComponentType<withApolloContext, {}, withProps> = ({ token }) => {
	useEffect(() => {
		/*
		validate if the user is logged in else in it will replace the current URL with /login.
		The function Router.replace receives the href which is the actual route inside Next (aka the page) and the as which is the route we want to show to the user. 
		Those two let use tell Next.js to use our already loaded page but disguise it as /login in the browser.
		The shallow: true tell Next to do not call getInitialProps, combine with the other two will make Next only change the URL but not doing anything else, this means technically the user is still on dashboard which is rendering LoginPage.
		*/
		if (token) return;
		Router.replace('/dashboard', '/login', { shallow: true });
	}, [token]);

	if (!token) return <LoginPage />;

	return (
		<>
			<MeQuery>
				{({ me, loading }) => {
					if (loading) return <Loading />;
					return <Hello name={me.name} />;
				}}
			</MeQuery>
		</>
	);
};

Page.getInitialProps = async ({ apolloClient }: withApolloContext) => {
	const store: any = await apolloClient.cache.readQuery({
		query: getMyToken
	});
	const { myToken } = store;
	if (!myToken) return { token: false };
	if (myToken) return { token: true };
};

interface withProps {
	token: boolean | undefined;
}

export default Page as NextPage;
