import { useMutation, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';

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

export type Maybe<T> = T | null;
export function saveToken(token: string, client: ApolloClient<object> | any) {
  return client.writeData({
    data: {
      myToken: token
    }
  });
}

export default () => {
	const client = useApolloClient();

	const [mutate, { error }] = useMutation(loginMutation, {
		errorPolicy: 'all',
	});


	return async (email: string, password: string): Promise<any> => {
		const response = await mutate({
			variables: { credentials: { email, password } }
		})
		
		const { token } = response.data.login;
		client.writeData({
			data: {
				myToken: token
			}
		});
		return token
	}
};
