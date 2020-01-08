import { useMutation, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const signupMutation = gql`
	mutation SignupMutation($email: string, $password: string, $name: string) {
		signup(email: $email, password: $password, name: $name) {
			token
			user {
				id
			}
		}
	}
`;

export default () => {
	const client = useApolloClient();
	const [mutate] = useMutation(signupMutation);

	return async (email: string, password: string, name: string): Promise<void> => {
		const response = await mutate({
			variables: { email, password, name }
		});

		const { token } = response.data.signup
		return client.writeData({
			data: {
				myToken: token
			}
		});
	};
};
