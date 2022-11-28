import { connect } from "react-redux"


const Home = (props) => {
console.log(props.accounts);
    return (
        <div>
            
            {props.accounts.map((item) => {
                return (
                    <ul key={item.id}>
                        <li>
                            {item.id}
                            {item.customerName}
                            {item.customerName}
                            {item.accountNumber}

                        </li>
                    </ul>
                )
            })}

        </div>
    )

}

const importStateFromStoreAsProps = (state) =>{
    return {
        accounts: state.accounts
    }
        
}


export default connect(importStateFromStoreAsProps)(Home);