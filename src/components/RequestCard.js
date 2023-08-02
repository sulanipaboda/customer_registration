import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


export const RequestCard = () => {
    return (
        <div className="reqcard">
           <h2>Approval for Pre-Overtime Requests</h2>  
           <p>Please Login to the Intranet and Approve pending Requests</p>   
           <button>Proceed</button>
        </div>
    )

}

export default RequestCard;