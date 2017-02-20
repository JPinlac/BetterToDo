import { connect } from 'react-redux';
import { toggleToDo, removeToDo, editToDo } from '../Actions/actions';
import ToDoList from '../Components/ToDoList'

const getVisibleToDos = (toDos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return toDos;
        case "SHOW_FINISHED":
            return toDos.filter(toDo => {
                return toDo.completed
            })
        case "SHOW_UNFINISHED":
            return toDos.filter(toDo => {
                return !toDo.completed
            })
        default:
            throw new Error('Unknowfilter: ' + filter);
    }
};

const mapStateToProps = (state) => {
    return {
        toDos: getVisibleToDos(state.toDos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToDoClick: (id) => {
            dispatch(toggleToDo(id))
        },
        onRemoveClick: (id) => {
            dispatch(removeToDo(id))
        },
        onEditClick: (id, text) => {
            dispatch(editToDo(id, text))
        }
    }
};

const VisibleToDoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);

export default VisibleToDoContainer;

