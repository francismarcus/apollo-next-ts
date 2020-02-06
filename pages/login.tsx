import styled from 'styled-components';
import Login from 'components/Login';

export default (props: any) => {
	return (
		<Container>
			<Wrapper>
				<Login />
			</Wrapper>
		</Container>
	);
};
//
export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Poppins', sans-serif;
	background-color: ${({ theme }) => theme.bgColor};
`;

export const Wrapper = styled.div`
	width: 550px;
	padding: 25px;
	box-sizing: border-box;
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

export const Corner = styled.div`
	order: -1;
	text-align: right;
`;
