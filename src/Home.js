import { useDispatch, useSelector } from "react-redux";

const Home = () => {

  const dispatch = useDispatch();

  const accountData = useSelector((state) => {
    return state.accounts ;
  })

  console.log(accountData);

  return (
    <div className="container col-md-8 mt-5">
      <h1>Total Accounts : {}</h1>
      <table className="table table-border">
        <thead>
          <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Account Number</th>
            <th scope="col">Account type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {accountData.map((item) => {
            return (
                <tr key={item.id}>
                  <th scope="row"> #{item.id}</th>
                  <td>{item.customerName}</td>
                  <td>{item.accountNumber}</td>
                  <td>{item.accountType}</td>
                  <td><button onClick={() => {dispatch({type: 'DELETE-USER', payload: item.id})}} className="btn btn-danger">Delete</button></td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     accounts: state.accounts,
//     numAcc: state.numberOfAccounts,
    
//   };
// };

export default Home;
