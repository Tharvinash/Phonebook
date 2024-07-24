import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getContacts,
  addContact,
  contentToBeUpdated,
  updateContact,
} from '../../actions/contact';
import { useNavigate } from 'react-router-dom';

const AddContact = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
  });
  const [isEdit, setIsEdit] = useState(false);
  const [contactId, setContactId] = useState(0);
  const { fullName, phoneNumber } = formData;

  useEffect(() => {
    const contact = props.contact.contact;
    if (contact) {
      setContactId(contact.id);
      setFormData({
        ...formData,
        fullName: contact.full_name,
        phoneNumber: contact.phone_number,
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
    const contactData = {
      full_name: fullName,
      phone_number: phoneNumber,
    };

    if (isEdit) {
      props.updateContact(contactId, contactData);
    } else {
      props.addContact(contactData);
    }

    props.contentToBeUpdated(null);
    navigate('/');
  };

  return (
    <form className='mt-5' onSubmit={(e) => onSubmit(e)}>
      <div className='mb-3'>
        <label className='form-label'>Full Name</label>
        <input
          className='form-control'
          name='fullName'
          value={fullName}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Phone Number</label>
        <input
          className='form-control'
          name='phoneNumber'
          value={phoneNumber}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        {isEdit ? 'Edit' : 'Add'}
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
