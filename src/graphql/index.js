__dev__&&console.log('src/graphql/index')

export default
query=>variables=>cb=>
fetch
(
  __api__,
  {
    method: 'POST',
    body: JSON.stringify({query,variables}),
    headers:
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials:'include',
    mode:'cors'
  }
)
.then(res=>res.json())
.then(res=>cb(res.data))
