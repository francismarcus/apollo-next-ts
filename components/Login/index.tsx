import { Formik } from 'formik';
import LoginForm from './LoginForm'
import { schema } from './schema';
import { loginMutation, saveToken } from 'graphql/Mutations/authMutation'
import { useMutation } from '@apollo/react-hooks'
import { NextComponentType } from 'next';

const Login: React.FC = () => {
	const [login, { error, client }] = useMutation(loginMutation);

	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			validationSchema={schema}
			onSubmit={async ({ email, password }: FieldProps) => {
				const response = await login({
					variables: { credentials: { email, password } }
				})

				const { token } = response.data.login
				if (token && client) {
					saveToken(token, client)
					console.log('push to dashboard')
				}
			}}
		>
			{({ submitForm }) => (
				<LoginForm
					submitForm={submitForm}
					error={error} />
			)}
		</Formik>
	);
};

interface FieldProps {
	email: string;
	password: string;
}

export default Login as NextComponentType

