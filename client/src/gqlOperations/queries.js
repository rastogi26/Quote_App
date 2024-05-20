import {gql} from '@apollo/client'
export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      name
      by{
        _id
        fname
      }
    }
  }
`;

export const GET_MY_PROFILE=gql`
query getMyProfile{
  user:myprofile{
     fname
     lname
     email
     quotes{
      name
     }
  }
}
`

export const GET_USER_BY_ID = gql`
  query getUserById($userid: ID!) {
    user(_id: $userid) {
      _id
      fname
      lname
      email
      quotes {
        name
      }
    }
  }
`;