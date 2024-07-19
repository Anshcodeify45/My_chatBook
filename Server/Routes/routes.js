import express from 'express'
import { userSignup ,userLogin,userConversation,userMessages,userMsg, getMsg} from '../Controller/user-contoller.js';

const router =express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.post('/conversation',userConversation);
router.get('/conversation/:userId',userMessages)
router.post('/conversation/message',userMsg)
router.get('/message/:conversationID',getMsg)

export default router;