import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import { Navbar } from 'react-bootstrap'

const Deals = () => {
  return (
    <>
    <Navbar/>
    <Grid Container spacing={4}>
        <Grid item xs={4}>
            <Box p={5}>
                <Typography variant='h4' color='success.main'
                fontWeigt={'bold'} sx={{textDecoration:'underline' }}>Deals</Typography>
                <List>
                    <ListItem>
                    <Link href='#'>
                    <Typography variant='button' color='secondary'
                    fontSize={20}>Most Popular</Typography></Link>
                    </ListItem>
                    <ListItem>
                    <Link href='#'>
                        <Typography variant='button' color='warning'
                        fontSize={20}>Flash Sales</Typography></Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#'>
                        <Typography variant='button' color='warning'
                        fontSize={20}>Deals of the Day</Typography></Link>
                        </ListItem>
                        </List>
                        <Typography variant='h4' color='sucess.main'
      fontWeight={'bold'} sx={{textDecoration:'underline'}}>Departments</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox size='large'color='success' icon={<FavouriteBorder/>}
         checkedIcon={<Favourite/>}/>} label="Mobiles"/>
         <FormControllabel control={<Checkbox/>} label="laptop" />
         <FormControllabel control={<Checkbox/>} label="Fitness" />
         <FormControllabel control={<Checkbox/>} label="Home" />
         <FormControllabel control={<Checkbox/>} label="Furniture" />         

      </FormGroup>
      <Typography variant='h4' color='sucess.main' fontWeight={'bold'} sx={{textDecoration:'underline'}}
      >Prices</Typography>
      <RadioGroup>
        <FormControllabel control={<Radio
        size='large'
    color='sucess'
icon={<FavouriteBorder/>}
checkedIcon={<Favourite/>}
name='prices' value='0'/>}
      </RadioGroup>
            </Box>
        </Grid>

    </Grid>
    </>
  )
}

export default Deals