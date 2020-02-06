import { Form, Field, useField } from 'formik';
import FormInput from 'components/FormInput';
import Button from 'components/Button';
import Br from 'components/Br';
import { Text, A } from './style';
import { ApolloError } from 'apollo-client';
import Link from 'next/Link';

const SignupForm: React.FC<Props> = ({ error, ...props }) => {
	return (
		<Form>
			<FormInput name="email" placeholder="Email" label="Email"  />
			<FormInput name="name" placeholder="Name" label="Name" />
			<FormInput
				name="password"
				placeholder="Password"
				label="Password"
				type="password"
			/>
			{error && <p> {error.graphQLErrors[0].message} </p>}
			<Button type="submit">Signup</Button>

			<Br />
			<Link href="/login">
				<A> Login instead </A>
			</Link>
		</Form>
	);
};
interface Props {
	error: ApolloError | undefined;
}

export default SignupForm;
