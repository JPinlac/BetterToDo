import React, { Component } from 'react';
import './App.css';
import AddToDo from '../Containers/AddToDo';
import VisibleToDoList from '../Containers/VisibleToDoList';
import Modal from '../Components/Modal';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
    }
    openModal() {
        this.setState({ isModalOpen: true });
    },
    claseModal() {
        this.setState({ isModalOpen: false });
    },

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Better To Do</h2>
                </div>
                <AddToDo />
                <VisibleToDoList />
                 <Modal ulr='https://tryolabs.com/blog/2015/04/13/a-reusable-modal-component-in-react/'
            </div>
        );
    }
}

export default App;
