import express from 'express'
import { userSignup ,userLogin,userConversation,userMessages} from '../Controller/user-contoller.js';

const router =express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.post('/conversation',userConversation);
router.get('/conversation/:userId',userMessages)

export default router;