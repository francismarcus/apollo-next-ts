import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

export default () => {
	const { value, enable, disable } = useDarkMode();
	const dark = value ? disable : enable;

	return (
		<ComponentContainer>
			<Button
				onClick={dark}
				aria-label="Toggle Dark Mode."
				title="Toggle Dark Mode"
			>
				{value ? (
					<Icon src={require('public/sun.svg')} alt="Light Mode" />
				) : (
					<Icon src={require('public/moon.svg')} alt="Dark Mode" />
				)}
			</Button>
		</ComponentContainer>
	);
};

const Icon = styled.img`
	height: ${({ theme }) => theme.fz.regular};
	width: ${({ theme }) => theme.fz.regular};
	min-width: 18px;
	margin-bottom: 0;
	background-color: transparent;
`;

const ComponentContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 0 0 0 0.75rem;
`;

const Button = styled.button`
	-webkit-appearance: none;
	border: 0;
	margin: 0;
	padding: 0.75rem 0.5rem;
	background: transparent;

	&:focus {
		outline: none;
	  }
`;
