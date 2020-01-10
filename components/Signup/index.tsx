import { Formik } from 'formik';
import SignupForm from './SignupForm';
import { schema } from './schema';
import { signupMutation, saveToken } from 'graphql/Mutations/authMutation';
import { useMutation } from '@apollo/react-hooks';
import { NextComponentType } from 'next';


const Signup: React.FC = () => {
	const [signup, { error, client }] = useMutation(signupMutation);

	return (
		<Formik
			initialValues={{
				username: '',
				email: '',
				password: ''
			}}
			validationSchema={schema}
			onSubmit={async ({ username, email, password }: FieldProps) => {
				const response = await signup({
					variables: { username, email, password }
				});

				const { token } = response.data.signup;
				if (token && client) {
					saveToken(token, client);
					console.log('push to dashboard');
				}
			}}
		>
			{({ submitForm }) => <SignupForm submitForm={submitForm} error={error} />}
		</Formik>
	);
};

interface FieldProps {
	username: string;
	email: string;
	password: string;
}

export default Signup
