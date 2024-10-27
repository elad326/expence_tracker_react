export default (state, action) => {
    switch(action.type){

        // for delete row - we had to renew the state so we get him with spread operator 
        // and than filter the row that clicked for delete 
        // the action [in GlobalState comp] had to properties -- type, and payload 
        // the type [DELETE_TRANSACTION ] we use at the case . and the id for the deleted row we use the payload 
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
                // add the new transaction to transactions array with the last transactions array and the new transaction
            }

        default:
            return state;
    }
}