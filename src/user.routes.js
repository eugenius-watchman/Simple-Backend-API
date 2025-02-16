import express from 'express';
import { expressYupMiddleware} from 'express-yup-middleware';


// local modules or files
import userController from './controllers/user.controller.js';
import { getUser, addUser, updateUser, deleteUser } from './user.schemas.js';


// appRoutes
const router = express.Router();




// get all users
router.get('/all', userController.getAllUsers);


// get user
router.get(
    '/:id',
    expressYupMiddleware({schemaValidator: getUser }),
     userController.getUser
);


// adding a user 
router.post('/', 
    expressYupMiddleware({schemaValidator: addUser }), 
    userController.addUser
);

// put for updating
router.put(
    '/:id', 
    expressYupMiddleware({schemaValidator: updateUser}), 
    userController.updateUser,
);

// deleting 
router.delete(
    '/:id',
    expressYupMiddleware({schemaValidator: deleteUser}), 
    userController.deleteUser,
 );


export default router;
 