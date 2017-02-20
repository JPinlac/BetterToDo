import React, { PropTypes } from 'react'

const Filter = ({visibilityFilter, onFilterClick}) => {
    return (
        <ul>
            <li><button onClick={() => onFilterClick("SHOW_ALL") }>Show All</button></li>
            <li><button onClick={() => onFilterClick("SHOW_UNFINISHED") }>Show Unfinished</button></li>
            <li><button onClick={() => onFilterClick("SHOW_FINISHED") }>Show Finished</button></li>

        </ul>
    )
}
//for passing props into click a proper way would be to extract component and then pass props that way.

Filter.propTypes = {
    visibilityFilter: PropTypes.string.isRequired,
    onFilterClick: PropTypes.func.isRequired
}

export default Filter;