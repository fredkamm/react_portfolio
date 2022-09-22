import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/contact.css';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue)
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
    } else {
      setErrorMessage('')
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    alert(`Hello ${name}, your message was recieved and i will reach out to you shortly! check your email: ${email}`);

    setName('');
    setMessage('');
    setEmail('');
  }

  return (
    <div>
      <h4>Hello {name}</h4>
      <form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text id="formText" className="textMuted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Message</Form.Label>
          <Form.Control
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter your message to me"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
        {errorMessage && (
          <div>
            <h4 className="error-text">{errorMessage}</h4>
          </div>
        )}
      </form>
    </div>
  )
}
