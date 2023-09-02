import { useState } from 'react';

function TodoForm(props) {
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault(); // stops refresh of form/page
        console.log()
        if (!value) {
            return;
        }
        props.addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" placeholder="Add Todo...." /> */}
            <input
            value={value}
            type="text"
            placeholder="Add Todo..."
            onChange={(event) => setValue(event.target.value)}
            />
        </form>
    );
}

export default TodoForm;