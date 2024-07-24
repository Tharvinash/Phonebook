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
  const { fullName, phoneNumber } = formData;
  let id;

  useEffect(() => {
    const contact = props.contact.contact;
    if (contact) {
      id = contact.id;
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
    if (isEdit) {
      props.updateContact(id, formData);
    } else {
      props.addContact({
        full_name: fullName,
        phone_number: phoneNumber,
      });
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
