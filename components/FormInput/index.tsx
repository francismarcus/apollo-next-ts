import * as React from 'react';
import { Container, Label, Input, ErrorMessage } from './style';
import { FieldInputProps, useField } from 'formik';

const FormInput: React.FC<any> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	const errorMsg = meta.touched && meta.error;
	return (
		<Container>
			{label && <Label htmlFor={props.id || props.name}> {label} </Label>}
			<Input {...field} {...props} error={!!errorMsg} />
			{errorMsg && <ErrorMessage> {meta.error} </ErrorMessage>}
		</Container>
	);
};

interface Props<T> extends FieldInputProps<T> {
	label: string;
	id?: string;
}

export default FormInput;
