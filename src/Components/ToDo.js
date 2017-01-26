import React, { PropTypes } from 'react';
import './ToDo.css'

const ToDo = ({ onClick, onRemoveClick, onEditClick, text, completed }) => (
    <div className='toDo'>
        <li onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
            {text}
        </li>
        <button onClick={onRemoveClick}>X</button>
        <button onClick={onEditClick}>Edit</button>
    </div>
)
ToDo.propTypes= {
    onClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default ToDo;