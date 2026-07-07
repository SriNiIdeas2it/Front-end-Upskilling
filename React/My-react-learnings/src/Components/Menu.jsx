import MenuItem from "./MenuItem";

 const Menu = () => {
    const  handleOrder=(OrderName,OrderPrice)=>{
        alert(`you have ordered ${OrderName} for ${OrderPrice}`);
     }

    
  return (
    <div>
      <MenuItem ItemName="Pizza" ItemPrice="20" onOrder={handleOrder} />
    </div>
  )

}
export default Menu
