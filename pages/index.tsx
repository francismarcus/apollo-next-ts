import { NextPage, NextPageContext } from 'next';
import Router from 'next/router';
import Nav from 'components/Nav';
import { useEffect } from 'react';
import Hero from 'components/Hero';


interface Context extends NextPageContext {
	apolloClient: any;
}

interface Props {
	Me: any;
}

const Home: NextPage<Props> = () => {

	return (
		<>
			<Nav />
			<br />

			<div>
				<Hero />
			</div>
		</>
	);
};

export default Home;
