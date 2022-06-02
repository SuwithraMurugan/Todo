import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
let[task,settask]=useState("")
let [type,settype]=useState("all")
  let [todo, setToDo]=useState([
    {
    work:"create theme",
    status:false
    },
    {
      work:"Work on wordpress",
      status:false
    },
    {
      work:"build the site",
      status:false
    },
    {
      work:"test the application",
      status:false
    },

  ])
  let handlechange=(e)=>{
    let update=[...todo];
   let item=e;
    item.status=!item.status
    update.splice(update.indexOf(e),1,item)
   setToDo(update)

  }

let add=()=>{
  if(task)
  {
    let newArr=[...todo];
    newArr.push({
      work:task,
      status:false
    })
   settask("") ;
   setToDo(newArr);  
    
  }
}

  return (
    <>
  <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="card card-white">
                <div className="card-body">
                    <form >
                       
                        <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e)=>{settask(e.target.value)}} 
                        onKeyDown={(e)=>{
                          if(e.key==="Enter")
                          {
                            
                            add(task)
                          }
                        }}
                        />
                       
                    </form>
                    <ul className="nav nav-pills todo-nav">
                        <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a></li>
                        <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link">Active</a></li>
                        <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
                    </ul>
                    <div className="todo-list">
                      {
                        todo.map((e,i)=>{
                          return<>
                         { type=="all"?<div className="todo-item" key={i}>
                                     <div classNameName="checker"><span className=" "><input type="checkbox" defaultChecked={e.status} onChange={()=>handlechange(e)}/></span></div>
                                     {e.status?<span><s>{e.work}</s></span>:<span>{e.work}</span>}
                            </div>:
                            type=="completed"?<div className="todo-item" key={i}>
                                     <div classNameName="checker"><span className=" "><input type="checkbox" defaultChecked={e.status} onChange={()=>handlechange(e)}/></span></div>
                                     {e.status?<span>" "</span>:<span>{e.work}</span>}
                            </div>:
                            <div className="todo-item" key={i}>
                                      <div classNameName="checker"><span className=" "><input type="checkbox" defaultChecked={e.status} onChange={()=>handlechange(e)}/></span></div>
                                      {e.status?<span><s>{e.work}</s></span>:<span>" "</span>}
                                      </div>
                          }
                          </>    
                        })
                        
}
                
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
   
  );
}

export default App;