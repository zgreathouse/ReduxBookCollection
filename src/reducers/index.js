import { combineReducers } from 'redux';

//reducers
import BooksReducer from './booksReducer';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
