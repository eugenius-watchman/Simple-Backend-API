import { StatusCodes } from "http-status-codes";
import pino from 'pino';


const logger = pino();

import userService from "../services/user.service.js";

const STATUS = {
    success: "OK",
    failure: "NO"
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

//const getAllUSers
const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();

    if (users.length){
        logger.info(`Fetching all users.`);
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `No users found.`,
     });
};

/**
 * get a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getUser = (req, res) => {
    
    const id = parseInt(req.params.id, 10)
    const user = userService.getUser(id);

    if (user){
        logger.info(`Fetching user ID ${id}.`);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user,
        });
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `User ${id} is not found.`,
     });
};

/**
 * add a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const addUser = (req, res) => {
    // const data = [];
    const { body: user } = req;
  
    //add users
    const addedUser = userService.addUser(user);

    logger.info('Creating a user.');

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser,
    });  
};

/**
 * update a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updateUser = (req, res) => {
    // const data = [];
    const { body: user } = req; // body 

    // check if id is correct by casting
    const id = parseInt(req.params.id, 10)

    //add users
    const updatedUser = userService.updateUser(id, user);

    if (updatedUser) {
        logger.info(`Updating user ID ${id}.`);

        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: updatedUser,
        });
        } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} not found.`,
        });
    }
};

/**
 * remove a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const deleteUser = (req, res) => {
    const { params } = req;

    const id = parseInt(req.params.id, 10)
    const user = userService.getUser(id);
    if (user) {
        userService.removeUser(id);

        logger.info(`Deleting user ID ${id}.`);

        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User ${id} deleted successfully.`,
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User ${id} not found.`,
        })  
    }    
};

export default {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
}