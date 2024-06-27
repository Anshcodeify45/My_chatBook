import React from 'react'
import {styled,Box , Typography, Button , TextField, Icon} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';


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







function Form() {
  return (
    
    <Box>
    <Homedisplay>
           <Formbx>
            <Box>
                <Box><img src="https://cdni.iconscout.com/illustration/premium/thumb/couple-chatting-on-social-media-4431098-3692641.png" alt="Logo" /></Box>
                <Box><p style={{fontSize:35}}>"Join Our Chat App Today!"</p></Box>
            </Box>
            <Formbox>
                <FormData>
                <Box>
                    <Typography style={{paddingBottom:50 , paddingLeft:108}} variant='h4'>Login</Typography>
                </Box>
                <InptBox>
                <Box>
                    <Txtfld type="email" label='Enter Username' variant="outlined"/>
                </Box>
                <Box>
                    <PersonIcon style={{paddingLeft:58,position:'absolute',paddingTop:20}}/>
                </Box>
                </InptBox>
                
                <InptBox>
                <Box>
                    <Txtfld type="password" label='Enter password' variant="outlined"/>
                </Box>
                <Box>
                    <LockIcon style={{paddingLeft:58,position:'absolute',paddingTop:20}}/>
                </Box>
                </InptBox>

                <Box>
                    <Btn>Login</Btn>
                </Box>
                <Box style={{display:'flex',paddingTop:20,alignItems:'center',marginLeft:25}}>
                <Box>
                    <Typography>Don't have an account?</Typography>
                </Box>
                <Box>
                <Button style={{border:'none'}}>Sign up</Button>
                </Box>
                </Box>
                
                </FormData>
            </Formbox>  
            </Formbx>

    </Homedisplay>

    </Box>
  )
}

export default Form
