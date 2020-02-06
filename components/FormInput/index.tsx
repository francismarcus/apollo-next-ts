import * as React from 'react';
import { Container, Label, Input, ErrorMessage } from './style';
import { FieldProps, useField } from 'formik';

const FormInput = ({ label, ...props }: Props) => {
	const [field, meta] = useField(props);
	const errorMsg = meta.touched && meta.error;
	return (
		<Container>
			{label && <Label htmlFor={props.id || props.name}> {label} </Label>}
			<Input
				{...field} {...props} 
			/>
			{errorMsg && <ErrorMessage> {meta.error} </ErrorMessage>}
		</Container>
	);
};

type Props = any
export default FormInput;
