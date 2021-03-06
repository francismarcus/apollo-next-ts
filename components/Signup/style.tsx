import styled from 'styled-components';

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

export const A = styled.a`
	width: 100px;
	margin: 20px auto 0 auto;
	font-size: 16px;
	font-weight: 600;
	font-style: italic;
	text-align: center;
	color: #ffa85a;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;
