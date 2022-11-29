import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import {connect} from 'react-redux';


let newUser = {id:'', customerName: '', accountNumber:'', accountType:''}
let number = '';
const Form = (props) => {

    // const [newUser, setNewUser] = useState({
    //     id : '',
    //     name: '',
    //     accountNumber:'',
    //     accountType: ''

    // });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(newUser);
    // }

    const handleChange = (e) => {

        newUser =  {...newUser, [e.target.name]: e.target.value}
    }

    number = props.NumberOfAcc;

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

        <MDBBtn onClick={props.addUser} type="button" className="mb-4 bg-warning text-dark" block>
          Add user 
        </MDBBtn>

      </form>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
      
    return {
        addUser: () => dispatch({type:'addUser', payload: newUser}),
        // increaseAcc: () => dispatch({type:'INCREASE'})
      }
      
}
// ---------test another
// const anotherDispach = (dispatch) => {
      
//     return {
//         increaseAcc: () => dispatch({type:'INCREASE', payload: number + 1})
//       }
      
// }

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts,
        NumberOfAcc: state.numberOfAccounts
    }
}
  
 


export default connect(mapStateToProps,mapDispatchToProps)(Form);
