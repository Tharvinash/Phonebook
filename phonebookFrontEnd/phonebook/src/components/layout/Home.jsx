import React from 'react';

const Home = () => {
  return (
    <table className='table table-striped mt-5'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Full Name</th>
          <th scope='col'>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Larry the Bird</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Home;
