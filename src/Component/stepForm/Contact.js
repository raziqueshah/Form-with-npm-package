import React from 'react'
import { Container, TextField, Button } from '@mui/material';

const Contact = ({formData, setForm, navigation}) => {
    const {phone, email} = formData;

  return (
    <Container maxWidth='xs'>
        <h3>Contact</h3>
        <TextField label="Phone" name='phone' placeholder='Enter Your Phone Number Here' value={phone} onChange={setForm} margin="normal" variant='outlined' autoComplete='off' fullWidth />
        <TextField label="E-Mail" name='email' placeholder='Enter Your Email Address Here' value={email} onChange={setForm} margin="normal" variant='outlined' autoComplete='off' fullWidth />
        <div style={{marginTop: '1rem'}}>
        <Button variant='contained' color='warning' onClick={() => navigation.previous()} style={{marginRight: '1rem'}}>Back</Button>
        <Button variant='contained' color='primary' onClick={() => navigation.next()}>Next</Button>
        </div>
    </Container>
  )
}

export default Contact