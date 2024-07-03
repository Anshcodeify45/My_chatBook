import React from 'react'
import { Box ,styled ,Typography ,InputBase} from '@mui/material'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddIcon from '@mui/icons-material/Add';



const Container =styled(Box)`
    width:100%;
    postion:sticky;
`

const Profile = styled(Box)`
    width:95%;
    padding:5px 70px 0 15px;
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
    width:10%;
    padding-right:20px;
`

const CallIcon = styled(Box)`
    margin-left:560px;
`

const DataBox=styled(Box)`
      display:flex;
      align-items:center;
      
  `
const Chats = styled(Box)`
      max-height:76vh;
      overflow-y:scroll;
`
const Mychats = styled(Box)`
      width:25%;
      height:auto;
      margin-left:35px;
      margin-top:25px;
      background-color:#b39ddb;
      padding: 20px 80px 20px 80px;
      border-top-right-radius:30px;
      border-bottom-right-radius:30px;
      border-bottom-left-radius:30px;
      box-shadow:4px 4px 2px #263238;


`

const Replies = styled(Box)`
      width:25%;
      height:auto;
      margin-left:690px;
      margin-top:25px;
      background-color:#6200ea;
      padding: 20px 80px 20px 80px;
      border-top-left-radius:30px;
      border-bottom-right-radius:30px;
      border-bottom-left-radius:30px;
      color:#ede7f6;
      box-shadow:4px 4px 2px #263238;

`

const InputData = styled(InputBase)`
      width:100%;
      padding-right:700px;
`

const Inputchat = styled(Box)`
      display:flex;
      align-items:center;
      border-radius:12px;
      background-color:#b388ff;
      padding:13px 80px 13px 80px;
      margin-top:8px;
`

const IcnBox = styled(Box)`
      display:flex;
      align-items:center;
      padding-right:20px;
`
function Chatting() {
  return (
    <Container>
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

      <Chats>
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
        
      </Chats>
      <Inputchat>
          <Box>
            <EmojiEmotionsIcon style={{cursor:"pointer" , paddingRight:10}}/>
          </Box>
        <Box>
        <InputData variant='outlined' placeholder='Message'/>
        </Box>
        
        <IcnBox>
        <Box>
         <SendIcon style={{cursor:"pointer" , paddingRight:10}}/>
        </Box>
          <Box>
            <AddIcon style={{cursor:"pointer" , paddingRight:10}}/>
          </Box>
        </IcnBox>
        
       
        
      </Inputchat>
    </Container>
  )
}

export default Chatting
