import React from 'react'
import {styled,Box , Typography, Button , TextField, Icon} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useState} from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Person3Icon from '@mui/icons-material/Person3';
import { Link } from 'react-router-dom';
import { authenticateSignup ,authenticateLogin} from '../../Service/api';
import { useNavigate } from 'react-router-dom';

const Homedisplay = styled(Box)`
    background-color:#757de8;
    widht:100%;
    height:100vh;
    color:#fafafa;
`
const Formbx = styled(Box)`
    display: flex;
    justify-content: space-evenly; 
    align-items: center;     
    height: 60vh; 
    padding-top:150px;

`
const Formbox = styled(Box)`
        border:2px;
        border-radius:10px;  
        background-color: rgba(0, 0, 0, 0.6);
        
        
`
const InptBox = styled(Box)`
    display:flex;
`  

const FormData =styled(Box)`
   padding:80px 120px 130px 70px;
 

`

const Txtfld =styled(TextField)`
    width:150%;
    padding-bottom:30px;
`

 
   const Btn =styled(Button)`
        margin-left:70px;
        padding:10px 50px 10px 50px;
        background-color:#757de8;
        color:white;
        font-size:20px;
        border-radius:5px;
        
   `
   const BtnLink = styled(Link)({
    marginLeft:"70px",
    padding:"10px 50px 17px 50px",
    backgroundColor:"#757de8",
    color:"white",
    fontSize:20,
    borderRadius:5,
    textDecoration:"none"
   })

   const Btnlinksignup = styled(Link)({
    color:"white",
    fontSize:17,
    backgroundColor:"#3f51b5",
    textDecoration:"none",
    alignItems:"center",
    padding:"5px 10px 7px 10px",
    borderRadius:5,
    marginLeft:5,
   })

   const Error=styled(Typography)`
    font-size:16px;
    color:red;
   `
  const accntIntialvalue = {
        login:{
            view:'login'
        },
        signup:{
            view:'signup'
        }
  }
  


const signUpinitialValues = {
    name:'',
    username:'',
    password:'',
    phone:'',
}

const logininitialValues = {
    username:'',
    password:'',
}
function Form() {

const [account , toggleAccount] = useState(accntIntialvalue.login)
const [signup ,setSignup] =useState(signUpinitialValues)
const [login ,setLogin]=useState(logininitialValues)
const [error , setError] =useState(false);
const Nav = useNavigate()

 const toggleSignup = () => {
    toggleAccount(accntIntialvalue.signup)

 }
 const toggleLogin = async() => {
  let response=  await authenticateSignup(signup);
  if(!response) return
  toggleAccount(accntIntialvalue.login)
  Nav('/login')

 }
 const oninputChange = (e) =>{
    setSignup({...signup,[e.target.name]:e.target.value })
    console.log(signup);
 }
 

 const toggleLoginData = (e) => {
        setLogin({...login,[e.target.name]:e.target.value})
 }


const loginuser = async()=>{
    let response = await authenticateLogin(login)
    console.log(response);
    if(response.status === 200){
            Nav('/home');
    }
    else{
        setError(true);
    }
}

  return (
    
    <Box>
    <Homedisplay>
           <Formbx>
            <Box>
                <Box><img src="https://cdni.iconscout.com/illustration/premium/thumb/couple-chatting-on-social-media-4431098-3692641.png" alt="Logo" /></Box>
                <Box><p style={{fontSize:35}}>"Join Our chat app Today!"</p></Box>
            </Box>
            <Formbox>
              {
                account.view === 'login'  ?
                <FormData>
                <Box>
                    <Typography style={{paddingBottom:50 , paddingLeft:108}} variant='h4'>Login</Typography>
                </Box>
                <InptBox>
                <Box>
                    <Txtfld type="email" label='Enter Username' variant="outlined" onChange={(e)=>toggleLoginData(e)} name='username'/>
                    
                </Box>
                <Box>
                    <PersonIcon style={{paddingLeft:58,position:'absolute',paddingTop:20}}/>
                </Box>
                </InptBox>
                
                <InptBox>
                <Box>
                    <Txtfld type="password" label='Enter password' variant="outlined" onChange={(e)=>toggleLoginData(e)}name='password'/>
                </Box>
                <Box>
                    <LockIcon style={{paddingLeft:58,position:'absolute',paddingTop:20}}/>
                </Box>
                </InptBox>

                <Box>
                    <Btn onClick={()=>loginuser()}>Login</Btn>
                   {error && <Error>Please enter valid username or password</Error>}
                </Box>
                <Box style={{display:'flex',paddingTop:20,alignItems:'center',marginLeft:25}}>
                <Box>
                    <Typography>Don't have an account?</Typography>
                </Box>
                <Box>
                <Btnlinksignup to="/signup" style={{border:'none'}} onClick={()=>toggleSignup()}>Sign up</Btnlinksignup>
                </Box>
                </Box>
                
                </FormData>
                :
                <FormData  style={{height:"55vh",paddingTop:30,marginRight:10}}>
                <Box>
                    <Typography style={{paddingBottom:40 , paddingLeft:100}} variant='h4'>Sign up</Typography>
                </Box>


                <InptBox>
                <Box>
                    <Txtfld type="text" label='Enter name' variant="outlined" onChange={(e)=>oninputChange(e)} name='name'/>
                </Box>
                <Box>
                    <Person3Icon style={{paddingLeft:58,position:'absolute',paddingTop:20}}/>
                </Box>
                </InptBox>
                
                <InptBox>
                <Box>
                    <Txtfld type="number" label='Enter phone no.' variant="outlined" onChange={(e)=>oninputChange(e)} name='phone'/>
                </Box>
                <Box>
                    <PhoneIcon style={{paddingLeft:58,position:'absolute',paddingTop:20}}/>
                </Box>
                </InptBox>

                <InptBox>
                <Box>
                    <Txtfld type="email" label='Enter Username' variant="outlined" onChange={(e)=>oninputChange(e)} name='username'/>
                </Box>
                <Box>
                    <PersonIcon style={{paddingLeft:58,position:'absolute',paddingTop:20}}/>
                </Box>
                </InptBox>
                
                <InptBox>
                <Box>
                    <Txtfld type="password" label='Enter password' variant="outlined" onChange={(e)=>oninputChange(e)} name='password'/>
                </Box>
                <Box>
                    <LockIcon style={{paddingLeft:58,position:'absolute',paddingTop:20}}/>
                </Box>
                </InptBox>

                <Box>
                    <BtnLink to="/login" onClick={()=>toggleLogin()}>Sign Up</BtnLink>
                </Box>
                </FormData>
              }
            </Formbox>  
            </Formbx>

    </Homedisplay>

    </Box>
  )
}

export default Form
