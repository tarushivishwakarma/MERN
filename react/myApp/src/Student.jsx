const Student = ({data,name}) => {
  return (
    <div>
      <p>Maths:{data.maths}</p>
      <div>
        {
            name.map((students)=>{
                return(
                    <>
                    <ul>
                        <li>{students}</li>
                    </ul>
                    </>
                )
            })
        }
      </div>
    </div>
  )
}
export default Student