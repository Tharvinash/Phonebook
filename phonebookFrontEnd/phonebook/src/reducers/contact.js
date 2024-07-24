import { GET_CONTACTS, DEL_CONTACT } from '../actions/type';

const initialState = {
  contacts: [],
  deletedId: 0,
};

function contactsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
      };
    case DEL_CONTACT:
      return {
        ...state,
        deletedId: payload,
      };
    default:
      return state;
  }
}

export default contactsReducer;
