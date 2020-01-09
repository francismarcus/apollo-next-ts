import { Form, Field, Formik } from 'formik';
import FormInput from 'components/FormInput';
import Button from 'components/Button';
import Br from 'components/Br';
import { Text } from './style';
import { schema } from './schema';
import { loginMutation, saveToken } from 'graphql/Mutations/LoginMutation'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { NextComponentType } from 'next';

const Login: React.FC = () => {
	const [mutate, { error, client }] = useMutation(loginMutation);

	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			validationSchema={schema}
			onSubmit={async ({ email, password }: FieldProps) => {
				const response = await mutate(({
					variables: { credentials: { email, password } }
				}))
				
				const { token } = response.data.login
				if(token && client) {
				saveToken(token, client)
				console.log('push to dashboard')
				}
			}}
		>
			{({ submitForm }) => (
				<Form>
					<Field name="email" placeholder="Email" label="Email" component={FormInput} />
					<Field
						name="password"
						placeholder="Password"
						label="Password"
						type="password"
						component={FormInput}
					/>

					<Button onClick={submitForm}>Login</Button>
					{error && <Text> {error.graphQLErrors[0].message} </Text>}
					<Br />
					<Text onClick={() => console.log('Route to register page')}>Register</Text>
				</Form>
			)}
		</Formik>
	);
};
// LoginForm submitForm error
interface FieldProps {
	email: string;
	password: string;
}

export default Login as NextComponentType
