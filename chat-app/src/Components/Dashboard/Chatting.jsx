import React from 'react'
import { Box ,styled ,Typography ,InputBase} from '@mui/material'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SendIcon from '@mui/icons-material/Send';


const Profile = styled(Box)`
    width:28%;
    margin-top:30px;
    margin-left:160px;
    border-radius:20px;
    padding:5px 70px 0 30px;
    background-color:#512da8;
    color:#ede7f6;
    cursor:pointer;
    box-shadow:4px 4px 2px #263238;
`

const Dp = styled('img')({
  width:"100%",
})

const Myprofile = styled(Box)`
    display:flex;
    align-items:center;
    

`

const DPbox =styled(Box)`
    width:34%;
    padding-right:10px;
`

const CallIcon = styled(Box)`
    margin-left:160px;
`

const DataBox=styled(Box)`
      display:flex;
       align-items:center;
  `

const Mychats = styled(Box)`
      width:25%;
      height:auto;
      margin-left:35px;
      margin-top:25px;
      background-color:#b39ddb;
      padding: 20px 80px 20px 80px;
      border-radius:30px;

`

const Replies = styled(Box)`
      width:25%;
      height:auto;
      margin-left:190px;
      margin-top:25px;
      background-color:#6200ea;
      padding: 20px 80px 20px 80px;
      border-radius:30px;
      color:#ede7f6;
`

const InputData = styled(InputBase)`
      width:100%;
      margin-right:190px;
`

const Inputchat = styled(Box)`
      display:flex;
      align-items:center;
      width:33%;
      border-radius:12px;
      background-color:#b388ff;
      padding:10px 20px 10px 20px;
      margin-top:8px;
`
function Chatting() {
  return (
    <Box>
      <Profile>
          <Myprofile>
            <DataBox>
            <DPbox>
               <Dp src="https://www.shareicon.net/download/2016/05/24/770136_man_512x512.png" alt="Profile" />
            </DPbox>
            <Box>
              <Box><Typography variant='h5' style={{fontSize:18 , fontWeight:500}}>Alex</Typography></Box>
              <Box><Typography variant='p' style={{fontSize:15 , fontWeight:100}}>Online</Typography></Box>  
            </Box>
            </DataBox>
            <CallIcon>
              <AddIcCallIcon/>
            </CallIcon>
          </Myprofile>
          
      </Profile>
      <Box>
        <Mychats>
          <Typography variant='p'>
            The sun dipped below the horizon, casting a warm, golden hue across the tranquil lake. Birds chirped their final songs.
          
           </Typography>
        </Mychats>

        <Replies>
          <Typography variant='p'>
              Birds chirped their final songs of the day as a gentle breeze rustled the leaves of the nearby trees. On the water's surface.
           </Typography>
        </Replies>

        <Mychats>
          <Typography variant='p'>
            The sun dipped below the horizon, casting a warm, golden hue across the tranquil lake. Birds chirped their final songs 
           </Typography>
        </Mychats>

        <Replies>
          <Typography variant='p'>
             Birds chirped their final songs of the day as a gentle breeze rustled the leaves of the nearby trees. On the water's surface.
           </Typography>
        </Replies>

        <Mychats>
          <Typography variant='p'>
            The sun dipped below the horizon, casting a warm, golden hue across the tranquil lake. Birds chirped their final songs 
           </Typography>
        </Mychats>
      </Box>
      <br />
      <Inputchat style={{marginLeft:170,paddingTop:10}}>

        <Box>
        <InputData variant='outlined' placeholder='Message'/>
        </Box>

        <Box>
         <SendIcon style={{cursor:"pointer"}}/>
        </Box>
       
        
      </Inputchat>
    </Box>
  )
}

export default Chatting
