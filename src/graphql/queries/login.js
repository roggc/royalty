__dev__&&console.log('src/graphql/queries/login')

import graphql from 'src/graphql/graphql'

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
