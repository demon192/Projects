// import { loginAction } from "./action"

// export interface loginState {
//     emails: string[],
//     passwords: string[]
// }

// const loginInitialState = {
//     emails: [],
//     passwords: []
// }

// export const loginReducer = (state: loginState = loginInitialState, action: loginAction) => {
//     action.forEach((data) => {
//         switch (data.type) {
//             case "ADD_EMAIL": {
//                 return { ...state.emails, emails: [...state.emails, data.payload] }
//             }
//             case 'ADD_PASSWORD': {
//                 return { ...state.passwords, passwords: [...state.passwords, data.payload] }
//             }
//             default:
//                 return state;
//         }
//     })
// }

import { EmailAction } from "./action";

export interface emailState {
    emails: string[]
}

const initialState = {
    emails: []
}

export const emailReducer = (state: emailState = initialState, action: EmailAction) => {
    switch (action.type) {
        case 'ADD_EMAIL': {
            return { ...state, emails: [...state.emails, action.payload] }
        }
        default:
            return state;
    }
}