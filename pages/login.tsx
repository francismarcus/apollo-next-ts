import { NextPage } from 'next';
import MeQuery from 'graphql/Query/meQuery';
import styled from 'styled-components'

import Login from 'components/Login';
export default () => (
	<Container>
		<Wrapper>
			<Login />
		</Wrapper>
	</Container>
);

const Loading = () => <div></div>;

export const Wrapper = styled.div`
    width: 550px;
    padding: 25px;
	box-sizing: border-box;
`

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
`