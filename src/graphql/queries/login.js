import graphql from 'src/graphql/index'

const query=
`
  mutation ($email:String!,$psswrd:String!)
  {
    login(email:$email,psswrd:$psswrd)
    {
      res
      {
        name
        email
        id
      }
      error
      {
        name
        message
        function
      }
    }
  }
`

export default graphql(query)
