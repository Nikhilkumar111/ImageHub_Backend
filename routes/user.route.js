import express from 'express';
import { signUpUser, loginUser} from "../controllers/user.controller.js";

//  Yes — in the routes I gave you, both login and signup use POST requests.

// Reason:

// Signup → Sending sensitive user data (name, email, password) to the server to create a new account.

// Login → Sending sensitive credentials (email, password) to the server to verify the user.

// Using POST ensures:

// Data is sent in the request body, not in the URL (more secure).

// Fits REST API best practices — POST is used for actions that create or process data.


const router = express.Router();
//Define the routes for the product resource
router.post('/login',loginUser); 

router.post('/signup',signUpUser);


export default router;