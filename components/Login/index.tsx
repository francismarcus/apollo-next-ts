import FormInput from 'components/FormInput';
import { Form, Field, Formik } from 'formik';
import Button from 'components/Button';
import Br from 'components/Br';
import { Text } from './style';
import { schema } from './schema';

interface FieldProps {
	email: string;
	password: string;
}

export default () => (
	<Formik
		initialValues={{
			email: '',
			password: ''
		}}
		validationSchema={schema}
		onSubmit={async (values: FieldProps) => {
			console.log(values);
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
				<Br />
				<Text onClick={() => console.log('Route to register page')}>Register</Text>
			</Form>
		)}
	</Formik>
);
