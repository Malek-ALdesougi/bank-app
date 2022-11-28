

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
        {
            id: 3,
            customerName:"malek Zahran",
            accountNumber: "de3445",
            accountType: "empty accounts"
        },
        {
            id: 4,
            customerName:"mohammed Zahran",
            accountNumber: "987654",
            accountType: "nothing accounts"
        },
        {
            id: 5,
            customerName:"ibrahim Zahran",
            accountNumber: "3452342",
            accountType: "empty accounts"
        },
        {
            id: 6,
            customerName:"Zahran Zahran",
            accountNumber: "66656767",
            accountType: "saving accounts"
        },
        {
            id: 7,
            customerName:"mosis Zahran",
            accountNumber: "66656767",
            accountType: "saving accounts"
        },
]


}

const reducer = (state=initialState, action) => {

    return state;

}

export default reducer;