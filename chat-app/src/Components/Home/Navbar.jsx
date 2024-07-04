import React from 'react'
import {styled,Box , AppBar,Button , Typography} from '@mui/material'

const Nav = styled(AppBar)`
    height:58px;
    width:100%;
    background-color:#5e35b1;
    
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
const ImgBox =styled(Box)`
    width:10%;
    padding-left:20px;
    padding-top:5px;
`
const Logo = styled('img')({
    width:"30%",
})



function Navbar() {
  return (
    <Box>
      <Nav>
            <Navcontain>
            <ImgBox><Logo src="https://static.vecteezy.com/system/resources/previews/020/945/959/original/chat-app-logo-png.png" alt="" /></ImgBox>
            </Navcontain>
        </Nav>
    </Box>
  )
}

export default Navbar
