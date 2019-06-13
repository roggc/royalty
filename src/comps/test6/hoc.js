import hoc from 'src/hocs/hoc'
export default
hoc
(
  (
    ()=>
    (
      {
        show:true
      }
    )
  )
  ()
)
(
  state=>setState=>
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
)
