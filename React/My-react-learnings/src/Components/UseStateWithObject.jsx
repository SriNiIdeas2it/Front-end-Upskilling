import { useState } from "react"
const UseStateWithObject = () => {
const [User,SetUser]=useState({
    name:"srini",
    age:26,
    mail:"srini@gmail.com",
    address:{
        city:"chennai",
        country:"india"
    }
})
const UpdateName=()=>{
    // SetUser({
    //     name:"vasan"   //this will replace the Setuser to the object which is given inside ,this leads to missing of age and other data.
    // })
    // SetUser({...User,
    //     name:"Srinivasan"                     
    // })
//   SetUser({...User,
//         name:"Srinivasan"      ,
//         address:{
//             city:"salem"   //if its is nested object then we need to use code previous data for both outer and inner shell.
//         }               
//     })
User.name="Ajith"; // updating dom using js will still update but it will not render in UI.
console.log(User);
 SetUser({...User,
        name:"Srinivasan",
        address:{
            ...User.address,
            city:"salem"
        }               
    })
}
  return (
    <div>
      <h1>Name : {User.name}</h1>
      <h2>Age : {User.age}</h2>
      <h3>Email : {User.mail}</h3>
        <h3>City:{User.address.city}</h3>
        <h3>Country:{User.address.country}</h3>

      <button onClick={UpdateName}>Update Name</button>
    </div>
  )
}

export default UseStateWithObject
