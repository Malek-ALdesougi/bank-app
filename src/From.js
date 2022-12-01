import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import {useDispatch} from 'react-redux';
import { addUser } from "./reducers";


const Form = (props) => {

    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({
        id : '',
        customerName: '',
        accountNumber:'',
        accountType: ''

    });

    const handleChange = (e) => {

         setNewUser({...newUser, [e.target.name]: e.target.value})
    }

   
    console.log(newUser);

    // number = props.NumberOfAcc;

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <form  className="col-md-4">
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput onChange={handleChange} name="id" type='text' id="form3Example1" label="User ID" />
          </MDBCol>
          <MDBCol>
            <MDBInput onChange={handleChange} name="customerName" type='text' id="form3Example2" label="User name" />
          </MDBCol>
        </MDBRow>
        <MDBInput onChange={handleChange} name="accountNumber" className="mb-4"type="text" id="form3Example3" label="Account number"/>

        <MDBInput onChange={handleChange} name="accountType" className="mb-4"type="text"id="form3Example4"label="Account type"/>

        <MDBBtn onClick={() => dispatch(addUser(newUser))} type="button" className="mb-4 bg-warning text-dark" block>
          Add user 
        </MDBBtn>

      </form>
    </div>
  )
};

export default Form;
