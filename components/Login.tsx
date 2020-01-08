import FormInput from 'components/FormInput';
import styled from 'styled-components';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import Button from 'components/Button';
import Br from 'components/Br';

interface FieldProps {
	email: string;
	password: string;
}

export default () => (
	<Formik
		initialValues={{
			email: '',
			password: ''
		}}
		validate={values => Validate(values)}
		onSubmit={async (values: FieldProps) => {
			console.log(values);
		}}
	>
		{({ submitForm }) => (
			<Form>
				<Field name="email" placeholder="Email" label="Email" component={FormInput} />
				<ErrorMessage component="div" name="email" className="invalid-feedback" />

				<Field
					name="password"
					placeholder="Password"
					label="Password"
					type="password"
					component={FormInput}
				/>
				<ErrorMessage component="div" name="password" className="invalid-feedback" />

				<Button onClick={submitForm}>Login</Button>
				<Br />
				<Text onClick={() => console.log('Route to register page')}>Register</Text>
			</Form>
		)}
	</Formik>
);

export const LogoWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
export const Logo = styled.img`
	width: 200px;
	height: 200px;
`;
export const Text = styled.p`
	width: 100px;
	margin: 20px auto 0 auto;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	color: #5cafb2;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

function Validate(values: { email: string; password: string }) {
	const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	let errors = {} as any;
	if (values.email === '') {
		errors.email = 'Email is required';
	} else if (!emailTest.test(values.email)) {
		errors.email = 'Invalid email address format';
	}
	if (values.password === '') {
		errors.password = 'Password is required';
	} else if (values.password.length < 3) {
		errors.password = 'Password must be 3 characters at minimum';
	}
	return errors;
}
