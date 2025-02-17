import users from "../data/users.data.js";


/**
 * get a user
 * @param {*} userId 
 * @returns 
 */
const get = (userId) => users.find((user) => user.id === userId);


/**
 * get all users
 * @returns 
 */
const getAll = () => users;


/**
 * update a user using its id
 * @param {*} userId integer
 * @param {*} newDetails object
 * @returns 
 */
const update = (userId, newDetails) => {
    // mapping users from user data
    let existingUser = null;
    let userIndex;

    users.map((user, index) => {
        if (user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
    });

    if (!existingUser) {
        return false;
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails
    };
    
    users.splice(userIndex, 1, updatedUser );

    return updatedUser;
}


/**
 * insert user 
 * @param {*} details 
 * @returns 
 */
const insert = (details) => {
    const newUser = { 
        id: users.length + 1, 
        ...details
    };

    users.push(newUser);

    return newUser;
}


/**
 * remove a user using id
 * @param {*} userId 
 * @returns 
 */

const remove = (userId) => {
    const deleteUser = (user, index) => {
        // using optional chaining ?
        if (user?.id === userId) {
            // remove the array elt of the found user
            users.splice(index, 1);
        }
    };

    return users.find(deleteUser);
 
}



export default {
    get,
    getAll,
    update,
    insert,
    remove
}