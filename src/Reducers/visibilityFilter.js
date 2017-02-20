const visibilityFilter = (state = "SHOW_ALL", action) => {
    console.log(state);
    switch (action.type) {
        case "SHOW_ALL":
            return "SHOW_ALL";
        case "SHOW_FINISHED":
            return "SHOW_FINISHED";
        case "SHOW_UNFINISHED":
            return "SHOW_UNFINISHED";
        default:
            return state;
    }
};

export default visibilityFilter;