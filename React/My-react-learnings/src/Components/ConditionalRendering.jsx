
const ConditionalRendering = ({IsActive}) => {
// if(IsActive){
//      return (
//     <div>
//       Online
//     </div>
//   )
// }else{
//     return (
//     <div>
//       Offline
//     </div>)
// }

  return (
    <div>
      {IsActive?"Online":"Offline"}
    </div>
  )
}

export default ConditionalRendering
