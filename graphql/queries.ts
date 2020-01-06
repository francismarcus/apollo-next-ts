import gql from 'graphql-tag'

export const getMyToken = gql`
	{
		myToken @client
	}
`;
