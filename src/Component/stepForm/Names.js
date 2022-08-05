import React from 'react';
import { Container, TextField, Button } from '@mui/material';

const Names = ({formData, setForm, navigation}) => {
const {firstName, lastName, nickName} = formData;
// console.log(navigation);

  return (
    <Container maxWidth='xs'>
        <h3>Names</h3>
        <TextField label="First Name" name='firstName' placeholder='Enter Your First Name Here' value={firstName} onChange={setForm} margin="normal" variant='outlined' autoComplete='off' fullWidth />
        <TextField label="Last Name" name='lastName' placeholder='Enter Your Last Name Here' value={lastName} onChange={setForm} margin="normal" variant='outlined' autoComplete='off' fullWidth />
        <TextField label="Nick Name" name='nickName' placeholder='Enter Your Nick Name Here' value={nickName} onChange={setForm} margin="normal" variant='outlined' autoComplete='off' fullWidth />
        <Button variant='contained' color='primary' fullWidth style={{marginTop: '1rem'}} onClick={()=>navigation.next()}>Next</Button>
    </Container>
  )
}

export default Names