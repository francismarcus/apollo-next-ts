import { Form, Field } from 'formik';
import FormInput from 'components/FormInput';
import Button from 'components/Button';
import Br from 'components/Br';
import { Text, A } from './style';
import { ApolloError } from 'apollo-client';
import Link from 'next/Link';
import Spinner from 'components/Spinner'

const LoginForm: React.FC<Props> = ({ error, ...props }) => (
	<Form>
		<FormInput name="email" placeholder="Email" label="Email" />
		<FormInput
			name="password"
			placeholder="Password"
			label="Password"
			type="password"
		/>

		<Button type="submit">Login</Button>
		{error && <Text> {error.graphQLErrors[0].message} </Text>}
		<Br />
        <Link href="/signup"><A> Register instead </A></Link> 
	</Form>
);

interface Props {
	error: ApolloError | undefined;
}

export default LoginForm;
