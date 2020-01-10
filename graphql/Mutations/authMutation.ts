import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';

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

export function saveToken(token: string, client: ApolloClient<object> | any) {
	return client.writeData({
	  data: {
		myToken: token
	  }
	});
  }

