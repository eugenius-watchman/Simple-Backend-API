 import axios from "axios";

 const baseApiUrl = 'http://localhost:3000/v1';


// createUser
 export const createUser = async (payload) => {
    const createUserEndpoint = `${baseApiUrl}/user`;


    const {data: apiResponse} = await axios.post(
        createUserEndpoint,
         payload
        );

        return apiResponse;
 }


// editUser
export const editUser = async (userId, payload) => {
    const editUserEndpoint = `${baseApiUrl}/user/${userId}`;

const { data: apiResponse } = await axios.put(editUserEndpoint, payload);

return apiResponse; 
}
 

// retrieveUser
export const retrieveUser = async (userId) => {
    const getUserEndpoint = `${baseApiUrl}/user/${userId}`;

    const { data: apiResponse } = await axios.get(getUserEndpoint);

    return apiResponse;
 }

 
 // retrieveAllUsers
export const retrieveAllUsers = async () => {
        const getAllUsersUrlEndpoint = `${baseApiUrl}/user/all`;
    
    const { data: apiResponse } = await axios.get(getAllUsersUrlEndpoint);

    return apiResponse; 
 }

 // deleteUser
 export const deleteUser = async (userId) => {
    const deleteUserEndpoint = `${baseApiUrl}/user/${userId}`;

    const {data: apiResponse } = await axios.delete(deleteUserEndpoint);

    return apiResponse;
 }