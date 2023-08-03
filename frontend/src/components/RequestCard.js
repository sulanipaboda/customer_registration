import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';


export const RequestCard = () => {
    return (
        <Container>
            <div className="reqcard">
                <h2>Approval for Pre-Overtime Requests</h2>  
                <p>Please Login to the Intranet and Approve pending Requests</p>   
                <Link to="/form" className='btnlink'>
                    <button>Proceed</button>
                </Link>
            </div>
            <br></br>
        </Container>
        
    )

}

export default RequestCard;