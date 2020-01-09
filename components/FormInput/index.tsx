import * as React from 'react';
import { Container, Label, Input, ErrorMessage } from './style';
import { FieldProps } from 'formik';

const FormInput: React.StatelessComponent<Props> = ({
	field: { name, value, onChange },
	form: { errors, touched },
	label,
	placeholder,
	type
}) => {
	const errorMsg = touched[name] && errors[name];
	return (
		<Container>
			{label && <Label> {label} </Label>}
			<Input
				name={name}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				error={!!errorMsg}
			/>
			{errorMsg && <ErrorMessage> {errorMsg} </ErrorMessage>}
		</Container>
	);
};

interface Props extends FieldProps {
	label: string;
	type: string;
	placeholder: string;
}

export default FormInput;
