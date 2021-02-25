import { TextField } from '@material-ui/core';
import React from 'react';
import "./Step1.css"

const Step1 = () => {
    return (
        <div>
           <form className="main-form">
               <input type="text" className="form-input" placeholder="Email"/>
               <select class="form-input-select" >
                    <option selected>Select Department</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <br/>
                <br/>
                <input type="text" className="form-input" placeholder="Address"/>
           </form>
        </div>
    );
};

export default Step1;