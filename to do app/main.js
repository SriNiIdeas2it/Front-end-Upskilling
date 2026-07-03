let todo_array=[];

function validate(){
    let isvalidate=false;
if(document.getElementsByClassName("txt_todo")[0].value==""){
           alert("please enter todo?")  ;   
           isvalidate=true;                      
        }
  return isvalidate;
}
function ToDo(arg,todo_id=null){
let isvalidate=false;
 
    if(arg=="ADD"){
       if(validate()){
        return ;
       }

    let  i= todo_array.length;

    todo_array.push({
            todo:document.getElementsByClassName("txt_todo")[0].value,
            id:i+1
        }); 
        console.log(todo_array);

      
        
    }
    else if(arg=="DELETE"){
      todo_array =  todo_array.filter((item)=>item.id != todo_id);
    }
    else if(arg=="EDIT"){
        let filteredarry=todo_array.filter((item)=>item.id==todo_id);
        document.getElementsByClassName("txt_todo")[0].value=filteredarry[0].todo; 
        document.getElementsByClassName("btn_update")[0].style.display = 'inline-block';
        document.getElementsByClassName("btn_submit")[0].style.display = 'none';
        document.getElementsByClassName("btn_update")[0].setAttribute("todoid",todo_id);
    }
    else if(arg=="UPDATE"){
         if(validate()){
        return ;
       }       
        todo_array.forEach((item,cnt)=>{
                if(item.id==parseInt(document.getElementsByClassName("btn_update")[0].getAttribute("todoid"))){
                item.todo= document.getElementsByClassName("txt_todo")[0].value;                
            }
        })
    }

      
    let todo_builder="";
    let todo_items=todo_array.map((item)=>{
            return `<div id='todo_${item.id}'><span>${item.todo}</span><button onclick=ToDo('DELETE','${item.id}')>Delete</button><button onclick=ToDo('EDIT','${item.id}')>Edit</button></div>`
    }).join("");
    todo_builder+=`<div>${todo_items}</div>`;
    document.getElementsByClassName("todo_grid")[0].innerHTML=todo_builder;           
      
}