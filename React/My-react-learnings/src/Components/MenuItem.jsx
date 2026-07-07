
const MenuItem = ({ItemName,ItemPrice,onOrder}) => {
  return (
   <>
   <span>{ItemName} - {ItemPrice}</span>
   <button onClick={()=>{onOrder(ItemName,ItemPrice)}}>Order</button>
   </>
  )
}

export default MenuItem
