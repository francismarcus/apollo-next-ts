import { useMutation, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const loginMutation = gql`
	mutation LoginMutation($credentials: LoginInput!) {
		login(credentials: $credentials) {
			token
			user {
				id
			}
		}
	}
`;

export default () => {
	const client = useApolloClient();
	const [mutate] = useMutation(loginMutation);

	return async (email: string, password: string): Promise<void> => {
		const response = await mutate({
			variables: { credentials: { email, password } }
		});

		const { token } = response.data.login;
		return client.writeData({
			data: {
				myToken: token
			}
		});
	};
};
