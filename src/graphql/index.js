export default
query=>cb=>
fetch
(
  __backend__,
  {
    method: 'POST',
    body: JSON.stringify({query}),
    headers:
    {
      'Content-Type': 'application/json'
    },
    credentials:'include',
    mode:'cors'
  }
)
.then(res => res.json())
.then(res => cb(res.data))
