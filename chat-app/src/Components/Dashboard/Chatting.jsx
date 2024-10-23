import React, { useState } from 'react'
import { Box ,styled ,Typography ,InputBase} from '@mui/material'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddIcon from '@mui/icons-material/Add';
import { DataContext } from '../../Context/Dataprovider';
import { useContext } from 'react';


const Container =styled(Box)`
    postion:sticky;
    height:100vh;
    width:100%;
    
    
`

const Profile = styled(Box)`
    width:91%;
    height:55px;
    padding:18px 70px 0 15px;
    background-color:#004d40;
    color:#ede7f6;
    cursor:pointer;

  
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
      height:83vh;
      overflow-y:scroll;
      background-image:url(https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg);
  
`
const Mychats = styled(Box)`
      width:25%;
      height:auto;
      margin-left:35px;
      margin-top:25px;
      background-color:#186a3b;
      padding: 20px 80px 20px 80px;
      border-top-right-radius:30px;
      border-bottom-right-radius:30px;
      border-bottom-left-radius:30px;
      box-shadow:4px 4px 2px #263238;
      color:#e8f8f5;


`

const Replies = styled(Box)`
      width:25%;
      height:auto;
      margin-left:480px;
      margin-top:25px;
      background-color:#a9dfbf;
      padding: 20px 80px 20px 80px;
      border-top-left-radius:30px;
      border-bottom-right-radius:30px;
      border-bottom-left-radius:30px;
      color:black;
      box-shadow:4px 4px 2px #263238;

`

const InputData = styled(InputBase)`
      width:100%;
`

const Inputchat = styled(Box)`
      display:flex;
      align-items:center;
      background-color:#d5f5e3 ;
      padding:15px 0px 7px 10px;
      width:99%;
      justify-content:space-evenly;
      
`

const IcnBox = styled(Box)`
      display:flex;
      align-items:center;
`

const ChatBox = styled(Box)`
      width:100%;
      align-items:center;
`

function Chatting({Allmsg ,profile,conversation,receiver}) {
      const {account}= useContext(DataContext);
      const [mesg , setMsg] = useState('');

      
      console.log(account);
      const sendMessage = async(e) => {
            
                  const res = await fetch(`http://localhost:8000/conversation/message`,{
                        method:'POST',
                        headers:{
                              'Content-Type':'application/json',
                        },
                        body: JSON.stringify({
                              conversationID:conversation,
                              senderId: account?.id,
                              message:mesg,
                              receiverId:receiver,
                        })

                  });
                  setMsg('');
      }
      console.log("my name>>",{profile})
     
  return (
    <Container>
      <ChatBox>
      <Profile>
          <Myprofile>
            <DataBox>
            <DPbox>
                  <Dp src="https://www.shareicon.net/download/2016/05/24/770136_man_512x512.png" alt="Profile" />
            </DPbox>
            <Box>
            <Box><Typography variant='h5' style={{fontSize:18 , fontWeight:500}}>{profile}</Typography></Box>
            <Box><Typography variant='p' style={{fontSize:15 , fontWeight:100}}>Online</Typography></Box>  
           </Box>
          </DataBox>
            <CallIcon>
            <AddIcCallIcon/>
            </CallIcon>
            </Myprofile>
      </Profile>
      <Box>
       <Chats>
      { 
        Allmsg.map(({user :{ id}={} , message } ) =>{
                
                  if(id === account.id) {
                        return (
                       
                        <Replies>
                        <Typography variant='p'>
                              {message}
                        </Typography>
                        </Replies>
                         
                        )
                        } else {
                        return(
                        <Mychats>
                        <Typography variant='p'>
                              {message}
                        </Typography>
                        </Mychats>
                        )
                        }      
      })}
       
      
      </Chats>
      <Inputchat>
                  <Box>
                  <EmojiEmotionsIcon style={{cursor:"pointer"}}/>
                  </Box>
                  <Box style={{width:'70%'}}>
                  <InputData variant='outlined' placeholder='Message' value={mesg} onChange={(e) => setMsg(e.target.value)}/>
                  </Box>

                  <IcnBox style={{width:"15%"}}>
                  <Box>
                  <SendIcon style={{cursor:"pointer" , paddingRight:10}} onClick = {() => sendMessage()}/>
                  </Box>
                  <Box>
                  <AddIcon style={{cursor:"pointer"}}/>
                  </Box>
                  </IcnBox>    
      </Inputchat>
      </Box>
      </ChatBox>
    </Container>
  )
}

export default Chatting