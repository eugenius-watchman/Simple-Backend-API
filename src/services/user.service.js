// call user dao
import userDao from "../models/persistence/user.dao.js"


/**
 * get user using id
 * @param {*} userId 
 * @returns 
 */
const getUser = (userId) =>  userDao.get(userId);

/**
 * get all users 
 * @returns 
 */
const getAllUsers = () => userDao.getAll();


/**
 * update a user using id
 * @param {*} userId 
 * @param {*} details 
 * @returns 
 */
const updateUser = (userId, details) => userDao.update(userId, details);


/**
 * add a user 
 * @param {*} details 
 * @returns 
 */
const addUser = (details) => userDao.insert(details);


/**
 * remove a user
 * @param {*} userId 
 * @returns 
 */
const removeUser = (userId) => userDao.remove(userId);


export default {
    getUser,
    getAllUsers,
    updateUser,
    addUser,
    removeUser 
}