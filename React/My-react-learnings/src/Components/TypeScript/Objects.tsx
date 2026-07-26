 type Propstypes = {
    name: string;
    age: number;
    isLoggedIn:boolean;
  };
 const Objects=(data:{data:Propstypes}) => {
    return (
        <>
        {data.data.isLoggedIn==true?`Welcome ${data.data.name}`:`Welcome Guest`} !.
        </>
    )
}
export default Objects;