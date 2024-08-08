import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getContacts,
  addContact,
  contentToBeUpdated,
  updateContact,
} from '../../actions/contact';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const AddContact = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
  });
  const [isEdit, setIsEdit] = useState(false);
  const [contactId, setContactId] = useState(0);
  const { fullName, phoneNumber } = formData;

  const removePhoneNumberFormatting = (formattedPhoneNumber) => {
    return formattedPhoneNumber.replace(/[-\s]/g, '');
  };

  useEffect(() => {
    const contact = props.contact.contact;
    if (contact) {
      setContactId(contact.id);
      setFormData({
        ...formData,
        fullName: contact.full_name,
        phoneNumber: removePhoneNumberFormatting(contact.phone_number),
      });
      setIsEdit(true);
    }
  }, [props.contact.contact]);

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();

    const phoneNumberPattern = /^[0-9]{10}$/; // Regex for 10 digits
    const namePattern = /^[a-zA-Z\s]+$/; // Regex for alphabetic characters and spaces

    if (!phoneNumberPattern.test(phoneNumber)) {
      enqueueSnackbar('Phone number must be a 10-digit number', {
        variant: 'error',
      });
      return;
    }

    if (!namePattern.test(fullName)) {
      enqueueSnackbar(
        'Full name must only contain alphabetic characters and spaces',
        { variant: 'error' }
      );
      return;
    }

    const contactData = {
      full_name: fullName,
      phone_number: phoneNumber,
    };

    if (isEdit) {
      props.updateContact(contactId, contactData);
    } else {
      props.addContact(contactData);
    }

    enqueueSnackbar(`Contact ${isEdit ? 'updated' : 'added'} successfully`, {
      variant: 'success',
    });
    props.contentToBeUpdated(null);
    navigate('/');
  };

  return (
    <form className='mt-5' onSubmit={(e) => onSubmit(e)}>
      <div className='mb-3'>
        <label className='form-label'>Full Name*</label>
        <input
          autoComplete='off'
          className='form-control'
          name='fullName'
          value={fullName}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Phone Number*</label>
        <input
          autoComplete='off'
          className='form-control'
          name='phoneNumber'
          value={phoneNumber}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        {isEdit ? 'Save' : 'Add'}
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, {
  getContacts,
  addContact,
  contentToBeUpdated,
  updateContact,
})(AddContact);
