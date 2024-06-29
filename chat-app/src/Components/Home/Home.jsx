import React from 'react'
import {Box} from '@mui/material'
import Navbar from './Navbar'
// import Form from './Form'
import Dashboard from '../Dashboard/Dashboard'






function Home() {
  return (
    <Box>
        <Box>
            <Navbar/>
        </Box>
        <Box>
            {/* <Form/> */}
        </Box>
        <Box>
            <Dashboard/>
        </Box>
    </Box>
  )
}

export default Home
