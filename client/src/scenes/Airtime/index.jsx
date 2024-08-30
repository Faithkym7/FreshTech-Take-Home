import { Box } from '@mui/material'
import React from 'react'
import Wizard from './Wizard'

const Airtime = () => {
  return (
    <Box
      sx={{
        m: {
          xs: '5rem 1rem 0rem 10rem',
          sm: '5rem 2rem 0rem 20rem',
          md: '5rem 2rem 0rem 20rem',
          lg: '5rem 12rem 0rem 20rem',
          xl: '5rem 15rem 0rem 20rem',
        }
      }}
    ><Wizard/></Box>
  )
}

export default Airtime