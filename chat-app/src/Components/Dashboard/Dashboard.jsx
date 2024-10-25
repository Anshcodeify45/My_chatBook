
import React, { useContext } from 'react'
import { Box ,styled ,Typography} from '@mui/material'
import Chatting from './Chatting.jsx'
import { useState , useEffect} from 'react';
import { DataContext } from '../../Context/Dataprovider.jsx';
import { io } from 'socket.io-client';

const Container =styled(Box)`
    display:flex;
    position:fixed;
`
const Chatlist = styled(Box)`
    width:23%;
    background-color:#004d40;
    height:100vh;
`
const Chatbox = styled(Box)`
    width:60%;
    height:99vh;
`

const Dp = styled('img')({
   width:"100%",
  
})

const DpData = styled(Box)`
    display: flex;
    align-items:center;
    background-color:#004d40;

`
const Myprofile = styled(Box)`
     padding-top:11px;
     padding-bottom:18px;
     padding-left:65px; 
     border-bottom:2px solid;
     border-color:#ede7f6;
     background-color:#004d40;
     cursor:pointer;
`
const Chat = styled(Box)`
     padding-top:9px;
     padding-bottom:9px;
     padding-left:20px; 
     border-bottom:2px solid;
     border-color:#ede7f6;
     background-color:#004d40;
     cursor:pointer;
     
`
const Chatlists=styled(Box)({
     maxHeight:'74vh',
     overflowY:'scroll',
     '&::-webkit-scrollbar': {
    display:'none', // Hide scrollbar for Chrome, Safari, and Opera
  }
})
const MessageBox = styled(Box)`
    background-color:#004d40;
    padding-left:30px;
    padding-top:24px;
    color:#ede7f6;
`
const RIghtBox = styled(Box)`
    width:19%;
    background-color:#004d40;
    height:100vh;
`
const Rightlists=styled(Box)({
    marginTop:"11px",
    height:'90vh',
    overflowY:'scroll',
    '&::-webkit-scrollbar': {
   display:'none', // Hide scrollbar for Chrome, Safari, and Opera
 }
})

function Dashboard() {


    const { account, setAccount } = useContext(DataContext);
    const [localAccount, setLocalAccount] = useState(account);

 
   const [conversation , setConversation] = useState([]);
   const [msg ,setMsgs] = useState([]);
   const [profile ,setProfile] = useState('');
   const [convid ,setConvid] = useState('');
   const [rcverId ,setRcverId] =useState('');
   const [users,setUsers] = useState([]);
   const [socket , setSocket] = useState(null);



   

    useEffect(() => {
        setSocket( io ('http://localhost:8080'))
    },[])


    useEffect(()=>{
            socket?.emit('adduser',localAccount?.id);
            socket?.on('getUsers',users =>{
                console.log("activeeuser>>>>.",users);
            })
    },[socket])



    useEffect(() => {
    setLocalAccount(account);
  }, [account]);


   

   useEffect(() => {
    
    const fetchConversations = async() =>{
        if(localAccount.id !== null){
            const res = await fetch(`http://localhost:8000/conversation/${localAccount.id}`, {
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json',
                },
            });
            const result = await res.json();
            setConversation(result); 
        }
        
    }
    fetchConversations();
   },[localAccount.id])
  

   useEffect(() =>{
        const fetchUsers = async()=>{
            const res =await fetch(`http://localhost:8000/users/${localAccount?.id}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                }
            });
            const resData = await res.json();
            console.log(resData);
            setUsers(resData);
        }
        fetchUsers();
   },[])


   const fetchMessages = async(conversationID ,receiver) =>{

    const senderId = localAccount?.id; 
    const receiverId = receiver?.receiverId;

    console.log("Sending IDs:", { senderId, receiverId });
    if (!conversationID || !receiver) {
        console.warn("Conversation ID or receiver is missing");
        return;
    }

            const result = await fetch(`http://localhost:8000/message/${conversationID}?senderId=${senderId}&&receiverId=${receiverId}`,{
                method: 'GET',
                headers:{
                    'Content-Type' : 'application/json',
                },
            });
            const resDATA = await result.json();
            console.log("user data>>",receiver);
            
            setMsgs(resDATA);
            setProfile(receiver.name);
            setConvid(conversationID);
            setRcverId(receiver);

                 
   }


   console.log("msg DATA>>>>",msg)
   console.log("Conversation ID>>",convid);
   console.log("USER ID>>>>>",localAccount.id);
   console.log("RCVR ID>>",rcverId);
   console.log("user dataaaaa>>",users);
  
  
   
  return (
    <Container>
      <Chatlist>
        <Myprofile>
            <DpData>
            <Box style={{width:"20%" , paddingRight:20}}>
            <Dp src="https://www.shareicon.net/download/2016/05/24/770136_man_512x512.png" alt="Profile" />
            </Box>
            <Box>
                <Box><Typography style={{fontSize:18 , fontWeight:700 , color:"#ede7f6"}}>{localAccount.name}</Typography></Box>
                <Box><Typography style={{fontSize:12 , fontWeight:200 ,color:"#ede7f6"}}>My Account</Typography></Box>
            </Box>
            </DpData>
        </Myprofile>
        <MessageBox>
            <Typography>Messages</Typography>
        </MessageBox>
        <Chatlists>
            {

                conversation.length > 0 ?
                conversation.map(({conversationID ,user}) => (
                  
                    
                    <Chat onClick={() => fetchMessages(conversationID ,user)}>
                    <DpData>
                    <Box style={{width:"16%" , paddingRight:20}}>
                    <Dp src='https://png.pngtree.com/png-clipart/20230824/original/pngtree-boy-avatar-in-round-web-button-isolated-on-white-picture-image_8377276.png' alt="Profile" />
                    </Box>
                    <Box>
                        <Box><Typography style={{fontSize:18 , fontWeight:700 , color:"#ede7f6"}}>{user.name}</Typography></Box>
                        <Box><Typography style={{fontSize:12 , fontWeight:200 ,color:"#ede7f6"}}>{user.username}</Typography></Box>
                    </Box>
                    </DpData>
                </Chat>



                )) : <Box> <Typography> No Chats </Typography> </Box>
            }
        </Chatlists>
      </Chatlist>

      <Chatbox> 

         {React.cloneElement(<Chatting conversation={convid} receiver={rcverId} Allmsg= {msg}/> ,{profile})}    

        </Chatbox>


        <RIghtBox>
            <Box style={{padding:"15px 30px 10px 15px",marginTop:"15px"}}>
                <Typography style={{fontSize:"20px",color:"white"}} >Contacts</Typography>
            </Box>
            <Rightlists>
                {

                users.length > 0 ?
                users.map(({userId ,user}) => (
                  
                    
                    <Chat onClick={() => fetchMessages('new' ,user)}>
                    <DpData>
                    <Box style={{width:"16%" , paddingRight:20}}>
                    <Dp src='https://png.pngtree.com/png-clipart/20230824/original/pngtree-boy-avatar-in-round-web-button-isolated-on-white-picture-image_8377276.png' alt="Profile" />
                    </Box>
                    <Box>
                        <Box><Typography style={{fontSize:18 , fontWeight:700 , color:"#ede7f6"}}>{user.name}</Typography></Box>
                        <Box><Typography style={{fontSize:12 , fontWeight:200 ,color:"#ede7f6"}}>{user.username}</Typography></Box>
                    </Box>
                    </DpData>
                </Chat>



                )) : <Box> <Typography> No Chats </Typography> </Box>
            }
            </Rightlists>
             
       </RIghtBox>
    </Container>
  )
}

export default Dashboard
