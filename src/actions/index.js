import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENT, CHANGE_AUTH } from './types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fecthComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENT,
    payload: response,
  };
}

export function changeAuth(isLoggin) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggin,
  };
}
