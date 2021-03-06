
let nextToDoId = 0;

export const addToDo = (text) => ({
    type: "ADD_TODO",
    id: nextToDoId++,
    text
})

export const removeToDo = (id) => ({
    type: "REMOVE_TODO",
    id
})

export const editToDo = (id, text) => ({
    type: "EDIT_TODO",
    id,
    text
})

export const toggleToDo = (id) => ({
    type: "TOGGLE_TODO",
    id
})

export const changeVisibilityFilter = (state) => ({
    type: state,
})