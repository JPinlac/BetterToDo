import React, { Component } from 'react';
import './App.css';
import AddToDo from '../Containers/AddToDo';
import VisibleToDoList from '../Containers/VisibleToDoList';
import FilterLink from '../Containers/FilterLink.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Better To Do</h2>
                </div>
                <AddToDo />
                <VisibleToDoList />
                <FilterLink />
            </div>
        );
    }
}

export default App;
