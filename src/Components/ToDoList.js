import React, { PropTypes } from 'react'
import ToDo from './ToDo';
import './ToDoList.css'

const ToDoList = ({ toDos, onToDoClick, onRemoveClick, onEditClick }) => {
    return (
    <ul>
        { toDos.map(toDo =>
            <ToDo key={toDo.id}
                  {...toDo}
                  onClick={() => onToDoClick(toDo.id)}
                  onRemoveClick={() => onRemoveClick(toDo.id)}
                  onEditClick={(test) =>
                      onEditClick(toDo.id, test)}
            />
        )}
    </ul>
)}

ToDoList.propTypes = {
    toDos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onToDoClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
}

export default ToDoList;