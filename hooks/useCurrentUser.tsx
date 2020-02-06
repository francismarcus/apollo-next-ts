import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { User } from 'graphql/generated';
import { path } from 'ramda';

interface iCurrentUser {
	user?: User;
	name?: User['name'];
	id?: string
}

type useCurrentUser = () => iCurrentUser;

/**
 * 
 * @returns {Object} with the user object, the name and the id of the currentUser 
 * @example const { name, user, id } = useCurrentUser()
 */
const useCurrentUser = (): iCurrentUser => {
	const { data } = useQuery(getCurrentUser);

	return {
		user: path(['me'], data),
		name: path(['me', 'name'], data),
		id: path(['me', 'id'], data)
	};
};

const getCurrentUser = gql`
	query {
		me {
			name
			id
		}
	}
`;

export default useCurrentUser;
