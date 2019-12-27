import React, { useState } from 'react';

import LoginComponent from '../components/loginComponent';

function LoginContainer(props) {
  const [errors, setErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(props);

  function submitForm() {
    console.log('LoginContainer: submitForm()');
    console.log(email);
    console.log(password);
  }

  return (
    <LoginComponent 
      onSubmit={submitForm}
      errors={errors}
      {...props}
    />
  )
}

export default LoginContainer;
