
import { Form, Field } from 'formik'
import FormInput from 'components/FormInput';
import Button from 'components/Button';
import Br from 'components/Br';
import { Text } from './style';
import { ApolloError } from 'apollo-client';

const LoginForm: React.FC<Props> = ({
    submitForm,
    error
}) => (
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
    )

interface Props {
    submitForm: () => Promise<any>
    error: ApolloError | undefined
}

export default LoginForm

