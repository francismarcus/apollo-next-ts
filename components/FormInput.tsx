import * as React from 'react';
import styled, { css } from 'styled-components';
import { FieldProps } from 'formik';


interface Props {
    label: string
    onChange: () => void
    value: any
    type: string
    id: string
    placeholder: string
}
const FormInput: React.StatelessComponent<FieldProps & Props> = ({
    field: { name, value, onChange },
    label, placeholder, type
}) => {
  
	return (
		<Container>
            <Label> {label && label} </Label>
			<StyledInput name={name} placeholder={placeholder} type={type} value={value} onChange={onChange} />
			
		</Container>
	);
};


interface InputProps {
    error?: boolean
}

export const Container = styled.div`
	width: 100%;
	margin: 0 0 30px 0;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Label = styled.label`
	margin-bottom: 10px;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.5px;
	color: #494a4a;
`;
export const StyledInput = styled.input<InputProps>`
    width: 100%;
    height: 45px;
    margin: 2px;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid;
    border-color: rgb(235, 235, 235);
    font-size: 14px;
    font-weight: 500;
    font-family: Montserrat;
    box-sizing: border-box;
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
export const ErrorMessage = styled.p`
    position: absolute;
    top: 77px;
    left: 5px;
    color: red;
    font-size: 14px;
`

export default FormInput;


/*


*/