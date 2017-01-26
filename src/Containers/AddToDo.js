import React from 'react';
import { connect } from 'react-redux';
import { addToDo }from '../Actions/actions';

class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.setState({ value: '' });
        this.props.dispatch(addToDo(this.state.value));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <input type='submit' value='submit' />
            </form>
        );
    }
}

AddToDo = connect()(AddToDo);

export default AddToDo;
