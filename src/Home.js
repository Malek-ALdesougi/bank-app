import { connect } from "react-redux";

const Home = (props) => {
  console.log(props.accounts);
  return (
    <div className="container col-md-8 mt-5">
      <table className="table table-border">
        <thead>
          <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Account Number</th>
            <th scope="col">Account type</th>
          </tr>
        </thead>
        <tbody>
          {props.accounts.map((item) => {
            return (
                <tr key={item.id}>
                  <th scope="row"> #{item.id}</th>
                  <td>{item.customerName}</td>
                  <td>{item.accountNumber}</td>
                  <td>{item.accountType}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const importStateFromStoreAsProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(importStateFromStoreAsProps)(Home);
