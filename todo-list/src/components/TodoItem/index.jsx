import './style.css'
const TodoItem = props => {
    //props is always an object eg
    // {"text":"you're cat"}
    //return <div className='todo'>{props.todo.text}</div>;
    return (
        <div className={`todo ${props.todo.isCompleted ? "complete" : ""}`}>
            {props.todo.text}
            <div>
                <button onClick={() => 
                props.completeTodo(props.index)}>Complete</button>
            </div>
            <div>
                <button onClick={() => props.removeTodo(props.index)}>x</button>
            </div>
        </div>
    )
}
export default TodoItem;