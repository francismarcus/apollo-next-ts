import { Formik } from 'formik';
import LoginForm from './LoginForm';
import { schema } from './schema';
import { saveToken } from 'graphql/Mutations/authMutation';
import { useLoginMutation } from 'graphql/generated';
import Router from 'next/router';
import { useEffect } from 'react';
import Spinner from 'components/Spinner'

const Login: React.FC = () => {
	const [login, { error, client, loading }] = useLoginMutation();

	useEffect(() => {
		checkStorage();
		return () => {
			<Spinner />
		};
	}, []);

	async function checkStorage() {
		const token = await localStorage.getItem('authToken');
		if (token) {
			await saveToken(token, client);
			return Router.push('/dashboard');
		}
	}

	if (loading) return <Spinner />
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
					await localStorage.setItem('authToken', token);
					return Router.push('/dashboard');
				}
			}}
		>
			<LoginForm error={error} />
		</Formik>
	);
};

interface FieldProps {
	email: string;
	password: string;
}

export default Login;
