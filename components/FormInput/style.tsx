import styled, { css } from 'styled-components';

interface InputProps {
    error?: boolean
}



const Container = styled.div`
	width: 100%;
	margin: 0 0 30px 0;
	display: flex;
    flex-direction: column;
    align-self: center;
`;

const Label = styled.label`
    margin-bottom: 10px;
    color: ${props => props.theme.primaryText};
	font-size: ${props => props.theme.fz.small};
	font-weight: 700;
	letter-spacing: 0.5px;
`;

const Input = styled.input<InputProps>`
    width: 100%;
    height: 45px;
    margin: 2px;
    padding: ${props => props.theme.spacing.small};
    border-radius: 4px;
    border: 1px solid;
    border-color: rgb(235, 235, 235);
    font-size: ${props => props.theme.fz.small};
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.primaryText};
    ${props =>
        props.error &&
        css`
            color: red;
            border: 1px solid red;
        `};
    &:focus {
        outline: none;
        border: 1px solid #48beff;
    }
`
const ErrorMessage = styled.p`

    top: 77px;
    left: 5px;
    color: red;
    font-size: ${props => props.theme.fz.small};
`

export {
    Container,
    Label,
    Input,
    ErrorMessage
}