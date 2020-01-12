import { Form, Field } from 'formik';
import FormInput from 'components/FormInput';
import Button from 'components/Button';
import Br from 'components/Br';
import { Text, A } from './style';
import { ApolloError } from 'apollo-client';
import Link from 'next/Link';

const LoginForm: React.FC<Props> = ({ submitForm, error }) => (
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
        <Link href="/signup"><A> Register instead </A></Link> 
	</Form>
);

interface Props {
	submitForm: () => Promise<any>;
	error: ApolloError | undefined;
}

export default LoginForm;
