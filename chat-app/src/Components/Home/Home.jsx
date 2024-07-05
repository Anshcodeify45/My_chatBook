import React from 'react'
import {Box} from '@mui/material'
import Navbar from './Navbar'
import Dashboard from '../Dashboard/Dashboard'
import Dataprovider from '../../Dataprovider/Dataprovider'





function Home() {
  return (
    <Dataprovider>
        <Box>
            <Navbar/>
        </Box>
        <Box>
            <Dashboard/>
        </Box>
    </Dataprovider>
  )
}

export default Home
