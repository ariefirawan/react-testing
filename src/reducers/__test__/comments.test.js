import commentReducer from 'reducers/comment';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment',
  };

  const newState = commentReducer([], action);

  expect(newState).toEqual(['new comment']);
});

it('handles action with unknown type', () => {
  const newState = commentReducer([], { type: 'wkewewlel' });
  expect(newState).toEqual([]);
});
