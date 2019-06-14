__dev__&&console.log('src/graphql/queries/users')

import graphql from 'src/graphql/index'

const query=
`
  query
  {
    users
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
