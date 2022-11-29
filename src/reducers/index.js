
// const user = {id:8, customerName:'malek', accountNumber:'777777', accountType:'gold'};

const initialState = {

    accounts : [
        {
          id: 1,
          customerName:"Israa Othman",
          accountNumber: "123456",
          accountType: "Savings"
        },
        {
          id: 2,
          customerName:"Ahmad Zahran",
          accountNumber: "345345",
          accountType: "Student accounts"
        },

    ],
    
    numberOfAccounts:2

}

const reducer = (state=initialState, action) => {

    switch(action.type){
        case 'addUser': 
        console.log(action);
        return {
            ...state, 
            accounts : [...state.accounts, action.payload],
        }
        // case 'IINCREASE' :
        //     return{
        //         ...state,
        //         numberOfAccounts : [...state.numberOfAccounts, state.numberOfAccounts+1]
        //     }

        default: return state;
    }

}

export default reducer;























// {
//     id: 3,
//     customerName:"malek Zahran",
//     accountNumber: "de3445",
//     accountType: "empty accounts"
// },
// {
//     id: 4,
//     customerName:"mohammed Zahran",
//     accountNumber: "987654",
//     accountType: "nothing accounts"
// },
// {
//     id: 5,
//     customerName:"ibrahim Zahran",
//     accountNumber: "3452342",
//     accountType: "empty accounts"
// },
// {
//     id: 6,
//     customerName:"Zahran Zahran",
//     accountNumber: "66656767",
//     accountType: "saving accounts"
// },
// {
//     id: 7,
//     customerName:"mosis Zahran",
//     accountNumber: "66656767",
//     accountType: "saving accounts"
// },
