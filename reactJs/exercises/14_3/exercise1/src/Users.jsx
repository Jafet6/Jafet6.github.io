import React from 'react';

const Users = ({ match, greetingMessage }) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component with ID {match.params.id} </p>
  </div>
);

export default Users;