import axios from 'axios';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DEL_CONTACT,
  CONTACT_TOBE_UPDATED,
} from './type';

const URL = 'http://localhost:8000/api/contacts/';

const formatPhoneNumber = (phoneNumber) => {
  if (typeof phoneNumber === 'string' && phoneNumber.length === 10) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6)}`;
  }
  return phoneNumber;
};

/**
 * Fetches contact data from the server, sorts it by full name, format the phone number and dispatches an action to update the Redux store.
 *
 * @async
 * @function getContacts
 * @returns {Function} A Redux thunk that performs the asynchronous operation of fetching and sorting contact data, and dispatches the GET_CONTACTS action.
 *
 * @throws Will throw an error if the request fails, and logs each error message to the console.
 */
export const getContacts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}?format=json`);
    const sortedData = res.data.sort((a, b) => {
      if (a.full_name.toLowerCase() < b.full_name.toLowerCase()) {
        return -1;
      }
      if (a.full_name.toLowerCase() > b.full_name.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    const formattedData = sortedData.map((contact) => ({
      ...contact,
      phone_number: formatPhoneNumber(contact.phone_number),
    }));

    dispatch({
      type: GET_CONTACTS,
      payload: formattedData,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};

/**
 * Adds a new contact to the server and dispatches an action to update the Redux store with the newly added contact.
 *
 * @async
 * @function addContact
 * @param {Object} contactData - The contact data to be added. Must include `full_name` and `phone_number`.
 * @returns {Function} A Redux thunk that performs the asynchronous operation of posting contact data to the server and dispatches the ADD_CONTACT action.
 *
 * @throws Will throw an error if the request fails, and logs each error message to the console.
 */
export const addContact = (contactData) => async (dispatch) => {
  try {
    const res = await axios.post(URL, contactData);
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

/**
 * Updates an existing contact on the server and dispatches an action to update the Redux store with the updated contact data.
 *
 * @async
 * @function updateContact
 * @param {number} id - The unique identifier of the contact to be updated.
 * @param {Object} contactData - The updated contact data. Must include fields to be updated such as `full_name` and `phone_number`.
 * @returns {Function} A Redux thunk that performs the asynchronous operation of updating contact data on the server and dispatches the UPDATE_CONTACT action.
 *
 * @throws Will throw an error if the request fails, and logs each error message to the console.
 */
export const updateContact = (id, contactData) => async (dispatch) => {
  try {
    const res = await axios.put(`${URL}${id}/`, contactData);
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

/**
 * Deletes a contact from the server and dispatches an action to update the Redux store by removing the deleted contact.
 *
 * @async
 * @function deleteContact
 * @param {string} id - The unique identifier of the contact to be deleted.
 * @returns {Function} A Redux thunk that performs the asynchronous operation of deleting contact data from the server and dispatches the DEL_CONTACT action if successful.
 *
 * @throws Will throw an error if the request fails, and logs each error message to the console.
 */
export const deleteContact = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${URL}${id}/`);
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

/**
 * Dispatches an action to update the Redux store with contact data that is intended to be updated.
 *
 * @function contentToBeUpdated
 * @param {Object} contactData - The contact data that needs to be updated. This object may include fields like `full_name` and `phone_number`.
 * @returns {Function} A Redux action creator that dispatches the CONTACT_TOBE_UPDATED action with the provided contact data as payload.
 */
export const contentToBeUpdated = (contactData) => (dispatch) => {
  dispatch({
    type: CONTACT_TOBE_UPDATED,
    payload: contactData,
  });
};
