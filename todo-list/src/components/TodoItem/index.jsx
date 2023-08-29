const TodoItem = props => {
    //props is always an object eg
    // {"text":"you're cat"}
    return <div>{props.text}</div>;
}
export default TodoItem;