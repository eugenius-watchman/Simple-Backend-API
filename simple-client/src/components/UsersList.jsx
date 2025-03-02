//import React from 'react';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Card, Col, Container, Row } from 'react-bootstrap'; // Import Row, Col, and Card from react-bootstrap
import axios from 'axios'; // Import axios
import Layout from './Layout';


const UsersList  = () => {
    const getAllUsersUrlEndpoint = 'http://localhost:3000/v1/user/all';
    const [users, setUsers] = useState({}); // initialize with empty object/array

    const fetchUsers = async () => {
        const { data: apiResponse } = await axios.get(`${getAllUsersUrlEndpoint}`);

         setUsers(apiResponse);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <Layout>
                <h3 className='text-center mb-3 '> Users </h3>
                {Object.values(users).map(user => (
                    <Row className= 'justify-content-center'>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <h4>{user.name}</h4>
                                    <p>{user.email}</p>

                                    {user.city && user.country && (
                                        <p>{user.city} - {user.country}</p>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Layout>
            
        </>
    );
};

export default UsersList;
