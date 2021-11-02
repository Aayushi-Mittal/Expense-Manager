import { ADD_TRANSACTION, DELETE_TRANSACTION, SEARCH_TRANSACTION } from "./actions"

const initialState = {
    transactions: [],
    query:""
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            }
        case SEARCH_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => (transaction.id).includes(action.payload))
            }
        default: return state
    }
}

export default rootReducer;