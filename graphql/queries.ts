import gql from 'graphql-tag'

export const getMe = gql`
query {
    me {
        name
        id
    }
}
`;