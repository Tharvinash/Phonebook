import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PhonebookLogo from './../assets/phonebook.svg';

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <img
              src={PhonebookLogo}
              alt='PhonebookLogo'
              width='30'
              height='24'
              className='d-inline-block align-text-top'
            />
            Phonebook
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <div className='nav-link active' aria-current='page'>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-decoration-none text-primary'
                        : 'text-decoration-none text-dark'
                    }
                  >
                    Home
                  </NavLink>
                </div>
              </li>
              <li className='nav-item'>
                <div className='nav-link'>
                  <NavLink
                    to='/add-contact'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-decoration-none text-primary'
                        : 'text-decoration-none text-dark'
                    }
                  >
                    Add
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
