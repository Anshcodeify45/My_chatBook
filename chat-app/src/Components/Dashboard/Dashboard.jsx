import React from 'react'
import { Box ,styled ,Typography} from '@mui/material'
import { ChatList } from '../../Chatlist.js'
import Chatting from './Chatting.jsx'

const Container =styled(Box)`
    display:flex;
    padding-top:50px;
     position:fixed;
`
const Chatlist = styled(Box)`
    width:25%;
    background-color:#757de8;
    max-height:98vh;
   

`
const Chatbox = styled(Box)`
    width:75%;
    background-color:#d1c4e9;
    max-height:100vh;
`

const Dp = styled('img')({
   width:"100%",
  
})

const DpData = styled(Box)`
    display: flex;
    align-items:center;
`
const Myprofile = styled(Box)`
     padding-top:11px;
     padding-bottom:18px;
     padding-left:65px; 
     border-bottom:2px solid;
     border-color:#ede7f6;
     background-color:#673ab7;
     cursor:pointer;
`
const Chat = styled(Box)`
     padding-top:9px;
     padding-bottom:9px;
     padding-left:20px; 
     border-bottom:2px solid;
     border-color:#ede7f6;
     background-color:#673ab7;
     cursor:pointer;
     
`
const Chatlists=styled(Box)`
     max-height:74vh;
     overflow-y:scroll;
`
const MessageBox = styled(Box)`
    background-color:#673ab7;
    padding-left:30px;
    padding-top:24px;
    color:#ede7f6;
`

function Dashboard() {
  return (
    <Container>
      <Chatlist>
        <Myprofile>
            <DpData>
            <Box style={{width:"20%" , paddingRight:20}}>
            <Dp src="https://www.shareicon.net/download/2016/05/24/770136_man_512x512.png" alt="Profile" />
            </Box>
            <Box>
                <Box><Typography style={{fontSize:18 , fontWeight:700 , color:"#ede7f6"}}>Alex</Typography></Box>
                <Box><Typography style={{fontSize:12 , fontWeight:200 ,color:"#ede7f6"}}>My Account</Typography></Box>
            </Box>
            </DpData>
        </Myprofile>
        <MessageBox>
            <Typography>Messages</Typography>
        </MessageBox>
        <Chatlists>
            {
                ChatList.map(el => (
                  
                    
                    <Chat>
                    <DpData>
                    <Box style={{width:"16%" , paddingRight:20}}>
                    <Dp src={el.dp} alt="Profile" />
                    </Box>
                    <Box>
                        <Box><Typography style={{fontSize:18 , fontWeight:700 , color:"#ede7f6"}}>{el.name}</Typography></Box>
                        <Box><Typography style={{fontSize:12 , fontWeight:200 ,color:"#ede7f6"}}>{el.status}</Typography></Box>
                    </Box>
                    </DpData>
                </Chat>



                ))
            }
        </Chatlists>
      </Chatlist>
      <Chatbox> <Chatting/></Chatbox>
    </Container>
  )
}

export default Dashboard
