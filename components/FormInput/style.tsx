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
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.5px;
	color: #494a4a;
`;
const Input = styled.input<InputProps>`
    width: 100%;
    height: 45px;
    margin: 2px;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid;
    border-color: rgb(235, 235, 235);
    font-size: 16px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    background-color: ${props => props.theme.bgColor};
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
    font-size: 14px;
`

export {
    Container,
    Label,
    Input,
    ErrorMessage
}