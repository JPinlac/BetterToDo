import React, {PropTypes} from 'react';
import './ToDo.css'
import Modal from '../Components/Modal';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            value: ''
        };
    }

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        onRemoveClick: PropTypes.func.isRequired,
        onEditClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    };

    openModal = () => {
        this.setState({isModalOpen: true});
    };

    closeModal = (e) => {
        this.props.onEditClick(this.state.value);
        this.setState({isModalOpen: false});
        this.setState({ value: '' });
        e.preventDefault();
    };

    editChange = (e) => {
        this.setState({ value: e.target.value })
    };

    render() {
        return (
            <div className='toDo'>
                <li onClick={this.props.onClick}
                    style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none'
                    }}>
                    {this.props.text}
                </li>
                <button onClick={this.props.onRemoveClick}>X</button>
                <button onClick={this.openModal}>Edit</button>
                <Modal isOpen={this.state.isModalOpen}
                       transitionName="modal-anim">
                    <h3>Edit To Do</h3>
                    <form onSubmit={this.closeModal}>
                        <input type='text' value={this.state.value} onChange={this.editChange} />
                        <button type='submit'>Edit</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default ToDo;