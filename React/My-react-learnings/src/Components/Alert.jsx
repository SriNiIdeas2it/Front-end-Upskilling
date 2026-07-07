import style  from './alert.module.css'
const Alert = ({MessageType}) => {
    console.log({style});
  return (
    <>
    {/* <div className={`alert ${MessageType}`} >
       {MessageType=="success"?"Message Delivered Sucessfully!":"Something went wrong"}.
    </div> */}
    <div className={`${style.alert} ${style[MessageType]}`} >
       {MessageType=="success"?"Message Delivered Sucessfully!":"Something went wrong"}.
    </div>
    </>
  )
}

export default Alert
