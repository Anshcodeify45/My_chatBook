import React from 'react'
import {styled,Box , AppBar,Button , Typography} from '@mui/material'

const Nav = styled(AppBar)`
    height:50px;
    width:100%;
    background-color:#3f51b5;
    
`
const Navcontain =styled(Box)`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Btn=styled(Button)`
    background-color:#3f51b5;
    color:#fafafa;
    padding:10px;
    margin-top:3px;
`



function Navbar() {
  return (
    <Box>
      <Nav>
            <Navcontain>
            <Box><Typography>LOGO</Typography></Box>
            <Box><Btn >Login</Btn></Box>
            </Navcontain>
        </Nav>
    </Box>
  )
}

export default Navbar
