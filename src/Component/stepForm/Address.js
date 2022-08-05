import React from 'react'
import { Container, TextField, Button } from '@mui/material';

const Address = ({formData, setForm, navigation}) => {
    const {address, city, state, zip } = formData;

  return (
    <Container maxWidth='xs'>
        <h3>Address</h3>
        <TextField label="Address" name='address' placeholder='Enter Your Address Here' value={address} onChange={setForm} margin="normal" variant='outlined' autoComplete='off' fullWidth />
        <TextField label="City" name='city' placeholder='Enter Your City Name Here' value={city} onChange={setForm} margin="normal" variant='outlined' autoComplete='off' fullWidth />
        <TextField label="State" name='state' placeholder='Enter Your State Name Here' value={state} onChange={setForm} margin="normal" variant='outlined' autoComplete='off' fullWidth />
        <TextField label="Zip" name='zip' type='number' placeholder='Enter Your Zip Code Here' value={zip} onChange={setForm} margin="normal" variant='outlined' autoComplete='off' fullWidth />
        <div style={{marginTop: '1rem'}}>
        <Button variant='contained' color='warning' onClick={() => navigation.previous()} style={{marginRight: '1rem'}}>Back</Button>
        <Button variant='contained' color='primary' onClick={() => navigation.next()}>Next</Button>
        </div>
    </Container>
  )
}

export default Address