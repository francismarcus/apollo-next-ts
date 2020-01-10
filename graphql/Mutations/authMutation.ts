import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';

export const signupMutation = gql`
	mutation Signup($email: String!, $password: String!, $name: String!) {
		signup(email: $email, password: $password, name: $name) {
			token
			user {
				id
			}
		}
	}
`;

export const loginMutation = gql`
	mutation Login($credentials: LoginInput!) {
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

