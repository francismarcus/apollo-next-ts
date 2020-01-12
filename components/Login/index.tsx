import { Formik } from 'formik';
import LoginForm from './LoginForm';
import { schema } from './schema';
import { loginMutation, saveToken } from 'graphql/Mutations/authMutation';
import { useMutation } from '@apollo/react-hooks';
import { NextComponentType } from 'next';
import { useLoginMutation } from 'graphql/generated';
import Router from 'next/router';

const Login: React.FC = () => {
	const [login, { error, client }] = useLoginMutation();

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
				});

				const { token } = response.data!.login;
				if (token && client) {
					saveToken(token, client);
					Router.push('/dashboard');
				}
			}}
		>
			{({ submitForm }) => <LoginForm submitForm={submitForm} error={error} />}
		</Formik>
	);
};

interface FieldProps {
	email: string;
	password: string;
}

export default Login;
