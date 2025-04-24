import React from 'react';
import IconButton from '../template/iconButton';
export default function TodoList(props){
    const list = props.list || [];
    const renderRows = () => {
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton 
                        style='success' 
                        icon='check' 
                        hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}>
                    </IconButton>

                    <IconButton 
                        style='warning' 
                        icon='undo' 
                        hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}>
                    </IconButton>

                    <IconButton 
                        style='danger' 
                        icon='trash-o' 
                        hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}
                    />
                </td>
            </tr>
        ));
    };

    return (
        <table className='table'>
            <thead className='tableActions'>
                <tr>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               {list.length > 0 ? renderRows() : (
                    <tr>
                        <td colSpan="1">No data.</td>
                    </tr>
                )}
            </tbody>
        </table>
    );

}