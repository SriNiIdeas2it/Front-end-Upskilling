
import {useState} from 'react';
import './modal.css'
const Todo = () => {
    const [Items,SetItems]=useState([
        {
            id:1,
            text:"Sample todo data"
        }
    ])
    const [AddInput,SetAddInput]=useState("");
    const [UpdateInput,SetUpdateInput]=useState("");
    const [UpdateId,SetUpdateId]=useState("");
    const [IsShowModel,SetIsShowModel]=useState(false);
     const GetInputValue=(e)=>{
        console.log(e.target.value);
        SetAddInput(e.target.value);
    }
      const GetUpdateInputValue=(e)=>{
        console.log(e.target.value);
        SetUpdateInput(e.target.value);
    }
    const HandleAddTodo=(e)=>{
        let maxCount=0;
        if(Items.length>0){
            let tempArry=Items.reduce((previousval,currentval)=>{
                return previousval.id>currentval.id?previousval:currentval
            })
        console.log(parseInt(tempArry.id)+1);
        maxCount=parseInt(tempArry.id)+1
        }

        SetItems([...Items,
            {
                id:maxCount,
                text:AddInput
            }
        ])
    }
    
    console.log(Items);
    const DeleteTodo=(id)=>{
        const AfterDeleted=Items.filter(item=>item.id!==id);
        console.log(AfterDeleted);
        SetItems(AfterDeleted);
    }
    const EditTodo=(id,text)=>{
        SetIsShowModel(true);
        SetUpdateInput(text);
        SetUpdateId(id);

    }
    const UpdateTodo=()=>{
        Items.map((item)=>{
            if(item.id===UpdateId){
                item.text=UpdateInput
            }
        });
        console.log(Items);
        SetItems(Items);
        SetIsShowModel(false)
    }
    
   
  return (
    <>{
        IsShowModel?
        (<div id="myModal" class="modal">  
        <div class="modal-content">
        <div class="modal-header">
            <span class="close" onClick={()=>SetIsShowModel(false)}>&times;</span>
            <h2>Update Todo</h2>
        </div>
        <p>
            <input type='text' name='UpdateTodo' value={UpdateInput} onChange={GetUpdateInputValue}></input>
             <br/><button onClick={UpdateTodo}>Update</button>
        </p>
        </div>
    </div>):null
    }
    
     <div><input type="text" value={AddInput} onChange={GetInputValue}></input> <button onClick={HandleAddTodo}>Add task</button></div>
    <ul>
      {
        Items.map((item)=>{
            return <div key={item.id}><span style={{listStyle:"none"}}>{item.text}</span> <button className={`btn_delete_${item.id}`} onClick={()=>DeleteTodo(item.id)}>Delete</button><button onClick={()=>EditTodo(item.id,item.text)}>Edit</button></div>
        })
      }
    </ul>
    </>   
  )
}

export default Todo
