import React from 'react'
import {Box} from '@mui/material'
import Navbar from './Navbar'
import Form from './Form'






function Home() {
  return (
    <Box>
        <Box>
            <Navbar/>
        </Box>
        <Box>
            <Form/>
        </Box>
    </Box>
  )
}

export default Home
