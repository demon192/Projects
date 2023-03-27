export type Action = {
    type: "ADD_REVIEW",
    payload: string
}

export const addReview = (review: string): Action => (
    {
        type: "ADD_REVIEW",
        payload: review
    }
)

// export type loginAction = [
//     { type: "ADD_EMAIL", payload: string },
//     { type: "ADD_PASSWORD", payload: string }
// ]

// export const addLoginDetail = (email: string, password: string): loginAction => (
//     [
//         { type: "ADD_EMAIL", payload: email },
//         { type: "ADD_PASSWORD", payload: password }

//     ]
// )


export type EmailAction = {
    type: "ADD_EMAIL",
    payload: string
}

export const addEmail = (email: string): EmailAction => (
    { type: "ADD_EMAIL", payload: email }
)

// export type PasswordAction = {
//     type: "ADD_PASSWORD",
//     payload: string
// }

// export const addPassword = (password: string): PasswordAction => (
//     { type: "ADD_PASSWORD", payload: password }
// )