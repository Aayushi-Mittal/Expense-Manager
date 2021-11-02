import { ADD_TRANSACTION, DELETE_TRANSACTION, SEARCH_TRANSACTION } from "../actions"

const initialList = () => {
    localStorage.setItem("transactionsList", []);
    const list = localStorage.getItem("transactionsList");
    let transactions = [];
    if (list) {
      transactions = JSON.parse(list);
    }
    return transactions;
};

const initialState = {
    transactions: initialList(),
    query:"",
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TRANSACTION: {
            localStorage.setItem(
              "transactionsList",
              JSON.stringify([action.payload, ...state.transactions])
            );
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
                query: "",
            }
        }
        case DELETE_TRANSACTION: {   
            const { data } = action;
            const updatedList = state.transactions.filter(
                (item) => item.id !== data.id
            );
            localStorage.setItem("transactionList", JSON.stringify(updatedList));
            return {
                ...state,
                transactions: updatedList,
                query: ""
            }
        }
        case SEARCH_TRANSACTION: {
            const { query } = action;
            return {
                ...state,
                query
            }
        }
        default: return state
    }
}

export default rootReducer;