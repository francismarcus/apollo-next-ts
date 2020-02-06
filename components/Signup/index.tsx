import { Formik } from 'formik';
import SignupForm from './SignupForm';
import { schema } from './schema';
import { saveToken } from 'graphql/Mutations/authMutation';
import { useSignupMutation } from 'graphql/generated';
import Router from 'next/router';
import Spinner from 'components/Spinner';

const Signup: React.FC = () => {
	const [signup, { error, client, loading }] = useSignupMutation();

	if (loading) return <Spinner />;
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: ''
			}}
			validationSchema={schema}
			onSubmit={async ({ name, email, password }: FieldProps) => {
				const response = await signup({
					variables: { email, password, name }
				});

				const { token } = response.data!.signup;
				if (token && client) {
					saveToken(token, client);
					Router.push('/dashboard');
				}
			}}
		>
			<SignupForm error={error} />
		</Formik>
	);
};

interface FieldProps {
	name: string;
	email: string;
	password: string;
}

export default Signup;
