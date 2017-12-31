import { combineReducers } from 'redux';

//reducers
import BooksReducer from './booksReducer';
import ActiveBookReducer from './activeBookReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
