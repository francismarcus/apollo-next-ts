import { useField } from 'formik';
import styled from 'styled-components';

const FormCheckbox = ({ children, ...props }: React.PropsWithChildren<any>) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' });
	const errorMsg = meta.touched && meta.error;
	return (
		<>
			<Label>
				<input {...field} {...props} type="checkbox" />
				{children}
			</Label>
			{errorMsg && <ErrorMessage> {meta.error} </ErrorMessage>}
		</>
	);
};

export default FormCheckbox;

const Label = styled.label`
	margin-bottom: 10px;
	color: ${props => props.theme.primaryText};
	font-size: ${props => props.theme.fz.small};
	font-weight: 700;
	letter-spacing: 0.5px;
`;

const ErrorMessage = styled.p`
	top: 77px;
	left: 5px;
	color: red;
	font-size: ${props => props.theme.fz.small};
`;
