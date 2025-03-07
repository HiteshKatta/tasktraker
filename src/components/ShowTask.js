
export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {
    
    const handleDelete=(id) =>{
        const updateTaskList=tasklist.filter(todo => todo.id !==id);
        setTasklist(updateTaskList);
    }

    const handleEdit=(id)=>{
        const selectedTask = tasklist.find(todo => todo.id === id);
        setTask(selectedTask)
        

    }
  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>            
            </div>
            <button className="clearAll" onClick={()=> setTasklist([])}>Clear All</button>
        </div>
        <ul>
            { tasklist.map((todo)=>(
            <li key={todo.id}>
                <p>
                    <span className="name">{todo.name}</span>
                    <span className="time">{todo.time}</span>
                </p>
                <i onClick={()=>handleEdit(todo.id)} class="bi bi-pencil-square"></i>
                <i onClick={()=>handleDelete(todo.id)} class="bi bi-trash"></i>
            </li>

            ))}
              
        </ul>
    </section>
  )
}
