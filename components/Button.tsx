import * as React from 'react';
import styled from 'styled-components';

interface Props {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.StatelessComponent<Props> = ({ children, onClick, type }) => (
	<Container onClick={onClick} type={type}>
		{children}
	</Container>
);
// width: ${props => (props.fullWidth ? '100%' : '100px')};
export const Container = styled.button`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.color};
	border: 2px solid transparent;
	border-radius: 4px;
	font-weight: 600;
	font-family: Crc;
	color: white;
	cursor: pointer;
	user-select: none;
	pointer-events: 'auto';
	box-shadow: none;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: 'Montserrat', sans-serif;
	font-size: ${props => props.theme.fz.regular};
	font-weight: 700;
	letter-spacing: normal;
	line-height: 24px;
	margin: 0;
	min-width: 71.1935px;
	padding: 10px ${props => props.theme.spacing.base};
	position: relative;
	text-align: center;
	text-decoration: none;
	transition: background 0.2s ease-out, border-color undefined undefined, color undefined undefined;
	width: 100%;
`;

export default Button;
/*
-webkit-appearance: button;

  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: normal;
  line-height: 24px;
  margin: 0;
  min-width: 71.1935px;
  padding: 10px 22px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background .2s ease-out, border-color undefined undefined, color undefined undefined;
  width: 100%;

  */
