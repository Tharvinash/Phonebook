import axios from 'axios';
import { GET_CONTACTS, ADD_CONTACT, UPDATE_CONTACT, DEL_CONTACT } from './type';

export const getContacts = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:8000/api/contacts/?format=json');
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};

export const addContact = (contactData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/contacts/', contactData);
    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};

export const updateContact = (id, contactData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/contacts/${id}`, contactData);
    dispatch({
      type: UPDATE_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch({
      type: DEL_CONTACT,
      payload: id,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};
