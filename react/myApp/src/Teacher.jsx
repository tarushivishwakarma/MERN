import Student from './Student'
const Teacher = () => {
    const Tarushi={
        maths:20,
        hindi:10,
        english:20
    }
    const students=["Tarushi","Shivanshi","Ishita"]
  return (
    <div>
        <Student data={Tarushi} name={students}/>
    </div>
  )
}
export default Teacher