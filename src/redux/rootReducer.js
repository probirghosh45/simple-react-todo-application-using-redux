import { combineReducers } from 'redux'
import todosReducer from './todos/reducer'
import filtersReducer from './filters/reducer'

const rootReducer = combineReducers({
  todos : todosReducer,
  filters : filtersReducer
})

export default rootReducer;