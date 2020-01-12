import { Form, Field } from 'formik';
import FormInput from 'components/FormInput';
import Button from 'components/Button';
import Br from 'components/Br';
import { Text, A } from './style';
import { ApolloError } from 'apollo-client';
import Link from 'next/Link'

const SignupForm: React.FC<Props> = ({ submitForm, error }) => (
	<Form>
		<Field name="email" placeholder="Email" label="Email" component={FormInput} />
		<Field name="name" placeholder="Name" label="Name" component={FormInput} />
		<Field
			name="password"
			placeholder="Password"
			label="Password"
			type="password"
			component={FormInput}
		/>
		{error && <p> {error.graphQLErrors[0].message} </p>}
		<Button onClick={submitForm}>Signup</Button>

		<Br />
		<Link href="/login"><A> Login instead </A></Link> 
	</Form>
);

interface Props {
	submitForm: () => Promise<any>;
	error: ApolloError | undefined;
}

export default SignupForm;
