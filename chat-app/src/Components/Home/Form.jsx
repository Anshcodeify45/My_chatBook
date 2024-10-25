import React from 'react'
import {styled,Box , Typography, Button , TextField, Container} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useState ,useContext} from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Person3Icon from '@mui/icons-material/Person3';
import { Link } from 'react-router-dom';
import { authenticateSignup ,authenticateLogin} from '../../Service/api';
import { useNavigate } from 'react-router-dom';
import { DataContext} from '../../Context/Dataprovider';


const MainBox =styled(Box)`
    width:100%;
    height:100vh;
    background-color:#00695c;
`
const ChildBox = styled(Box)`
    background-color:#00695c;
    width:100%;
    padding-top:60px;

`

 const Formbx = styled(Box)`
    display: flex;
    width:68%; 
    height:62%;
    align-items: center;     
    margin-left:225px;
    background-color:#fafafa;
`

const LeftBox=styled(Box)`
    width:50%;
    height:79vh;
    background-color:#004d40;
    border-top-right-radius:45%;
    border-bottom-right-radius:45%;
    padding-left:30px;
`

const Logo = styled('img')({
    width:"70%",
    paddingLeft:20,
    paddingTop:35,
})
const Formbox = styled(Box)`
        border:2px;
        border-radius:10px;    
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
        background-color:#004d40;
        color:white;
        font-size:20px;
        border-radius:5px;
        
   `
   const BtnLink = styled(Link)({
    marginLeft:"70px",
    padding:"10px 50px 17px 50px",
    backgroundColor:"#004d40",
    color:"white",
    fontSize:20,
    borderRadius:5,
    textDecoration:"none"
   })

   const Btnlinksignup = styled(Link)({
    color:"white",
    fontSize:17,
    backgroundColor:"#004d40",
    textDecoration:"none",
    alignItems:"center",
    padding:"5px 10px 7px 10px",
    borderRadius:5,
    marginLeft:5,
   })

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
const navigate = useNavigate()
const { setAccount} = useContext(DataContext);







 const toggleSignup = () => {
    toggleAccount(accntIntialvalue.signup)
 }
 const toggleLogin = async() => {
    try{
        let response=  await authenticateSignup(signup);
        if(!response) return
        toggleAccount(accntIntialvalue.login)
        setAccount(signup.name);
    }catch(error){
        console.error("Signup error:", error);
        alert("Signup failed: " + error.message);
    }
 }
 const oninputChange = (e) =>{
    setSignup({...signup,[e.target.name]:e.target.value })
    console.log(signup);
    navigate('/login');
 }
 

 const toggleLoginData = (e) => {
        setLogin({...login , [e.target.name]:e.target.value})
        
 }


const loginuser = async()=>{
    try{
        let response = await authenticateLogin(login)
        console.log(response);
        if(response.status === 200) 
            {
                navigate('/home');
                setAccount({id:response.data.data._id , name:response.data.data.name})
            }else {
                console.error("Login failed:", response.data.message);
                alert("Login failed: " + response.data.message);
            }
    }catch(error){
        console.error("Login error:", error);
        alert("Login failed: " + error.message);
    }

  
}

  return (
    
    <MainBox>
        <ChildBox>

        <Formbx>

            <LeftBox>
                <Box><Logo src="https://cdni.iconscout.com/illustration/premium/thumb/couple-chatting-on-social-media-4431098-3692641.png" alt="Logo" /></Box>
                <Box><p style={{fontSize:35,color:"#e0f2f1"}}>"Join Our chat app Today!"</p></Box>
            </LeftBox>
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
        </ChildBox>
           
    </MainBox>
  )
}

export default Form
