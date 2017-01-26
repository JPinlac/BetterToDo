
const toDos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case "REMOVE_TODO":
            return state.filter(todo => {
                return todo.id !== action.id;

            });
        case "TOGGLE_TODO":
            return state.map(todo => {
                if(todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        case "EDIT_TODO":
            return state.map(todo => {
                if(todo.id === action.id) {
                    return Object.assign({}, todo, {
                        text: action.text
                    });
                }
                return todo;
            });
        default:
            return state;
    }
};

export default toDos;