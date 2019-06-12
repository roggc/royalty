import hoc from 'src/hocs/hoc'
const setProps=state=>setState=>
{
  const click=()=>
  {
    setState
    (
      {
        ...state,
        show:false
      }
    )
  }
  const props=
  {
    click
  }
  return props
}
const iState=
(
  ()=>
  (
    {
      show:true
    }
  )
)
()
export default hoc(iState)(setProps)
