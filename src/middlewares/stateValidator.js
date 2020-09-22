import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  tv4.validate(getState(), stateSchema);
};