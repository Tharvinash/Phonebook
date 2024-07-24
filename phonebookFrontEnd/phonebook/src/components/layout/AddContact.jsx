import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { getContacts } from '../../actions/contact';

const AddContact = (props) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
  });
  const { fullName, phoneNumber } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    props.getContacts()
    props.setAlert('GG', 'danger')
    console.log(formData);
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
        Add
      </button>
    </form>
  );
};

export default connect(null, { setAlert, getContacts })(AddContact);
