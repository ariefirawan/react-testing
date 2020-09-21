import { combineReducers } from 'redux';
import CommentReducer from 'reducers/comment';
import authReducer from 'reducers/auth';

export default combineReducers({
  comments: CommentReducer,
  auth: authReducer,
});
