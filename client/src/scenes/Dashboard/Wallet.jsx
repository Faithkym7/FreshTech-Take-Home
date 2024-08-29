import { Box } from '@mui/material'
import React from 'react'
import data from 'data/data.json'

const Wallet = () => {
    const user = data.user;
  return (
    <Box
        sx={{m:'5rem 5rem'}}
    >Wallet</Box>
  )
}

export default Wallet