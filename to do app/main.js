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
    
  let maxcount = 0;
  if(todo_array.length){
   const filteredary= todo_array.reduce((previous, current) => {
    return current.id > previous.id ? current : previous;
            });
maxcount= parseInt(filteredary.id)+1;
  }
    todo_array.push({
            todo:document.getElementsByClassName("txt_todo")[0].value,
            id:maxcount
        }); 
        console.log(todo_array);

      
        
    }
    else if(arg=="DELETE"){
      todo_array =  todo_array.filter((item)=>item.id != todo_id);
    }   
    load_todoList();
      
}

function EditToDo(todo_id){
        let filteredarry=todo_array.filter((item)=>item.id==todo_id);

    document.getElementById("todo_"+todo_id).innerHTML=`<input type='text' id='txt_todo_${todo_id}' value='${filteredarry[0].todo}'/>`
        // document.getElementsByClassName("txt_todo")[0].value=filteredarry[0].todo; 
         document.getElementsByClassName("btn_edit_"+todo_id)[0].style.display = 'none';
         document.getElementsByClassName("btn_update_"+todo_id)[0].style.display = 'inline-block';
         document.getElementsByClassName("btn_update_"+todo_id)[0].setAttribute("todoid",todo_id);
}

function UpdateToDo(todo_id){
todo_array.forEach((item,cnt)=>{
                if(item.id==parseInt(document.getElementsByClassName("btn_update_"+todo_id)[0].getAttribute("todoid"))){
                item.todo= document.getElementById("txt_todo_"+todo_id).value;                
            }
        })

        load_todoList();
}

function load_todoList(){

    let todo_builder="";
    let todo_items=todo_array.map((item)=>{
            return `<div class='todo-row'><span id='todo_${item.id}'>${item.todo}</span>
            <div>           
            <button class='btn_edit_${item.id}' onclick=EditToDo('${item.id}')>Edit</button>
            <button class='btn_update_${item.id}' style="display:none;" onclick=UpdateToDo('${item.id}')>Update</button>
            <img class='delete_logo' src='delete.png' onclick=ToDo('DELETE','${item.id}')></img>
            </div></div>`
    }).join("");
    todo_builder+=`<div>${todo_items}</div>`;
    document.getElementsByClassName("todo_grid")[0].innerHTML=todo_builder;        
}
