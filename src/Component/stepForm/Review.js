import { Accordion, AccordionDetails, AccordionSummary, Button, Container, IconButton, ListItemText } from '@mui/material'
import React from 'react'
import { Edit, ExpandMore } from '@mui/icons-material';

export const Review = ({formData, navigation}) => {
  const {go} = navigation;

  const {firstName,
  lastName,
  nickName,
  address,
  city,
  state,
  zip,
  phone,
  email} = formData;

  return (
    <Container maxWidth='xs'>
      <h3>Review</h3>
      <RenderAccordion summary="Names" go={go} details={[
        { 'First Name': firstName},
        { 'Last Name': lastName},
        { 'Nick Name': nickName},
      ]} />

      <RenderAccordion summary="Address" go={go} details={[
        { 'Address': address},
        { 'City': city},
        { 'State': state},
        { 'Zip': zip}
      ]} />

      <RenderAccordion summary="Contact" go={go} details={[
        { 'Phone': phone},
        { 'E-mail': email},
      ]} />

      <Button color='primary' variant='contained' style={{marginTop: '1.5rem'}} onClick={()=>go('submit')}>Submit</Button>
    </Container>
  )
}

export const RenderAccordion = ({summary, details, go}) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMore />}>{summary}</AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index)=>{
          const objKey = Object.keys(data)[0]
          const objValue = data[Object.keys(data)[0]]
          // console.log(Object.keys(data)[0])

          return(
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          )

        })}

      <IconButton color='primary' component='span' onClick={() => go(`${summary.toLowerCase()}`)}><Edit /></IconButton>

      </div>
    </AccordionDetails>
  </Accordion>
)