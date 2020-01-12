import styled from 'styled-components';
import Login from 'components/Login';
import Link from 'next/Link';

export default () => {
	return (
		<Container>
			<Wrapper>
				<Login />
			</Wrapper>
		</Container>
	);
};

export const Wrapper = styled.div`
	width: 550px;
	padding: 25px;
	box-sizing: border-box;
`;

export const Container = styled.div`
	width: 100%;
	height: calc(100vh - 90px);
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
`;

export const Text = styled.p`
	width: 100px;
	margin: 20px auto 0 auto;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	color: #ffa85a;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;
