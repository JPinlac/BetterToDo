import { connect } from 'react-redux';
import { changeVisibilityFilter  } from '../Actions/actions';
import Filter from '../Components/Filter'

const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFilterClick: (filterValue) => {
            dispatch(changeVisibilityFilter(filterValue))
        }
    }
}


const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterLink;

