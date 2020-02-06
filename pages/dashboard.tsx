import { NextPage, NextComponentType } from 'next';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { getMyToken } from 'apollo';
import { withApolloContext } from 'interfaces';
import { useEffect } from 'react';
import Hello from 'components/Hello';
import { Program } from 'graphql/generated';
import Nav from 'components/Nav';
import useCurrentUser from 'hooks/useCurrentUser'

const ProgramsMap: React.FC<Props> = ({ programs }): JSX.Element => {
	return (
		<>
			{programs.map((p: Program) => (
				<h1> {p.name} </h1>
			))}
		</>
	);
};
interface Props {
	programs: Program[];
}
const ProgramList: React.FC<Props> = ({ programs }): JSX.Element => {
	return (
		<>
			{programs[1] && <ProgramsMap programs={programs} />}
			{!programs[1] && <h1> You have no programs </h1>}
		</>
	);
};

const LoginPage = dynamic(() => import('./login'));
const MeQuery = dynamic(() => import('graphql/Query/meQuery'));
const Loading = dynamic(() => import('components/Loading'));
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
			<Nav />
			<MeQuery>
				{({ me, loading, error }) => {
					if (loading) return <Loading />;
					if (error) console.log(error)

					return (
						<>
							<Hello name={me.name} />
							<ProgramList programs={me.programs} />
						</>
					);
				}}
			</MeQuery>
		</>
	);
};

Page.getInitialProps = async ({ apolloClient, req }: withApolloContext) => {
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
