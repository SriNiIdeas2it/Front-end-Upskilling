export const Theme=({name,age,message})=>{
    return (
        <>
        <div ClassName="light">            
             <span>light Theme</span><br/>
             {name}-
             {age}-{message}
        </div>
        </>
    )
}