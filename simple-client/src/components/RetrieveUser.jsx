import React from "react";
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { Card, Col, Container, Row} from 'react-bootstrap'; // Import Row, Col, and Card from react-bootstrap

import axios from 'axios'; // Import axios
import { useParams } from "react-router-dom";
import Layout from "./Layout";


const RetrieveUser = () => {
    const { userId } = useParams();
    const getUserEndpoint = `http://localhost:3000/v1/user/${userId}`;

    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const { data: apiResponse } = await axios.get(`${getUserEndpoint}`);

            setUser(apiResponse);
        } catch (err) {
            setUser(null);
        }
    };

    // call again the fetchUser every time user id is changed  
    useEffect(() => {
        fetchUser();
    }, [userId] );
 

return (

        <Layout>
            { user ? ( // checking if there exists a user 
            <Row className="justify-content-center">
            <Col lg={5} >
            <h3 className='text-center mb-3 '>{user.name}</h3>
                <Card >
                    <Card.Body className="text-center">
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>

                        {user.city && user.country && (
                            <p>
                                {user.city} - {user.country}
                            </p>
                        )}
                    </Card.Body>
                </Card>
            </Col>
            </Row>
            ) : (
                <div className="text-center text-danger fw-bold">
                    User cannot be found. 
                </div>
            )}
        </Layout>
)

}

export default RetrieveUser;