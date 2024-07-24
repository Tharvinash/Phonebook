import { GET_CONTACTS } from '../actions/type';

const initialState = {
  contacts: [],
};

function contactsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
      };
    default:
      return state;
  }
}

export default contactsReducer;
