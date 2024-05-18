//! state - count:0
//! action - increment, decrement, reset
//! reducer
//! store


//! example-1:
import { createStore } from "redux";
//* Define CONSTANTS:
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//* state count:0
const initialCountState = {
    count: 0
};

//* action
const incrementCountAction = () => {
    return {
        type: INCREMENT
    }
};


const decrementCountAction = () => {
    return {
        type: DECREMENT
    }
};
const resetCountAction = () => {
    return {
        type: RESET
    }
};

const incrementCountActionByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
};

// create reducer
const countReducer = (state = initialCountState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };

        case RESET:
            return {
                ...state,
                count: 0
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            };

        default:
            return state;
    }
};

// Create store
const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//! Dispatch actions (Invoke action creators)
store.dispatch(incrementCountAction());
store.dispatch(incrementCountAction());

store.dispatch(decrementCountAction());

store.dispatch(resetCountAction());

store.dispatch(incrementCountActionByValue(8));
store.dispatch(incrementCountActionByValue(18));
store.dispatch(incrementCountActionByValue(100));

//! example-2:
//* Define action type for adding a user
const ADD_USER = "ADD_USER";

//* Initial state containing users array and count
const initialState = {
    users: ["Tanjya", "Fozlur"],
    count: 2
};

//* Action creator for adding a user
const addUsers = (user) => {
    return {
        type: ADD_USER,
        payload: user // Payload contains the user to be added
    }
};

//* Reducer function for user actions
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload], // Add new user to the array
                count: state.count + 1
            }

        default:
            return state;
    }
};

//* Create Redux store with the userReducer
const userStore = createStore(userReducer);

//* Subscribe to store changes for logging
userStore.subscribe(() => {
    console.log(userStore.getState());
});

//* Dispatch action to add a new user
userStore.dispatch(addUsers("Masuma"));
userStore.dispatch(addUsers("Taslima"));
userStore.dispatch(addUsers("Smith"));


//? Example 2:
const ADD_USER1 = "ADD_USER";

// initial state:
const initialState1 = {
    user: ["Tanjya", "Egg"],
    count: 2
}

// action creator:
const addUserAction = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// reducer:
const userReducer1 = (state = initialState1, action) => {
    switch (action.type){
        case ADD_USER:
            return {
                ...state,
                user: [...state.user, action.payload],
                count:  state.count + action.payload.split(",").length
            }
            
        default:
            return state;
    }
}

const store2 = createStore(userReducer1);

store2.subscribe(() => {
    console.log(store2.getState());
})

store2.dispatch(addUserAction("Taslima"));

store2.dispatch(addUserAction("Taslima, Joe, Mike"));