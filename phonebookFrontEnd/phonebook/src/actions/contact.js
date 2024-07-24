import axios from 'axios';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DEL_CONTACT,
  CONTACT_TOBE_UPDATED,
} from './type';

export const getContacts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://localhost:8000/api/contacts/?format=json'
    );
    const sortedData = res.data.sort((a, b) => {
      if (a.full_name.toLowerCase() < b.full_name.toLowerCase()) {
        return -1;
      }
      if (a.full_name.toLowerCase() > b.full_name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    dispatch({
      type: GET_CONTACTS,
      payload: sortedData,
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
    const res = await axios.post(
      'http://localhost:8000/api/contacts/',
      contactData
    );
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
    const res = await axios.put(
      `http://localhost:8000/api/contacts/${id}`,
      contactData
    );
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
    const res = await axios.delete(`http://localhost:8000/api/contacts/${id}/`);
    if (res.status === 204) {
      dispatch({
        type: DEL_CONTACT,
        payload: id,
      });
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};

export const contentToBeUpdated = (contactData) => (dispatch) => {
  dispatch({
    type: CONTACT_TOBE_UPDATED,
    payload: contactData,
  });
};
