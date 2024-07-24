import {
  GET_CONTACTS,
  DEL_CONTACT,
  CONTACT_TOBE_UPDATED,
} from '../actions/type';

const initialState = {
  contacts: [],
  deletedId: 0,
  contact: null,
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
    case CONTACT_TOBE_UPDATED:
      return {
        ...state,
        contact: payload,
      };
    default:
      return state;
  }
}

export default contactsReducer;
