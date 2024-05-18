// state: count=0, action, reducer, store
// Action's payload carries the data necessary to update the application state.
//! example 1:
import { createStore } from "redux";

// define constants
const INCREMENT = "INCREMENT"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

// define state
const initialState = {
    count: 0 
};

// define action
const incrementAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementAction = () => {
    return {
        type: DECREMENT
    }
}
const resetAction = () => {
    return {
        type: RESET
    }
}
const incrementByValueAction = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

// define reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count -1
            };
        case RESET:
            return {
                ...state,
                count: 0
            }
    }
}

// define store
const store = createStore(reducer);

// subscribe to store
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch actions
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(resetAction());
store.dispatch(decrementAction());
store.dispatch(incrementByValueAction(5));


//! example 2:
const ADD_USER = "ADD_USER";

const addUserAction = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const userReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return  [...state, action.payload]
    }
}

const store2 = createStore(userReducer);

store2.subscribe(() => {
    console.log(store2.getState());
})

store2.dispatch(addUserAction({name: "John", age: 30}));
store2.dispatch(addUserAction({name: "Jane", age: 25}));


//! example 3:
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const addTodoAction = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

const removeTodoAction = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload)
    }
}

const store3 = createStore(todoReducer);

store3.subscribe(() => {
    
    console.log(store3.getState());
})

store3.dispatch(addTodoAction({id: 1, text: "Learn Redux"}))
store3.dispatch(addTodoAction({id: 2, text: "Learn React"}))
store3.dispatch(removeTodoAction(2))


//! example 4:
const ADD_ARTICLE = "ADD_ARTICLE";
const addArticleAction = (article) => {
    return {
        type: ADD_ARTICLE,
        payload: article
    }
}

const articleReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [...state, action.payload]
    }
}

const store4 = createStore(articleReducer);


store4.subscribe(() => {
    console.log(store4.getState());

})

store4.dispatch(addArticleAction({title: "Sam", content: "Backend developer, UX designer, Frontend developer"}))

store4.dispatch(addArticleAction({title: "Tanjya", content: "Full stack developer, UX designer, Frontend developer"}))

